from datetime import datetime

from sqlalchemy import DateTime, Float, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database import Base


class ResourceAllocation(Base):
    __tablename__ = "resource_allocations"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    allocation_id: Mapped[str] = mapped_column(String(32), unique=True, index=True)
    resource_type: Mapped[str] = mapped_column(String(32))
    quantity: Mapped[int] = mapped_column(Integer)
    source_location: Mapped[str] = mapped_column(String(64))
    destination_zone: Mapped[str] = mapped_column(String(32))
    transport_mode: Mapped[str] = mapped_column(String(32))
    travel_time_minutes: Mapped[float] = mapped_column(Float)
    urgency_score: Mapped[float] = mapped_column(Float)
    allocation_time: Mapped[datetime] = mapped_column(DateTime)
    delivery_status: Mapped[str] = mapped_column(String(16), default="pending")
    cost_estimate: Mapped[float] = mapped_column(Float)
