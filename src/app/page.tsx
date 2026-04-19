import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BAIL — Bocconi AI Lab",
  description: "AI as a professional skill, not a subject. Bocconi's practical-first AI community.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "7rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -60%)", width: 600, height: 400,
          background: "radial-gradient(ellipse at center, rgba(26,86,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "rgba(26,86,255,0.1)", border: "1px solid rgba(26,86,255,0.25)",
              borderRadius: 100, padding: "0.35rem 1rem", fontSize: "0.78rem", fontWeight: 600,
              color: "#1A56FF", letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: "1.75rem",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#1A56FF", display: "inline-block" }} />
              Bocconi AI Lab
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              AI as a{" "}
              <span style={{ background: "linear-gradient(135deg, #1A56FF 0%, #60A5FA 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                professional skill
              </span>
              ,<br />not a subject.
            </h1>

            <p style={{ fontSize: "1.15rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: 560 }}>
              Most AI associations teach what AI is. We teach what to do with it. Weekly hands-on sessions, real projects, and a community that builds together.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/join" className="btn-blue">Join BAIL</Link>
              <Link href="/about" className="btn-ghost">Learn more</Link>
            </div>
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.05)" }} />

      {/* What we do */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#1A56FF", marginBottom: "0.75rem" }}>Our approach</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1rem" }}>Practical-first, always.</h2>
          <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.75, maxWidth: 560, marginBottom: "3.5rem" }}>
            No heavy theory. No slides full of definitions. You show up, you build something, you leave knowing one more thing you can actually use at work.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { n: "01", title: "Weekly Projects", body: "Every meeting includes a hands-on build. Mini-projects in 1–2 week sprints that teach a specific AI skill." },
              { n: "02", title: "AI Tip of the Week", body: "One trick. Live demo. You leave knowing more than when you walked in." },
              { n: "03", title: "Semester Project", body: "One bigger deliverable built collectively. Ends with Demo Day where every group presents what they shipped." },
              { n: "04", title: "Guest Speakers", body: "Professionals who use AI in their daily work — consulting, finance, startups." },
            ].map((item) => (
              <div key={item.n} className="hover-lift" style={{ backgroundColor: "#0F1828", border: "1px solid #1A2540", borderRadius: 12, padding: "1.75rem" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#1A56FF", letterSpacing: "0.1em" }}>{item.n}</span>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", margin: "0.6rem 0 0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.05)" }} />

      {/* CTA */}
      <section style={{ padding: "5rem 1.5rem", textAlign: "center" as const }}>
        <div style={{ maxWidth: 620, margin: "0 auto", backgroundColor: "#0F1828", border: "1px solid rgba(26,86,255,0.25)", borderRadius: 20, padding: "3.5rem 2rem", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, height: 200, background: "radial-gradient(ellipse, rgba(26,86,255,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
          <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1rem", position: "relative" }}>
            Ready to build with AI?
          </h2>
          <p style={{ color: "#94A3B8", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", position: "relative" }}>
            Applications open in September. Be among the first to join Bocconi&apos;s most practical AI community.
          </p>
          <Link href="/join" className="btn-blue" style={{ position: "relative" }}>Apply for September</Link>
        </div>
      </section>
    </>
  );
}
