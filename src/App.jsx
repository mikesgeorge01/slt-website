import React, { useMemo } from "react";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

function NavLink({ to, children }) {
  return (
    <button
      onClick={() => {
        const el = document.getElementById(to);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
      type="button"
    >
      {children}
    </button>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
      {children}
    </span>
  );
}

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            {/* Bigger logo: change h-14 to h-16 / h-20 if you want */}
            <img src="/logo.png" alt="SLT logo" className="h-24 w-auto" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-tight">SLT</div>
              <div className="text-xs text-slate-500 leading-tight">Scars • Lessons • Triumphs</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="home">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="stories">Stories</NavLink>
            <NavLink to="speaking">Speaking</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </nav>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
          >
            Follow on LinkedIn
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill>Leadership</Pill>
                <Pill>Procurement</Pill>
                <Pill>Real Stories</Pill>
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight leading-none sm:text-5xl sm:whitespace-nowrap">
  Scars. Lessons. <span className="slt-accent">Triumphs.</span>
</h1>
<div className="mt-4 h-1 w-20 rounded-full slt-accent-bg"></div>

              <p className="mt-5 text-lg text-slate-600">
                A brand-led platform sharing leadership lessons, hard-earned experience,
                and practical thinking, with honesty, intent, and purpose.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => document.getElementById("stories")?.scrollIntoView({ behavior: "smooth" })}
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  Explore stories
                </button>

                <button
                  type="button"
                  onClick={() => document.getElementById("speaking")?.scrollIntoView({ behavior: "smooth" })}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Speaking
                </button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-500">Focus</div>
                  <div className="mt-1 text-sm font-semibold">Business → Team → Individual</div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-500">Style</div>
                  <div className="mt-1 text-sm font-semibold">Supportive • Respectful • Real</div>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-4">
                  <div className="text-xs font-semibold text-slate-500">Intent</div>
                  <div className="mt-1 text-sm font-semibold">Teach • Challenge • Inspire</div>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/mike.jpg"
                  alt="Mike George"
                  className="h-[300px] w-[240px] rounded-3xl object-cover shadow-lg sm:h-[380px] sm:w-[300px]"
                />
                <div className="absolute -bottom-4 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold">Mike George</div>
                  <div className="text-xs text-slate-600">Founder • SLT — Scars, Lessons & Triumphs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">What SLT stands for</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            SLT is about sharing real experiences from the front line, lessons learned through pressure,
            mistakes, resilience, and wins. It’s leadership from my lived experience.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold">Scars</div>
              <p className="mt-2 text-sm text-slate-600">
                The moments that tested you. The hard calls. The failures you learned from.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold">Lessons</div>
              <p className="mt-2 text-sm text-slate-600">
                The insight you earned, decision-making, influence, discipline, consistency.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold">Triumphs</div>
              <p className="mt-2 text-sm text-slate-600">
                The outcomes, team success, business performance, and personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Stories & themes</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Punchy thinking, practical frameworks, and leadership stories, built for people to have maximum impact.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              { title: "Discipline & Consistency", desc: "Showing up daily. Doing the work when you don’t want to." },
              { title: "Influence without authority", desc: "How to move decisions through trust, clarity, and relationships." },
              { title: "Procurement as value", desc: "Beyond savings, risk, delivery, outcomes, and stakeholder confidence." },
              { title: "Leadership under pressure", desc: "Calm, accountability, and standards when it gets uncomfortable." },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold">{item.title}</div>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Read on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Speaking */}
      <section id="speaking" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Speaking</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Keynotes, leadership sessions, procurement transformation talks, and team workshops —
            tailored to the audience and built to drive action.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { title: "Leadership Standards", desc: "Respect, accountability, trust, and discipline, made practical." },
              { title: "High-performing Teams", desc: "What ‘great’ looks like, and how to build it deliberately." },
              { title: "Procurement Transformation", desc: "From transaction to strategic value, governance, outcomes, culture." },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold">{item.title}</div>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact (simple for now; we’ll add real form later) */}
      <section id="contact" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            For speaking, collaboration, or SLT conversations, the quickest route is LinkedIn for now.
            I’ll add a real email form next.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Message on LinkedIn
            </a>

            <a
              href="mailto:mikegeorge.uk1@gmail.com"
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 text-sm text-slate-600">
          <div>© {year} SLT — Scars, Lessons & Triumphs</div>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-slate-900">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
