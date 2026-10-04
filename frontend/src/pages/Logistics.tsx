import { useEffect, useState } from "react";

import { fetchLogisticsZones } from "../api/dashboard";
import type { LogisticsZone } from "../types";

export function Logistics() {
  const [zones, setZones] = useState<LogisticsZone[]>([]);

  useEffect(() => {
    fetchLogisticsZones().then(setZones).catch(() => setZones([]));
  }, []);

  return (
    <div className="overflow-auto rounded-lg border border-command-border bg-command-panel">
      <table className="w-full text-sm">
        <thead className="sticky top-0 bg-command-panel text-slate-400">
          <tr className="text-right">
            <th className="p-3">Zone</th>
            <th className="p-3">Population</th>
            <th className="p-3">Severity</th>
            <th className="p-3">Priority</th>
            <th className="p-3">Communication status</th>
            <th className="p-3">Transport</th>
            <th className="p-3">Distance to warehouse (km)</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((zone) => (
            <tr key={zone.zone_id} className="border-t border-command-border/60">
              <td className="p-3">{zone.zone_id}</td>
              <td className="p-3">{zone.population.toLocaleString("fa-IR")}</td>
              <td className="p-3">{zone.severity.toFixed(1)}</td>
              <td className="p-3">{(zone.priority_index * 100).toFixed(0)}%</td>
              <td className="p-3">{(zone.communication_status * 100).toFixed(0)}%</td>
              <td className="p-3">{zone.transport_mode_primary}</td>
              <td className="p-3">{zone.distance_to_supply_hub_km.toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
