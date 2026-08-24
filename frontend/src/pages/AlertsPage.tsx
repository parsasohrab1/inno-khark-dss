import { useEffect, useState } from "react";

import { fetchAlerts } from "../api/dashboard";
import { AlertFeed } from "../components/alerts/AlertFeed";
import { useRealtimeAlerts } from "../hooks/useRealtimeAlerts";
import type { Alert } from "../types";

export function AlertsPage() {
  const [initialAlerts, setInitialAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    fetchAlerts().then(setInitialAlerts).catch(() => setInitialAlerts([]));
  }, []);

  const { alerts } = useRealtimeAlerts(initialAlerts);

  return (
    <div className="h-[calc(100vh-8rem)]">
      <AlertFeed alerts={alerts} />
    </div>
  );
}
