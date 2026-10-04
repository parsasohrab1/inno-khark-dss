import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import type { ResourceAllocation } from "../../types";

interface ResourceStatusChartProps {
  allocations: ResourceAllocation[];
}

const COLORS: Record<string, string> = {
  pending: "#f59e0b",
  in_transit: "#3b82f6",
  delivered: "#22c55e",
  failed: "#ef4444",
};

export function ResourceStatusChart({ allocations }: ResourceStatusChartProps) {
  const counts = allocations.reduce<Record<string, number>>((acc, a) => {
    acc[a.delivery_status] = (acc[a.delivery_status] ?? 0) + 1;
    return acc;
  }, {});
  const data = Object.entries(counts).map(([status, count]) => ({ status, count }));

  return (
    <div className="h-64 rounded-lg border border-command-border bg-command-panel p-4">
      <div className="mb-2 text-sm text-slate-300">Resource allocation status</div>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie data={data} dataKey="count" nameKey="status" outerRadius={80}>
            {data.map((entry) => (
              <Cell key={entry.status} fill={COLORS[entry.status] ?? "#64748b"} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ background: "#111a2e", border: "1px solid #1f2b45" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
