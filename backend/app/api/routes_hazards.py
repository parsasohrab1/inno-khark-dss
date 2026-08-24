from fastapi import APIRouter
from sqlalchemy import select

from app.api.deps import DbSession
from app.models.hazard import HazardScenario
from app.schemas.dashboard import HazardOut

router = APIRouter(prefix="/api/hazards", tags=["hazards"])


@router.get("", response_model=list[HazardOut])
async def list_hazards(db: DbSession) -> list[HazardScenario]:
    result = await db.execute(select(HazardScenario).order_by(HazardScenario.start_time.desc()))
    return list(result.scalars().all())
