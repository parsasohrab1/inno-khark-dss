from fastapi import APIRouter
from sqlalchemy import select

from app.api.deps import DbSession
from app.models.logistics import LogisticsZone
from app.schemas.dashboard import LogisticsZoneOut

router = APIRouter(prefix="/api/logistics", tags=["logistics"])


@router.get("", response_model=list[LogisticsZoneOut])
async def list_zones(db: DbSession) -> list[LogisticsZone]:
    result = await db.execute(
        select(LogisticsZone).order_by(LogisticsZone.priority_index.desc()).limit(500)
    )
    return list(result.scalars().all())
