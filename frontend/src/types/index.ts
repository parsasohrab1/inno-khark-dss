export interface Island {
  island_id: string;
  name: string;
  island_type: string;
  latitude: number;
  longitude: number;
  population: number;
  infrastructure_score: number;
  has_port: boolean;
  has_airport: boolean;
  has_hospital: boolean;
}

export interface Hazard {
  scenario_id: string;
  hazard_type: string;
  severity: number;
  start_time: string;
  duration_hours: number;
  affected_area_km2: number;
  casualties_estimate: number;
  displaced_population: number;
}

export interface LogisticsZone {
  zone_id: string;
  latitude: number;
  longitude: number;
  severity: number;
  population: number;
  priority_index: number;
  communication_status: number;
  transport_mode_primary: string;
  distance_to_supply_hub_km: number;
}

export interface ResourceAllocation {
  allocation_id: string;
  resource_type: string;
  quantity: number;
  destination_zone: string;
  transport_mode: string;
  delivery_status: "pending" | "in_transit" | "delivered" | "failed";
  urgency_score: number;
}

export interface Alert {
  zone_id: string;
  level: "info" | "warning" | "critical";
  message: string;
  risk_score: number;
  created_at: string;
}

export interface DashboardSummary {
  active_hazards: number;
  population_at_risk: number;
  zones_in_critical_priority: number;
  resources_in_transit: number;
  average_communication_status: number;
}
