import { useEffect, useState } from "react";

import { fetchHazards, fetchSummary } from "../api/dashboard";
import type { DashboardSummary, Hazard } from "../types";

export function SitRep() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);
  const [hazards, setHazards] = useState<Hazard[]>([]);

  useEffect(() => {
    fetchSummary().then(setSummary).catch(() => setSummary(null));
    fetchHazards().then(setHazards).catch(() => setHazards([]));
  }, []);

  return (
    <div className="max-w-3xl rounded-lg border border-command-border bg-command-panel p-6 leading-8">
      <h1 className="mb-4 text-lg font-bold">Operational Situation Report (SitRep)</h1>
      <p className="text-sm text-slate-300">
        Report generated: {new Date().toLocaleString("fa-IR")}
      </p>
      {summary && (
        <ul className="mt-4 list-inside list-disc text-sm text-slate-200">
          <li>{summary.active_hazards} active crisis scenarios recorded.</li>
          <li>{summary.population_at_risk.toLocaleString("fa-IR")} people are at risk.</li>
          <li>{summary.zones_in_critical_priority} zones are at a critical priority level.</li>
          <li>{summary.resources_in_transit} relief shipments are in transit.</li>
          <li>Average network communication status: {(summary.average_communication_status * 100).toFixed(0)}%</li>
        </ul>
      )}
      <h2 className="mt-6 mb-2 text-sm font-semibold text-slate-300">Latest crisis scenarios</h2>
      <ul className="space-y-1 text-sm text-slate-300">
        {hazards.slice(0, 10).map((h) => (
          <li key={h.scenario_id}>
            {h.hazard_type} — Severity {h.severity.toFixed(1)} — {h.displaced_population} displaced people
          </li>
        ))}
      </ul>
    </div>
  );
}
