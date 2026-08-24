import { Route, Routes } from "react-router-dom";

import { DashboardLayout } from "./components/layout/DashboardLayout";
import { AlertsPage } from "./pages/AlertsPage";
import { CommandDashboard } from "./pages/CommandDashboard";
import { GisMap } from "./pages/GisMap";
import { Logistics } from "./pages/Logistics";
import { SitRep } from "./pages/SitRep";

export default function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<CommandDashboard />} />
        <Route path="/map" element={<GisMap />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/sitrep" element={<SitRep />} />
      </Routes>
    </DashboardLayout>
  );
}
