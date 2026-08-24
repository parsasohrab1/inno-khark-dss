from fastapi import APIRouter
from sqlalchemy import select

from app.api.deps import DbSession
from app.models.resource import ResourceAllocation
from app.schemas.dashboard import ResourceAllocationOut

router = APIRouter(prefix="/api/resources", tags=["resources"])


@router.get("", response_model=list[ResourceAllocationOut])
async def list_allocations(db: DbSession) -> list[ResourceAllocation]:
    result = await db.execute(
        select(ResourceAllocation).order_by(ResourceAllocation.allocation_time.desc()).limit(500)
    )
    return list(result.scalars().all())
