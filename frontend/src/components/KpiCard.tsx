interface KpiCardProps {
  label: string;
  value: string | number;
  tone?: "default" | "warn" | "critical" | "ok";
}

const toneClasses: Record<NonNullable<KpiCardProps["tone"]>, string> = {
  default: "text-slate-100",
  warn: "text-command-warn",
  critical: "text-command-critical",
  ok: "text-command-ok",
};

export function KpiCard({ label, value, tone = "default" }: KpiCardProps) {
  return (
    <div className="rounded-lg border border-command-border bg-command-panel p-4">
      <div className="text-xs text-slate-400">{label}</div>
      <div className={`mt-2 text-2xl font-semibold ${toneClasses[tone]}`}>{value}</div>
    </div>
  );
}
