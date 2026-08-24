from fastapi import APIRouter
from sqlalchemy import func, select

from app.api.deps import DbSession
from app.models.hazard import HazardScenario
from app.models.logistics import LogisticsZone
from app.models.resource import ResourceAllocation
from app.schemas.dashboard import DashboardSummary

router = APIRouter(prefix="/api/dashboard", tags=["dashboard"])


@router.get("/summary", response_model=DashboardSummary)
async def get_summary(db: DbSession) -> DashboardSummary:
    active_hazards = (
        await db.execute(select(func.count()).select_from(HazardScenario))
    ).scalar_one()
    population_at_risk = (
        await db.execute(select(func.coalesce(func.sum(LogisticsZone.population), 0)))
    ).scalar_one()
    zones_in_critical_priority = (
        await db.execute(
            select(func.count()).select_from(LogisticsZone).where(LogisticsZone.priority_index >= 0.75)
        )
    ).scalar_one()
    resources_in_transit = (
        await db.execute(
            select(func.count())
            .select_from(ResourceAllocation)
            .where(ResourceAllocation.delivery_status == "in_transit")
        )
    ).scalar_one()
    avg_comm = (
        await db.execute(select(func.coalesce(func.avg(LogisticsZone.communication_status), 0)))
    ).scalar_one()

    return DashboardSummary(
        active_hazards=active_hazards,
        population_at_risk=int(population_at_risk),
        zones_in_critical_priority=zones_in_critical_priority,
        resources_in_transit=resources_in_transit,
        average_communication_status=round(float(avg_comm), 3),
    )
