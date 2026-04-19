"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/join", label: "Join Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{ position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid rgba(26,86,255,0.12)", backdropFilter: "blur(12px)", backgroundColor: "rgba(11,17,32,0.88)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1.5rem", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontWeight: 800, fontSize: "1.5rem", color: "#1A56FF", letterSpacing: "-0.03em" }}>AI</span>
            <span style={{ fontWeight: 500, fontSize: "0.65rem", color: "#94A3B8", letterSpacing: "0.18em", textTransform: "uppercase" }}>Bocconi Lab</span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="nav-desktop">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${pathname === l.href ? "nav-link-active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/join" className="btn-blue" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem", fontWeight: 600 }}>
              Apply
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: "#94A3B8" }}
            className="nav-hamburger"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}>
                <line x1="4" y1="4" x2="18" y2="18" /><line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2}>
                <line x1="3" y1="7" x2="19" y2="7" /><line x1="3" y1="12" x2="19" y2="12" /><line x1="3" y1="17" x2="19" y2="17" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ borderTop: "1px solid rgba(26,86,255,0.12)", padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }} className="nav-mobile-menu">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: "1rem", fontWeight: 500, textDecoration: "none", color: pathname === l.href ? "#ffffff" : "#94A3B8" }}>
                {l.label}
              </Link>
            ))}
            <Link href="/join" onClick={() => setOpen(false)} className="btn-blue" style={{ textAlign: "center", marginTop: 4 }}>
              Apply
            </Link>
          </div>
        )}
      </nav>

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-hamburger { display: none !important; }
        @media (max-width: 680px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
