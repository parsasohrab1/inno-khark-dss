import { useEffect, useRef, useState } from "react";

import { API_BASE_URL } from "../api/client";
import type { Alert } from "../types";

export function useRealtimeAlerts(initial: Alert[] = []) {
  const [alerts, setAlerts] = useState<Alert[]>(initial);
  const [connected, setConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const wsUrl = API_BASE_URL.replace(/^http/, "ws") + "/ws/alerts";
    const socket = new WebSocket(wsUrl);
    socketRef.current = socket;

    socket.onopen = () => setConnected(true);
    socket.onclose = () => setConnected(false);
    socket.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data) as Alert & { type: string };
        if (payload.type === "alert") {
          setAlerts((prev) => [payload, ...prev].slice(0, 100));
        }
      } catch {
        // ignore malformed payloads
      }
    };

    return () => socket.close();
  }, []);

  return { alerts, connected };
}
