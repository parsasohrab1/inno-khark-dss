"""Seed the database with synthetic demo data for local development.

Usage: python -m app.seed
"""

import asyncio

from app.database import AsyncSessionLocal, init_models
from app.models.hazard import HazardScenario
from app.models.island import Island
from app.models.logistics import LogisticsZone
from app.models.resource import ResourceAllocation
from app.services.synthetic_data import SyntheticDataGenerator


async def seed() -> None:
    await init_models()
    generator = SyntheticDataGenerator(seed=2026)
    data = generator.generate_all(
        num_islands=50, num_scenarios=100, num_zones=300, num_allocations=500
    )

    async with AsyncSessionLocal() as session:
        session.add_all(Island(**row) for row in data["islands"].to_dict("records"))
        session.add_all(
            HazardScenario(**row) for row in data["hazard_scenarios"].to_dict("records")
        )
        session.add_all(
            LogisticsZone(**row) for row in data["logistics_zones"].to_dict("records")
        )
        session.add_all(
            ResourceAllocation(**row) for row in data["resource_allocations"].to_dict("records")
        )
        await session.commit()

    print("Seed complete: 50 islands, 100 hazard scenarios, 300 logistics zones, 500 allocations")


if __name__ == "__main__":
    asyncio.run(seed())
