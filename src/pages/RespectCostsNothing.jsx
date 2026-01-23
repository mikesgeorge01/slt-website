import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function RespectCostsNothing() {
  const published = "23 Jan 2026"; // change anytime

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="SLT logo" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-tight">SLT</div>
              <div className="text-xs text-slate-500 leading-tight">
                Scars • Lessons • Triumphs
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              to="/stories/leadership-that-inspires"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              ← Back
            </Link>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Article */}
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Respect. It costs nothing… <br />
          but it means everything.
        </h1>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <div className="mt-5 text-sm text-slate-500">
          Published:{" "}
          <span className="font-semibold text-slate-700">{published}</span>
          <span className="mx-2">•</span>4 min read
        </div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          In the workplace, almost everything we do happens through relationships.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Some of those relationships are strong, trusted and natural. Others are
          new, challenging, strained or tested. That’s real life. That’s reality.
        </p>

        <p className="mt-6 text-slate-900 font-semibold">
          But regardless of how strong or fragile a relationship may be, one
          principle should never change:
        </p>

        <p className="mt-4 text-slate-900 font-semibold">
          👉 Always treat people with respect.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          I’ve always believed you should treat people in the way you would want
          to be treated yourself. It’s not complicated. It’s not about hierarchy,
          title, ego, or power.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          It’s about basic human decency, values, and understanding that behind
          every role is a person — with pressures, families, ambitions and
          challenges of their own.
        </p>

        <h2 className="mt-10 text-xl font-bold">As leaders, we set the tone</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Our behaviour gives everyone else permission for how they behave. If we
          are dismissive, aggressive, disrespectful or belittling, that culture
          spreads.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Equally, when we lead with respect, empathy, fairness and professionalism,
          it creates trust, confidence and psychological safety.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          People do better work when they feel valued. Teams thrive when they feel
          heard. Organisations perform better when respect is non-negotiable.
        </p>

        <h2 className="mt-10 text-xl font-bold">
          Why respect matters (my view)
        </h2>
        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>It doesn’t cost anything</li>
          <li>It builds credibility and trust</li>
          <li>It strengthens relationships, even in disagreement</li>
          <li>It shows character and integrity</li>
          <li>It reflects who you truly are, not just the role you hold</li>
        </ul>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700 font-semibold">
            You can challenge people respectfully.
            <br />
            You can disagree respectfully.
            <br />
            You can hold people to account respectfully.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed font-semibold">
            Respect isn’t weakness. It’s strength. It’s controlled, thoughtful leadership.
          </p>
        </section>

        <p className="mt-10 text-slate-600 leading-relaxed">
          No matter how busy, pressured, or emotionally charged situations become,
          I firmly believe respect should anchor how we behave.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Because at the end of the day, people remember how you made them feel.
          And I want people I work with — colleagues, stakeholders, suppliers, and teams —
          to feel valued, heard and respected.
        </p>

        <p className="mt-6 text-slate-900 font-semibold">
          That’s something I stand for. And always will.
        </p>

        <div className="mt-10 text-sm text-slate-500">
          Scars, Lessons and Triumphs (SLT) ⭐️ — reflections from the procurement trenches.
        </div>
      </main>
    </div>
  );
}
