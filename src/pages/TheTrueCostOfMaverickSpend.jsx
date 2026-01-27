import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function TheTrueCostOfMaverickSpend() {
  const published = "27 Jan 2026";

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
          The True Cost of Maverick Spend and How to Reduce It
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {published} • 6 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-8 text-slate-600 leading-relaxed">
          Maverick spend is often framed as bad behaviour. People bypassing
          procurement. Off-contract buying. Ignoring process.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          But what I’ve learned over time is this:{" "}
          <span className="font-semibold text-slate-900">
            maverick spend isn’t the problem, it’s the symptom.
          </span>
        </p>

        <h2 className="mt-10 text-xl font-bold text-slate-900">
          Why Maverick Spend Really Happens
        </h2>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>Procurement is perceived as a blocker, not an enabler</li>
          <li>Processes feel slow, complex, or unclear</li>
          <li>Stakeholders don’t trust the system to deliver</li>
          <li>Teams are under real delivery pressure</li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          When speed, certainty, or simplicity are missing, people will always
          find workarounds.
        </p>

        <h2 className="mt-10 text-xl font-bold text-slate-900">
          The Hidden Cost Beyond Price
        </h2>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>Risk exposure from unvetted suppliers</li>
          <li>Contract leakage and loss of leverage</li>
          <li>Inconsistent supplier performance</li>
          <li>Quality failures and rework</li>
          <li>Erosion of trust between procurement and the business</li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Over time, credibility suffers on both sides.
        </p>

        <h2 className="mt-10 text-xl font-bold text-slate-900">
          How I Reduce Maverick Spend
        </h2>

        <p className="mt-4 text-slate-600 leading-relaxed">
          I don’t reduce it by policing behaviour. I reduce it by fixing the
          experience.
        </p>

        <ol className="mt-6 list-decimal pl-6 text-slate-600 space-y-2">
          <li>Listen to the business properly</li>
          <li>Make compliant buying the easiest option</li>
          <li>Create fast-track routes for urgent demand</li>
          <li>Align delegations to risk</li>
          <li>Automate the digital experience</li>
          <li>Invest in continuous training</li>
          <li>Build relationships</li>
          <li>Fix organisational design friction</li>
          <li>Get inventory and warehousing right</li>
        </ol>

        <p className="mt-8 text-slate-600 leading-relaxed">
          Fix the system and behaviour fixes itself.
        </p>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="font-semibold text-slate-900">
            Scars, Lessons and Triumphs (SLT) ⭐️
          </p>
          <p className="mt-2 text-slate-600">
            A series of reflections from the procurement trenches.
          </p>

          <p className="mt-4 text-slate-600">
            👉🏽 Follow me for insights from 25 years in procurement and 38 years
            across global industry.
          </p>
        </section>
      </main>
    </div>
  );
}
