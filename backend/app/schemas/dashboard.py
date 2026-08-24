from datetime import datetime

from pydantic import BaseModel, ConfigDict


class IslandOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    island_id: str
    name: str
    island_type: str
    latitude: float
    longitude: float
    population: int
    infrastructure_score: float
    has_port: bool
    has_airport: bool
    has_hospital: bool


class HazardOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    scenario_id: str
    hazard_type: str
    severity: float
    start_time: datetime
    duration_hours: float
    affected_area_km2: float
    casualties_estimate: int
    displaced_population: int


class LogisticsZoneOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    zone_id: str
    latitude: float
    longitude: float
    severity: float
    population: int
    priority_index: float
    communication_status: float
    transport_mode_primary: str
    distance_to_supply_hub_km: float


class ResourceAllocationOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    allocation_id: str
    resource_type: str
    quantity: int
    destination_zone: str
    transport_mode: str
    delivery_status: str
    urgency_score: float


class AlertOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    zone_id: str
    level: str
    message: str
    risk_score: float
    created_at: datetime


class AlertCreate(BaseModel):
    zone_id: str
    level: str
    message: str
    risk_score: float


class DashboardSummary(BaseModel):
    active_hazards: int
    population_at_risk: int
    zones_in_critical_priority: int
    resources_in_transit: int
    average_communication_status: float
