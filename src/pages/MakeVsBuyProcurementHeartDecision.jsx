import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function MakeVsBuyProcurementHeartDecision() {
  const navigate = useNavigate();

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
            Make vs Buy: Why Procurement Sits at the Heart of any Decision
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-slate-800">
          <p className="font-semibold">
            “Should we build it ourselves… or buy it from the market?”
          </p>

          <p>
            This question comes up in every organisation, from startups to
            giga-projects and too often it’s treated as a purely engineering or
            finance decision. It isn’t.
          </p>

          <p className="font-semibold">
            A robust make vs buy strategy lives and dies on the insight
            Procurement provides.
          </p>

          <p>
            I’ve had the privilege of working with teams who have carried out
            some outstanding, evidence based analysis to support these
            decisions, from robust cost modelling through to forensic market
            analysis. And when it’s done well, the quality of the decision
            improves exponentially.
          </p>

          <p className="font-semibold">
            I’ve been involved in many decisions and passionately believe
            Procurement sits at the heart of any decision.
          </p>

          <p className="font-semibold">Here’s where Procurement adds real value:</p>

          <div className="space-y-4">
            {[
              {
                title: "🔹 End-to-end cost analysis (not just price)",
                text: "From capex vs opex, labour, overhead recovery, tooling, learning curves, lifecycle cost, maintenance, spares, obsolescence and exit costs, Procurement brings a true Total Cost of Ownership view.",
              },
              {
                title: "🔹 Supply-market intelligence",
                text: "Understanding market maturity, supplier capability, capacity, geographic exposure, scalability, and competitive tension. This insight can change the answer.",
              },
              {
                title: "🔹 Risk, resilience & assurance",
                text: "Buying may look attractive, until supply disruption, IP leakage, quality risk, regulatory burden, or geopolitical exposure are factored in. Procurement balances commercial and operational risk with reality.",
              },
              {
                title: "🔹 Speed vs control trade-offs",
                text: "Making gives control. Buying gives speed. Procurement helps design hybrid models, phased strategies, and intelligent compromises aligned to delivery risk.",
              },
              {
                title: "🔹 Strategic importance & core competence",
                text: "If it’s core to your differentiation or long-term capability, making may be the right call. If it isn’t, outsourcing can free up capital and leadership bandwidth.",
              },
              {
                title: "🔹 Future optionality",
                text: "The strongest strategies preserve choice: dual sourcing, modular designs, supplier development, or clear pathways from buy → make (or vice versa). Procurement provides future pricing.",
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
            <p className="text-xl font-semibold">And here’s my summary:</p>

            <div className="mt-4 space-y-2 text-slate-700">
              {[
                "✔ Are evidence led",
                "✔ Stand up to scrutiny",
                "✔ Reduce long-term risk",
                "✔ Align to enterprise strategy",
              ].map((b) => (
                <div key={b} className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <p className="mt-5">
              When Procurement is involved late… the organisation inherits cost
              surprises, supplier lock-in, and decisions that are hard or
              impossible to reverse.
            </p>
          </div>

          <p className="font-semibold">
            Make vs buy isn’t just about cost. It’s a strategic decision to run
            your business.
          </p>

          <p>
            And Procurement plays an important role.
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
