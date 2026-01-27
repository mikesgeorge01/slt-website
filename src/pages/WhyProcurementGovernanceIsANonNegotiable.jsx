import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function WhyProcurementGovernanceIsANonNegotiable() {
  const published = "27 Jan 2026"; // adjust if needed

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
          Why Procurement Governance Is a Non-Negotiable for All Organisations
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {published} • 5 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          In every organisation — whether it’s scaling at pace, delivering
          mega-projects, or running complex operations — procurement governance
          is a critical must-have for success.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Strong procurement governance isn’t about bureaucracy or slowing
          things down. It’s about creating transparency, control, and consistency
          so the business can move forward faster, smarter, and with far fewer
          risks.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Here’s why it matters:
        </p>

        <p className="mt-6 font-semibold text-slate-900">
          🔹 1. Protects the organisation from financial, contractual, and
          operational risk
        </p>
        <p className="mt-2 text-slate-600 leading-relaxed">
          A well-designed governance framework ensures decisions are reviewed,
          justified, and transparent. This protects the organisation from poor
          contracting, supplier failures, compliance issues, and value leakage.
        </p>

        <p className="mt-6 font-semibold text-slate-900">
          🔹 2. Drives value, not just cost savings
        </p>
        <p className="mt-2 text-slate-600 leading-relaxed">
          Good governance elevates procurement from a transactional function to
          a strategic enabler. It ensures contracts are aligned with budgets,
          market realities, and the organisation’s long-term priorities.
        </p>

        <p className="mt-6 font-semibold text-slate-900">
          🔹 3. Creates consistency in how decisions are made
        </p>
        <p className="mt-2 text-slate-600 leading-relaxed">
          Without governance, each department buys in its own way — different
          standards, different documentation, and different outcomes.
          Governance brings consistency in how suppliers are selected,
          evaluated, and managed.
        </p>

        <p className="mt-6 font-semibold text-slate-900">
          🔹 4. Enables transparency and auditability
        </p>
        <p className="mt-2 text-slate-600 leading-relaxed">
          Boards and executive teams want evidence-based decisions. Governance
          creates a clear audit trail, ensuring accountability at every step —
          from business justification to award recommendation and contract
          execution.
        </p>

        <p className="mt-6 font-semibold text-slate-900">
          🔹 5. Builds trust between Procurement, Finance, and the wider business
        </p>
        <p className="mt-2 text-slate-600 leading-relaxed">
          When stakeholders know the process is fair, structured, and aligned
          with organisational objectives, collaboration improves. Governance
          removes subjectivity and replaces it with data, clarity, and
          confidence.
        </p>

        <p className="mt-8 text-slate-600 leading-relaxed font-semibold">
          To summarise, procurement governance is not a barrier — it’s an
          enabler.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          It provides the discipline organisations need to deliver value,
          protect themselves, make confident decisions, and operate with
          integrity.
        </p>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-900 font-semibold">
            Scars, Lessons and Triumphs (SLT) ⭐️
          </p>
          <p className="mt-2 text-slate-600">
            A series of reflections from the procurement trenches.
          </p>

          <p className="mt-4 text-slate-600">
            👉🏽 Follow me for insights drawn from 25 years in procurement and over
            38 years across global industry
          </p>

          <p className="mt-4 text-slate-900 font-semibold">
            Let’s continue the conversation.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Procurement",
              "SupplyChain",
              "StrategicSourcing",
              "ValueCreation",
              "BusinessPartnering",
              "Sustainability",
              "Innovation",
              "Leadership",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-semibold text-amber-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
