from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import (
    routes_alerts,
    routes_dashboard,
    routes_hazards,
    routes_islands,
    routes_logistics,
    routes_resources,
    ws,
)
from app.config import get_settings
from app.database import init_models

settings = get_settings()


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_models()
    yield


app = FastAPI(title=settings.app_name, lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes_islands.router)
app.include_router(routes_hazards.router)
app.include_router(routes_logistics.router)
app.include_router(routes_resources.router)
app.include_router(routes_alerts.router)
app.include_router(routes_dashboard.router)
app.include_router(ws.router)


@app.get("/health")
async def health() -> dict[str, str]:
    return {"status": "ok", "service": settings.app_name}
