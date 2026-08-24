from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    app_name: str = "AI-DSS Island Command Dashboard API"
    environment: str = "development"
    database_url: str = "postgresql+asyncpg://dss:dss@localhost:5432/aidss_island"
    cors_origins: list[str] = ["http://localhost:5173"]
    secret_key: str = "change-me-in-production"


@lru_cache
def get_settings() -> Settings:
    return Settings()
