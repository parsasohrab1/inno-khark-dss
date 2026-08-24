import type { Alert } from "../../types";

interface AlertFeedProps {
  alerts: Alert[];
}

const levelClasses: Record<Alert["level"], string> = {
  info: "border-command-accent/40 text-command-accent",
  warning: "border-command-warn/40 text-command-warn",
  critical: "border-command-critical/40 text-command-critical",
};

export function AlertFeed({ alerts }: AlertFeedProps) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-command-border bg-command-panel p-4">
      <div className="mb-2 text-sm text-slate-300">جریان هشدارهای بلادرنگ</div>
      <div className="flex-1 space-y-2 overflow-auto">
        {alerts.length === 0 && (
          <div className="text-xs text-slate-500">هشداری ثبت نشده است</div>
        )}
        {alerts.map((alert, idx) => (
          <div
            key={`${alert.zone_id}-${alert.created_at}-${idx}`}
            className={`rounded-md border-r-4 bg-white/5 px-3 py-2 text-sm ${levelClasses[alert.level]}`}
          >
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>{alert.zone_id}</span>
              <span>{new Date(alert.created_at).toLocaleTimeString("fa-IR")}</span>
            </div>
            <div className="mt-1 text-slate-100">{alert.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
