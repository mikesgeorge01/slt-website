import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function StrategicVsOperationalProcurement() {
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
              to="/stories/procurement-as-value"
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
          Strategic vs Operational Procurement <br />
          (why both matter)
        </h1>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

<img
  src="/strategic-vs-operational.jpg"
  alt="Strategic vs Operational Procurement"
  className="mt-8 mx-auto w-full max-w-xl rounded-3xl border border-slate-200 shadow-sm"
/>


        <div className="mt-5 text-sm text-slate-500">
          Published:{" "}
          <span className="font-semibold text-slate-700">{published}</span>
          <span className="mx-2">•</span>4 min read
        </div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          There’s a debate I see often on LinkedIn and in business:
        </p>

        <p className="mt-4 text-slate-900 font-semibold leading-relaxed">
          “Are you strategic?” <br />
          Or… <br />
          “Are you operational?”
        </p>

        <p className="mt-6 text-slate-900 font-semibold leading-relaxed">
          Here’s my simple take on it:
        </p>

        <p className="mt-4 text-slate-900 font-semibold leading-relaxed">
          The best procurement people are both.
        </p>

        {/* Sections */}
        <section className="mt-10 space-y-10">
          <div>
            <h2 className="text-xl font-bold">Operational procurement is the engine</h2>
            <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
              <li>POs</li>
              <li>expediting</li>
              <li>delivery issues</li>
              <li>day-to-day stakeholder support</li>
              <li>firefighting</li>
            </ul>
            <p className="mt-4 text-slate-600 leading-relaxed">
              It keeps the business moving.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">Strategic procurement is the direction</h2>
            <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
              <li>category strategies</li>
              <li>supplier segmentation</li>
              <li>long-term value creation</li>
              <li>risk reduction</li>
              <li>contract frameworks</li>
            </ul>
            <p className="mt-4 text-slate-600 leading-relaxed">
              It keeps the business improving.
            </p>
          </div>
        </section>

        <p className="mt-10 text-slate-600 leading-relaxed">
          The problem is…
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Some people only want the “strategy” title — but they avoid delivery.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          And some teams get trapped in operational noise and never lift their heads up.
          High performance is balancing both.
        </p>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-900 font-semibold">
            Strategy without delivery is just theory.
          </p>
          <p className="mt-2 text-slate-900 font-semibold">
            Delivery without strategy is just chaos.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Real procurement leaders are able to switch gears.
          </p>
        </section>

        <div className="mt-10 text-sm text-slate-500">
          Scars, Lessons and Triumphs (SLT) ⭐️ — reflections from the procurement trenches.
        </div>
      </main>
    </div>
  );
}
