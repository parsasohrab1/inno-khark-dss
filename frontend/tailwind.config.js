/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        command: {
          bg: "#0b1220",
          panel: "#111a2e",
          border: "#1f2b45",
          accent: "#3b82f6",
          warn: "#f59e0b",
          critical: "#ef4444",
          ok: "#22c55e",
        },
      },
    },
  },
  plugins: [],
};
