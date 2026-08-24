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
      <h1 className="mb-4 text-lg font-bold">گزارش وضعیت عملیاتی (SitRep)</h1>
      <p className="text-sm text-slate-300">
        تاریخ تولید گزارش: {new Date().toLocaleString("fa-IR")}
      </p>
      {summary && (
        <ul className="mt-4 list-inside list-disc text-sm text-slate-200">
          <li>{summary.active_hazards} سناریوی بحران فعال ثبت شده است.</li>
          <li>{summary.population_at_risk.toLocaleString("fa-IR")} نفر در معرض خطر قرار دارند.</li>
          <li>{summary.zones_in_critical_priority} منطقه در سطح اولویت بحرانی هستند.</li>
          <li>{summary.resources_in_transit} محموله امدادی در حال انتقال است.</li>
          <li>میانگین وضعیت ارتباطات شبکه: {(summary.average_communication_status * 100).toFixed(0)}٪</li>
        </ul>
      )}
      <h2 className="mt-6 mb-2 text-sm font-semibold text-slate-300">آخرین سناریوهای بحران</h2>
      <ul className="space-y-1 text-sm text-slate-300">
        {hazards.slice(0, 10).map((h) => (
          <li key={h.scenario_id}>
            {h.hazard_type} — شدت {h.severity.toFixed(1)} — {h.displaced_population} نفر آواره
          </li>
        ))}
      </ul>
    </div>
  );
}
