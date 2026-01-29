import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function NecDesignedForCollaboration() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo1.png" alt="SLT logo" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-tight">SLT</div>
              <div className="text-xs text-slate-500 leading-tight">
                Scars • Lessons • Triumphs
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            {/* Back to previous screen */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              ← Back
            </button>

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
      <main className="mx-auto max-w-4xl px-4 py-14">
        <div className="mb-6">
          <div className="text-xs font-semibold tracking-wide text-amber-600">
            PROCUREMENT AS VALUE
          </div>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
            NEC Contracting: Designed for Collaboration
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-slate-800">
          <p>
            After nearly four decades working across major programmes and complex
            supply chains, one thing is clear:
          </p>

          <p className="text-xl font-semibold">
            👉 The contract doesn’t deliver the project. People, behaviours, and governance do.
          </p>

          <p>
            That’s where NEC contracting stands apart. NEC isn’t just a form of
            contract, it’s a management approach built around:
          </p>

          <div className="space-y-4">
            {[
              {
                title: "🔹 Clarity & simplicity",
                text: "Plain English, clear obligations, fewer surprises",
              },
              {
                title: "🔹 Collaboration",
                text: "Mutual trust and cooperation written into the contract",
              },
              {
                title: "🔹 Early warning",
                text: "Identify risks early, solve problems before they escalate",
              },
              {
                title: "🔹 Transparency",
                text: "Open reporting, clear cost and programme visibility",
              },
              {
                title: "🔹 Active management",
                text: "The contract supports daily decision making, not claims at the end.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="font-bold">{item.title}</div>
                <div className="mt-2 text-slate-700">{item.text}</div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xl font-semibold">
              Used properly, NEC encourages the right conversations at the right
              time.
            </p>
          </div>

          <p className="font-semibold">
            NEC offers flexibility depending on risk appetite, maturity, and
            certainty:
          </p>

          <div className="space-y-4">
            {[
              {
                title: "🔹 Option A – Priced Contract with Activity Schedule",
                text: "Best where scope is well defined and cost certainty is high.",
              },
              {
                title: "🔹 Option B – Priced Contract with Bill of Quantities",
                text: "Traditional measurement approach with NEC behaviours.",
              },
              {
                title: "🔹 Option C – Target Cost Contract",
                text: "Shared pain/gain. Strong incentive for collaboration and cost control.",
              },
              {
                title: "🔹 Option D – Target Contract with Bill of Quantities",
                text: "Target cost with more defined measurement.",
              },
              {
                title: "🔹 Option E – Cost Reimbursable",
                text: "Maximum flexibility, higher employer risk, requires strong governance.",
              },
              {
                title: "🔹 Option F – Management Contract",
                text: "Useful for complex, fast-moving programmes with multiple work packages.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="font-bold">{item.title}</div>
                <div className="mt-2 text-slate-700">{item.text}</div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xl font-semibold">
              NEC only really works if behaviours match the intent.
            </p>
            <p className="mt-3">
              My lesson — if you lean into collaboration, transparency, and
              accountability, NEC becomes a powerful enabler of delivery.
            </p>
          </div>

          <p className="font-semibold">
            What’s your experience with NEC, enabler or frustration?
          </p>

          <hr className="my-8" />

          <p className="font-semibold">Scars, Lessons and Triumphs (SLT) ⭐️</p>
          <p>A series of reflections from the procurement trenches.</p>

          <p className="font-semibold">
            👉🏽 Follow me for insights drawn from 25 years in procurement and
            over 38 years across global industry
          </p>

          <p className="font-semibold">Let’s continue the conversation.</p>

          <p className="text-slate-500">
            #Procurement #SupplyChain #StrategicSourcing #ValueCreation
            #BusinessPartnering #Sustainability #Innovation #Leadership
          </p>
        </div>
      </main>
    </div>
  );
}
