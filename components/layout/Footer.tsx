// components/layout/Footer.tsx

export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-4 flex items-center justify-between text-xs"
      style={{ borderColor: "var(--header-border)", color: "var(--muted-foreground)" }}
    >
      <span>© {new Date().getFullYear()} Genesis. All rights reserved.</span>
      <div className="flex items-center gap-4">
        <a href="/docs" className="hover:underline transition-colors">Docs</a>
        <a href="/privacy" className="hover:underline transition-colors">Privacy</a>
        <a href="/terms" className="hover:underline transition-colors">Terms</a>
      </div>
    </footer>
  );
}
