// components/layout/Header.tsx

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 border-b"
      style={{ backgroundColor: "var(--header-bg)", borderColor: "var(--header-border)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ backgroundColor: "var(--accent)" }}
          >
            G
          </span>
          <span style={{ color: "var(--foreground)" }}>Genesis</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="hidden md:flex items-center gap-1">
        <Link href="/workspace"
          className="px-3 py-1.5 rounded-md text-sm transition-colors"
          style={{ color: "var(--muted-foreground)" }}
        >
          Workspace
        </Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <Link href="/login"
          className="px-3 py-1.5 rounded-md text-sm transition-colors"
          style={{ color: "var(--muted-foreground)" }}
        >
          Login
        </Link>
        <Link href="/register"
          className="px-3 py-1.5 rounded-md text-sm font-medium text-white transition-colors"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
