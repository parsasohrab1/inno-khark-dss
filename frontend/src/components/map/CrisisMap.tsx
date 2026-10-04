import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useRef } from "react";

import type { Island, LogisticsZone } from "../../types";

interface CrisisMapProps {
  islands: Island[];
  zones: LogisticsZone[];
}

const severityColor = (severity: number) => {
  if (severity >= 7) return "#ef4444";
  if (severity >= 4) return "#f59e0b";
  return "#22c55e";
};

export function CrisisMap({ islands, zones }: CrisisMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    mapRef.current = new maplibregl.Map({
      container: containerRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [0, 10],
      zoom: 1.5,
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    islands.forEach((island) => {
      const marker = new maplibregl.Marker({ color: "#3b82f6" })
        .setLngLat([island.longitude, island.latitude])
        .setPopup(new maplibregl.Popup().setText(`${island.name} — Population: ${island.population}`))
        .addTo(map);
      markersRef.current.push(marker);
    });

    zones.slice(0, 150).forEach((zone) => {
      const marker = new maplibregl.Marker({ color: severityColor(zone.severity) })
        .setLngLat([zone.longitude, zone.latitude])
        .setPopup(
          new maplibregl.Popup().setText(
            `${zone.zone_id} — Severity: ${zone.severity.toFixed(1)} — Priority: ${(zone.priority_index * 100).toFixed(0)}%`,
          ),
        )
        .addTo(map);
      markersRef.current.push(marker);
    });
  }, [islands, zones]);

  return <div ref={containerRef} className="h-full w-full rounded-lg border border-command-border" />;
}
