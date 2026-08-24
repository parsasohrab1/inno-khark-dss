from sqlalchemy import Boolean, Float, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class Island(Base):
    __tablename__ = "islands"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    island_id: Mapped[str] = mapped_column(String(32), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(128))
    island_type: Mapped[str] = mapped_column(String(32))
    latitude: Mapped[float] = mapped_column(Float)
    longitude: Mapped[float] = mapped_column(Float)
    area_km2: Mapped[float] = mapped_column(Float)
    population: Mapped[int] = mapped_column(Integer)
    elevation_max_m: Mapped[float] = mapped_column(Float)
    infrastructure_score: Mapped[float] = mapped_column(Float)
    has_port: Mapped[bool] = mapped_column(Boolean, default=False)
    has_airport: Mapped[bool] = mapped_column(Boolean, default=False)
    has_hospital: Mapped[bool] = mapped_column(Boolean, default=False)
    distance_to_mainland_km: Mapped[float] = mapped_column(Float)
