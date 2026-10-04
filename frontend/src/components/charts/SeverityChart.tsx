import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import type { Hazard } from "../../types";

interface SeverityChartProps {
  hazards: Hazard[];
}

export function SeverityChart({ hazards }: SeverityChartProps) {
  const data = hazards
    .slice(0, 12)
    .map((h) => ({ name: h.scenario_id.replace("SCN-", "#"), severity: Number(h.severity.toFixed(1)) }));

  return (
    <div className="h-64 rounded-lg border border-command-border bg-command-panel p-4">
      <div className="mb-2 text-sm text-slate-300">Severity of recent crises</div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2b45" />
          <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
          <YAxis stroke="#64748b" fontSize={12} domain={[0, 10]} />
          <Tooltip contentStyle={{ background: "#111a2e", border: "1px solid #1f2b45" }} />
          <Bar dataKey="severity" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
