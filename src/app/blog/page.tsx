import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — BAIL Bocconi AI Lab",
  description: "AI Tips of the Week, project write-ups, and resources from BAIL.",
};

export default function Blog() {
  return (
    <>
      {/* Header */}
      <section style={{ padding: "5rem 1.5rem 3rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A56FF", marginBottom: "0.75rem" }}>
            Blog
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1.25rem", lineHeight: 1.1 }}>
            AI Tips & Insights
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.75, maxWidth: 540 }}>
            Our weekly tips, project write-ups, and everything we learn along the way. Content drops when we ship something worth sharing.
          </p>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.05)" }} />

      {/* Coming soon state */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Category filters (visual only for now) */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            {["All", "AI Tips", "Project Write-ups", "Tools", "Interviews"].map((cat, i) => (
              <button
                key={cat}
                style={{
                  backgroundColor: i === 0 ? "#1A56FF" : "transparent",
                  border: `1px solid ${i === 0 ? "#1A56FF" : "#1A2540"}`,
                  color: i === 0 ? "white" : "#94A3B8",
                  padding: "0.4rem 1rem",
                  borderRadius: 100,
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Empty state */}
          <div
            style={{
              backgroundColor: "#0F1828",
              border: "1px dashed rgba(26,86,255,0.25)",
              borderRadius: 16,
              padding: "5rem 2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                backgroundColor: "rgba(26,86,255,0.1)",
                border: "1px solid rgba(26,86,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
            >
              <svg width="24" height="24" fill="none" stroke="#1A56FF" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2 style={{ fontWeight: 700, fontSize: "1.3rem", marginBottom: "0.75rem" }}>
              Content coming soon
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 2rem" }}>
              BAIL launches in September 2025. Our first AI Tips of the Week, project reports, and member write-ups will appear here once sessions begin.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "rgba(26,86,255,0.08)",
                border: "1px solid rgba(26,86,255,0.2)",
                borderRadius: 8,
                padding: "0.75rem 1.25rem",
                fontSize: "0.875rem",
                color: "#94A3B8",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#1A56FF",
                  display: "inline-block",
                  animation: "pulse 2s ease infinite",
                }}
              />
              First posts expected: September 2025
            </div>
          </div>

          {/* Preview cards (greyed out) */}
          <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#64748B", letterSpacing: "0.1em", textTransform: "uppercase", margin: "3rem 0 1.25rem" }}>
            What to expect
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {[
              { tag: "AI Tip", title: "How to cut your prompt tokens in half", preview: "One technique that changes how you use ChatGPT, Claude, or any LLM at work." },
              { tag: "Project", title: "Building a CV analyzer in one session", preview: "A walkthrough of our first mini-project — from idea to working prototype in 90 minutes." },
              { tag: "Interview", title: "How a consultant uses AI every day", preview: "What our first guest speaker does differently. Tools, habits, and what they'd tell their past self." },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: "#0A1020",
                  border: "1px solid #1A2540",
                  borderRadius: 12,
                  padding: "1.5rem",
                  opacity: 0.5,
                  cursor: "default",
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#1A56FF",
                    backgroundColor: "rgba(26,86,255,0.1)",
                    border: "1px solid rgba(26,86,255,0.15)",
                    borderRadius: 4,
                    padding: "0.2rem 0.5rem",
                    display: "inline-block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {card.tag}
                </span>
                <h3 style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem", lineHeight: 1.4 }}>{card.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "#64748B", margin: 0, lineHeight: 1.6 }}>{card.preview}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
