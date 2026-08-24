import { useEffect, useState } from "react";

import { fetchIslands, fetchLogisticsZones } from "../api/dashboard";
import { CrisisMap } from "../components/map/CrisisMap";
import type { Island, LogisticsZone } from "../types";

export function GisMap() {
  const [islands, setIslands] = useState<Island[]>([]);
  const [zones, setZones] = useState<LogisticsZone[]>([]);

  useEffect(() => {
    fetchIslands().then(setIslands).catch(() => setIslands([]));
    fetchLogisticsZones().then(setZones).catch(() => setZones([]));
  }, []);

  return (
    <div className="h-[calc(100vh-8rem)]">
      <CrisisMap islands={islands} zones={zones} />
    </div>
  );
}
