import { useEffect, useState } from "react";

import { fetchAlerts, fetchHazards, fetchResourceAllocations, fetchSummary } from "../api/dashboard";
import { AlertFeed } from "../components/alerts/AlertFeed";
import { ResourceStatusChart } from "../components/charts/ResourceStatusChart";
import { SeverityChart } from "../components/charts/SeverityChart";
import { KpiCard } from "../components/KpiCard";
import { useRealtimeAlerts } from "../hooks/useRealtimeAlerts";
import type { DashboardSummary, Hazard, ResourceAllocation } from "../types";

export function CommandDashboard() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [hazards, setHazards] = useState<Hazard[]>([]);
  const [allocations, setAllocations] = useState<ResourceAllocation[]>([]);
  const [initialAlerts, setInitialAlerts] = useState<Awaited<ReturnType<typeof fetchAlerts>>>([]);

  useEffect(() => {
    fetchSummary().then(setSummary).catch(() => setSummary(null));
    fetchHazards().then(setHazards).catch(() => setHazards([]));
    fetchResourceAllocations().then(setAllocations).catch(() => setAllocations([]));
    fetchAlerts().then(setInitialAlerts).catch(() => setInitialAlerts([]));
  }, []);

  const { alerts } = useRealtimeAlerts(initialAlerts);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        <KpiCard label="Active crises" value={summary?.active_hazards ?? "—"} tone="warn" />
        <KpiCard label="Population at risk" value={summary?.population_at_risk.toLocaleString("fa-IR") ?? "—"} tone="critical" />
        <KpiCard label="Critical-priority zones" value={summary?.zones_in_critical_priority ?? "—"} tone="critical" />
        <KpiCard label="Resources in transit" value={summary?.resources_in_transit ?? "—"} tone="ok" />
        <KpiCard
          label="Average communication status"
          value={summary ? `${(summary.average_communication_status * 100).toFixed(0)}%` : "—"}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <SeverityChart hazards={hazards} />
        <ResourceStatusChart allocations={allocations} />
        <div className="h-64 lg:col-span-1">
          <AlertFeed alerts={alerts} />
        </div>
      </div>
    </div>
  );
}
