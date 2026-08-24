from datetime import datetime

from sqlalchemy import DateTime, Float, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class LogisticsZone(Base):
    __tablename__ = "logistics_zones"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    zone_id: Mapped[str] = mapped_column(String(32), unique=True, index=True)
    latitude: Mapped[float] = mapped_column(Float)
    longitude: Mapped[float] = mapped_column(Float)
    severity: Mapped[float] = mapped_column(Float)
    population: Mapped[int] = mapped_column(Integer)
    daily_water_need_liters: Mapped[int] = mapped_column(Integer)
    daily_food_need_units: Mapped[int] = mapped_column(Integer)
    priority_index: Mapped[float] = mapped_column(Float)
    fallback_trigger: Mapped[int] = mapped_column(Integer, default=0)
    medical_supply_need: Mapped[int] = mapped_column(Integer)
    shelter_need: Mapped[int] = mapped_column(Integer)
    transport_mode_primary: Mapped[str] = mapped_column(String(32))
    distance_to_supply_hub_km: Mapped[float] = mapped_column(Float)
    communication_status: Mapped[float] = mapped_column(Float)
    last_contact_time: Mapped[datetime] = mapped_column(DateTime)
