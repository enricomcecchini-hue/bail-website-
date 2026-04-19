import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join Us — BAIL Bocconi AI Lab",
  description: "Apply to BAIL — Bocconi AI Lab. Applications open September 2026.",
};

export default function Join() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "5rem 1.5rem 3rem", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 350,
            background: "radial-gradient(ellipse at top, rgba(26,86,255,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A56FF", marginBottom: "0.75rem" }}>
            Join BAIL
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1.25rem", lineHeight: 1.1 }}>
            Be among the first to build with AI at Bocconi.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#94A3B8", lineHeight: 1.75, maxWidth: 540 }}>
            The gap between knowing about AI and using AI is where most students get stuck. We are here to close it. Applications open in September.
          </p>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.05)" }} />

      {/* Application status */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>

          {/* Left: Status card */}
          <div>
            <div
              style={{
                backgroundColor: "#0F1828",
                border: "1px solid rgba(26,86,255,0.3)",
                borderRadius: 16,
                padding: "2.5rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at top, rgba(26,86,255,0.07) 0%, transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  backgroundColor: "rgba(26,86,255,0.12)",
                  border: "1px solid rgba(26,86,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  position: "relative",
                }}
              >
                <svg width="28" height="28" fill="none" stroke="#1A56FF" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
                </svg>
              </div>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "rgba(245,158,11,0.1)",
                  border: "1px solid rgba(245,158,11,0.25)",
                  borderRadius: 100,
                  padding: "0.35rem 1rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#F59E0B",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#F59E0B",
                    display: "inline-block",
                  }}
                />
                Applications not yet open
              </div>

              <h2 style={{ fontWeight: 800, fontSize: "1.5rem", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
                Opens September 2026
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: 1.7, marginBottom: "2rem" }}>
                Applications open at the start of the fall semester. In the meantime,
                follow us to stay updated on our launch.
              </p>

              <div
                style={{
                  backgroundColor: "rgba(26,86,255,0.05)",
                  border: "1px solid rgba(26,86,255,0.15)",
                  borderRadius: 10,
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {[
                  { label: "Format", value: "Applications open to all Bocconi students" },
                  { label: "Start date", value: "September 2026" },
                  { label: "Time commitment", value: "2h/week (meetings) + project work" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", fontSize: "0.85rem" }}>
                    <span style={{ color: "#64748B", fontWeight: 500 }}>{row.label}</span>
                    <span style={{ color: "#CBD5E1", textAlign: "right" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: What you get */}
          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "2rem", letterSpacing: "-0.02em" }}>
              What you get as a member
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { icon: "⬡", title: "Weekly 2-hour sessions", desc: "Every meeting: a concept, a practical tip with live demo, and project work." },
                { icon: "⬡", title: "Real projects on your portfolio", desc: "Mini-projects every 1–2 weeks, plus a semester-long deliverable. Things you can actually show in interviews." },
                { icon: "⬡", title: "Industry speaker network", desc: "Monthly speakers who use AI in their daily work — consulting, finance, startups, product." },
                { icon: "⬡", title: "Community of builders", desc: "A WhatsApp or Discord group where members share prompts, tools, and the best finds of the week." },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      backgroundColor: "rgba(26,86,255,0.12)",
                      border: "1px solid rgba(26,86,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg width="14" height="14" fill="none" stroke="#1A56FF" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.3rem" }}>{item.title}</p>
                    <p style={{ fontSize: "0.875rem", color: "#94A3B8", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.05)" }} />

      {/* Who should apply */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A56FF", marginBottom: "0.75rem" }}>
            Who should apply
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "2.5rem" }}>
            You don&apos;t need to be technical.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              {
                title: "Beginners",
                desc: "You&apos;ve heard about AI and want to actually understand what it can do for you. You don&apos;t need a CS background.",
                icon: "→",
              },
              {
                title: "Intermediate builders",
                desc: "You already use AI tools but want to go deeper — APIs, agents, workflows. You want to build things, not just read about them.",
                icon: "→",
              },
              {
                title: "The curious ones",
                desc: "You're not sure exactly how AI fits into your future yet — but you know it does. You want to figure that out surrounded by people actually trying things.",
                icon: "→",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#0F1828",
                  border: "1px solid #1A2540",
                  borderRadius: 12,
                  padding: "1.75rem",
                }}
              >
                <span style={{ fontSize: "1.2rem", color: "#1A56FF", display: "block", marginBottom: "0.75rem", fontWeight: 700 }}>
                  {card.icon}
                </span>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.5rem" }}>{card.title}</h3>
                <p
                  style={{ fontSize: "0.875rem", color: "#94A3B8", lineHeight: 1.65, margin: 0 }}
                  dangerouslySetInnerHTML={{ __html: card.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow CTA */}
      <section style={{ padding: "4rem 1.5rem 6rem", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            Stay in the loop
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "2rem" }}>
            Follow us on LinkedIn and Instagram for updates on our launch, first events, and everything happening before September.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#1A56FF",
                color: "white",
                padding: "0.8rem 1.75rem",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Follow on LinkedIn
            </Link>
            <Link
              href="https://www.instagram.com/bocconi.ai.lab/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: "1.5px solid #1A2540",
                color: "#CBD5E1",
                padding: "0.8rem 1.75rem",
                borderRadius: 8,
                fontWeight: 500,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              Follow on Instagram
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
