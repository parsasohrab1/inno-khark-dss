import { apiClient } from "./client";
import type { Alert, DashboardSummary, Hazard, Island, LogisticsZone, ResourceAllocation } from "../types";

export const fetchSummary = async (): Promise<DashboardSummary> =>
  (await apiClient.get<DashboardSummary>("/api/dashboard/summary")).data;

export const fetchIslands = async (): Promise<Island[]> =>
  (await apiClient.get<Island[]>("/api/islands")).data;

export const fetchHazards = async (): Promise<Hazard[]> =>
  (await apiClient.get<Hazard[]>("/api/hazards")).data;

export const fetchLogisticsZones = async (): Promise<LogisticsZone[]> =>
  (await apiClient.get<LogisticsZone[]>("/api/logistics")).data;

export const fetchResourceAllocations = async (): Promise<ResourceAllocation[]> =>
  (await apiClient.get<ResourceAllocation[]>("/api/resources")).data;

export const fetchAlerts = async (): Promise<Alert[]> =>
  (await apiClient.get<Alert[]>("/api/alerts")).data;
