import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(26,86,255,0.12)",
        padding: "2.5rem 1.5rem",
        backgroundColor: "#080E1C",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
            <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "#1A56FF" }}>AI</span>
            <span style={{ fontWeight: 500, fontSize: "0.65rem", color: "#94A3B8", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Bocconi Lab
            </span>
          </div>
          <p style={{ fontSize: "0.8rem", color: "#64748B", margin: 0 }}>
            © {new Date().getFullYear()} BAIL — Bocconi AI Lab. All rights reserved.
          </p>
        </div>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/blog", label: "Blog" },
            { href: "/join", label: "Join Us" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: "0.85rem", color: "#64748B", textDecoration: "none" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#64748B", transition: "color 0.2s" }}
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#64748B", transition: "color 0.2s" }}
            aria-label="Instagram"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
