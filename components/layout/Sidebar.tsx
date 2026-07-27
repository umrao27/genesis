// components/layout/Sidebar.tsx

import Link from "next/link";

const navItems = [
  { href: "/workspace", label: "Overview", icon: "⊞" },
  { href: "/workspace/create", label: "New Workspace", icon: "+" },
];

export default function Sidebar() {
  return (
    <aside
      className="fixed top-14 left-0 bottom-0 w-56 flex flex-col border-r overflow-y-auto z-40"
      style={{ backgroundColor: "var(--sidebar-bg)", borderColor: "var(--sidebar-border)" }}
    >
      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-0.5">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors w-full"
            style={{ color: "var(--muted-foreground)" }}
          >
            <span className="text-base leading-none">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="p-3 border-t" style={{ borderColor: "var(--sidebar-border)" }}>
        <div
          className="flex items-center gap-2.5 px-3 py-2 rounded-md text-sm"
          style={{ color: "var(--muted-foreground)" }}
        >
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-white flex-shrink-0"
            style={{ backgroundColor: "var(--accent)" }}
          >
            U
          </span>
          <span className="truncate">User</span>
        </div>
      </div>
    </aside>
  );
}
