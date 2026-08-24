from datetime import datetime

from fastapi import APIRouter
from sqlalchemy import select

from app.api.deps import DbSession
from app.core.realtime import connection_manager
from app.models.alert import Alert
from app.schemas.dashboard import AlertCreate, AlertOut

router = APIRouter(prefix="/api/alerts", tags=["alerts"])


@router.get("", response_model=list[AlertOut])
async def list_alerts(db: DbSession) -> list[Alert]:
    result = await db.execute(select(Alert).order_by(Alert.created_at.desc()).limit(200))
    return list(result.scalars().all())


@router.post("", response_model=AlertOut)
async def create_alert(alert: AlertCreate, db: DbSession) -> Alert:
    record = Alert(
        zone_id=alert.zone_id,
        level=alert.level,
        message=alert.message,
        risk_score=alert.risk_score,
        created_at=datetime.utcnow(),
    )
    db.add(record)
    await db.commit()
    await db.refresh(record)
    await connection_manager.broadcast(
        {
            "type": "alert",
            "zone_id": record.zone_id,
            "level": record.level,
            "message": record.message,
            "risk_score": record.risk_score,
            "created_at": record.created_at.isoformat(),
        }
    )
    return record
