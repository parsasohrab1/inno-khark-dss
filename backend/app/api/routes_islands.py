from fastapi import APIRouter
from sqlalchemy import select

from app.api.deps import DbSession
from app.models.island import Island
from app.schemas.dashboard import IslandOut

router = APIRouter(prefix="/api/islands", tags=["islands"])


@router.get("", response_model=list[IslandOut])
async def list_islands(db: DbSession) -> list[Island]:
    result = await db.execute(select(Island))
    return list(result.scalars().all())
