import random
from datetime import datetime, timedelta

import numpy as np
import pandas as pd

ISLAND_TYPES = ["Coral", "Volcanic", "Sedimentary", "Artificial"]
HAZARD_TYPES = ["Flood", "Storm", "Earthquake", "Fire", "Sea level rise", "Drought"]
RESOURCE_TYPES = ["Water", "Food", "Medicine", "Shelter", "Fuel", "Medical equipment", "Blankets"]
TRANSPORT_MODES = ["On foot", "Relief vehicle", "Helicopter", "Vessel", "Motorcycle"]


class SyntheticDataGenerator:
    """Generates synthetic training/demo data for the island crisis dashboard."""

    def __init__(self, seed: int = 42):
        self._rng = np.random.default_rng(seed)
        random.seed(seed)

    def generate_islands(self, count: int = 200) -> pd.DataFrame:
        rows = []
        for i in range(count):
            rows.append(
                {
                    "island_id": f"ISL-{i:04d}",
                    "name": f"Island-{i + 1}",
                    "island_type": random.choice(ISLAND_TYPES),
                    "latitude": self._rng.uniform(-90, 90),
                    "longitude": self._rng.uniform(-180, 180),
                    "area_km2": self._rng.uniform(0.5, 500),
                    "population": int(self._rng.uniform(50, 50000)),
                    "elevation_max_m": self._rng.uniform(1, 500),
                    "infrastructure_score": self._rng.uniform(0, 1),
                    "has_port": random.choice([True, False]),
                    "has_airport": random.choice([True, False]),
                    "has_hospital": random.choice([True, False]),
                    "distance_to_mainland_km": self._rng.uniform(1, 500),
                }
            )
        return pd.DataFrame(rows)

    def generate_hazard_scenarios(self, count: int = 1000) -> pd.DataFrame:
        rows = []
        for i in range(count):
            rows.append(
                {
                    "scenario_id": f"SCN-{i:05d}",
                    "hazard_type": random.choice(HAZARD_TYPES),
                    "severity": self._rng.uniform(1, 10),
                    "start_time": datetime.now() - timedelta(days=self._rng.uniform(0, 365)),
                    "duration_hours": self._rng.uniform(1, 168),
                    "affected_area_km2": self._rng.uniform(0.1, 100),
                    "casualties_estimate": int(self._rng.poisson(10)),
                    "displaced_population": int(self._rng.poisson(100)),
                    "warning_time_hours": self._rng.uniform(0, 48),
                    "is_forecasted": random.choice([True, False]),
                }
            )
        return pd.DataFrame(rows)

    def generate_logistics_zones(self, count: int = 5000) -> pd.DataFrame:
        rows = []
        for i in range(count):
            population = self._rng.uniform(50, 50000)
            rows.append(
                {
                    "zone_id": f"ZONE-{i:06d}",
                    "latitude": self._rng.uniform(-90, 90),
                    "longitude": self._rng.uniform(-180, 180),
                    "severity": self._rng.uniform(0, 10),
                    "population": int(population),
                    "daily_water_need_liters": int(population * self._rng.uniform(2, 5)),
                    "daily_food_need_units": int(population * self._rng.uniform(1, 3)),
                    "priority_index": self._rng.uniform(0, 1),
                    "fallback_trigger": random.choice([0, 1]),
                    "medical_supply_need": int(self._rng.uniform(0, 100)),
                    "shelter_need": int(self._rng.uniform(0, 200)),
                    "transport_mode_primary": random.choice(TRANSPORT_MODES),
                    "distance_to_supply_hub_km": self._rng.uniform(0.5, 200),
                    "communication_status": self._rng.uniform(0, 1),
                    "last_contact_time": datetime.now() - timedelta(hours=self._rng.uniform(0, 72)),
                }
            )
        return pd.DataFrame(rows)

    def generate_resource_allocations(self, count: int = 10000, max_zone_index: int = 5000) -> pd.DataFrame:
        rows = []
        for i in range(count):
            rows.append(
                {
                    "allocation_id": f"ALLOC-{i:07d}",
                    "resource_type": random.choice(RESOURCE_TYPES),
                    "quantity": int(self._rng.uniform(1, 1000)),
                    "source_location": f"Hub-{random.randint(1, 50)}",
                    "destination_zone": f"ZONE-{random.randint(1, max_zone_index):06d}",
                    "transport_mode": random.choice(TRANSPORT_MODES),
                    "travel_time_minutes": self._rng.uniform(10, 600),
                    "urgency_score": self._rng.uniform(0, 1),
                    "allocation_time": datetime.now() - timedelta(hours=self._rng.uniform(0, 168)),
                    "delivery_status": random.choice(["pending", "in_transit", "delivered", "failed"]),
                    "cost_estimate": self._rng.uniform(100, 100000),
                }
            )
        return pd.DataFrame(rows)

    def generate_all(
        self,
        num_islands: int = 200,
        num_scenarios: int = 1000,
        num_zones: int = 5000,
        num_allocations: int = 10000,
    ) -> dict[str, pd.DataFrame]:
        return {
            "islands": self.generate_islands(num_islands),
            "hazard_scenarios": self.generate_hazard_scenarios(num_scenarios),
            "logistics_zones": self.generate_logistics_zones(num_zones),
            "resource_allocations": self.generate_resource_allocations(num_allocations, num_zones),
        }
