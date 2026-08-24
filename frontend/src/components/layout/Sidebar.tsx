import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "داشبورد فرماندهی", end: true },
  { to: "/map", label: "نقشه تعاملی GIS" },
  { to: "/logistics", label: "لجستیک و منابع" },
  { to: "/alerts", label: "هشدارها" },
  { to: "/sitrep", label: "گزارش وضعیت (SitRep)" },
];

export function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-l border-command-border bg-command-panel p-4">
      <div className="mb-6 text-lg font-bold text-slate-100">AI-DSS Island</div>
      <nav className="flex flex-col gap-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm transition-colors ${
                isActive
                  ? "bg-command-accent/20 text-command-accent"
                  : "text-slate-300 hover:bg-white/5"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
