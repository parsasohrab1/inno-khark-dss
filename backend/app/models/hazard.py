from datetime import datetime

from sqlalchemy import Boolean, DateTime, Float, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class HazardScenario(Base):
    __tablename__ = "hazard_scenarios"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    scenario_id: Mapped[str] = mapped_column(String(32), unique=True, index=True)
    hazard_type: Mapped[str] = mapped_column(String(32))
    severity: Mapped[float] = mapped_column(Float)
    start_time: Mapped[datetime] = mapped_column(DateTime)
    duration_hours: Mapped[float] = mapped_column(Float)
    affected_area_km2: Mapped[float] = mapped_column(Float)
    casualties_estimate: Mapped[int] = mapped_column(Integer)
    displaced_population: Mapped[int] = mapped_column(Integer)
    warning_time_hours: Mapped[float] = mapped_column(Float)
    is_forecasted: Mapped[bool] = mapped_column(Boolean, default=False)
