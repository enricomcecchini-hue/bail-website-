import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — BAIL Bocconi AI Lab",
  description: "Our mission, vision, how we work, and the three verticals that define BAIL.",
};

export default function About() {
  return (
    <>
      {/* Page header */}
      <section style={{ padding: "5rem 1.5rem 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: "40%", width: 500, height: 300, background: "radial-gradient(ellipse at center, rgba(26,86,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A56FF", marginBottom: "0.75rem" }}>About BAIL</p>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1.25rem", maxWidth: 700, lineHeight: 1.1 }}>
            There&apos;s a lot of AI talk at Bocconi. Not enough AI doing.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#94A3B8", lineHeight: 1.75, maxWidth: 580 }}>
            BAIL — Bocconi AI Lab — is a student association built around a simple observation: most students know what AI is. Few know what to do with it. We&apos;re changing that, one project at a time.
          </p>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.05)" }} />

      {/* Mission & Vision */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {[
            {
              label: "Mission",
              title: "Make AI a practical skill for every Bocconi student.",
              body: "We run weekly sessions that combine concept explanations, live demos, and real project work. Every meeting leaves you with something you can immediately apply — a workflow, a tool, a habit.",
            },
            {
              label: "Vision",
              title: "The place where Bocconi students learn to lead with AI.",
              body: "We envision a campus where AI fluency is standard — not because it was taught in a lecture, but because students practiced it together, built with it, and proved what it can do.",
            },
            {
              label: "Who we're for",
              title: "You don't need to know AI. You need to want to learn it.",
              body: "BAIL is for Bocconi students at any level — from complete beginners to people who've already gone deep into it. The only thing we ask is that you come ready to build.",
            },
          ].map((card) => (
            <div key={card.label} style={{ backgroundColor: "#0F1828", border: "1px solid #1A2540", borderRadius: 14, padding: "2.25rem" }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A56FF" }}>{card.label}</span>
              <h2 style={{ fontWeight: 700, fontSize: "1.3rem", margin: "0.75rem 0 1rem", lineHeight: 1.3 }}>{card.title}</h2>
              <p style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: 1.7, margin: 0 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.05)" }} />

      {/* Differentiators */}
      <section style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A56FF", marginBottom: "0.75rem" }}>Differentiators</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "3rem" }}>What sets BAIL apart.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {[
              { title: "Practical-first", body: "No heavy theory. Immediate application from day one. You build before you fully understand — that's the point." },
              { title: "Tips & Tricks format", body: "Signature weekly format — Every week, one AI tip that actually works. We demo it live. You try it. You leave knowing something new." },
              { title: "Collective project", body: "Every group ships something — Each semester, every team picks a project and builds it end to end. Different problems, different outputs, one Demo Day." },
              { title: "Industry speakers", body: "Real workflows, real people — We bring in professionals who use AI daily — to show exactly how they work." },
            ].map((item) => (
              <div key={item.title} style={{ borderLeft: "2px solid #1A56FF", paddingLeft: "1.25rem", paddingTop: "0.25rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "#94A3B8", lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
