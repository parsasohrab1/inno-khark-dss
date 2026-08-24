import type { ReactNode } from "react";

import { useRealtimeAlerts } from "../../hooks/useRealtimeAlerts";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { connected } = useRealtimeAlerts();

  return (
    <div className="flex h-screen bg-command-bg">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar connected={connected} />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
