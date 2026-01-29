import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function SupplierReductionConsolidation() {
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
            Supplier Reduction &amp; Consolidation
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-slate-800">
          <p>
            Supplier reduction is often misunderstood as a cost-cutting
            exercise. But done properly, it can be a strategic enabler,
            providing resilience, performance, and value.
          </p>

          <p>
            Over the years, the most effective consolidation programmes I’ve led
            all started with strategy and data.
          </p>

          <p className="font-semibold">So what works in practice:</p>

          <div className="space-y-4">
            {[
              {
                title: "🔹 Clean the data",
                text: "If your supplier master is wrong, every decision that follows will be too.",
              },
              {
                title: "🔹 Remove duplication",
                text: "Multiple suppliers providing the same goods or services dilute leverage and create complexity.",
              },
              {
                title: "🔹 Remove suppliers not used",
                text: "Dormant suppliers add risk with zero value. If they’re not trading, they shouldn’t exist.",
              },
              {
                title: "🔹 Move spend into existing frameworks",
                text: "Use the agreements you’ve already negotiated. Leakage destroys value.",
              },
              {
                title: "🔹 Category-led rationalisation",
                text: "Consolidate by design, not by spreadsheet. Categories define the right supply model.",
              },
              {
                title: "🔹 Implement trading houses",
                text: "Aggregate low-value, high-volume demand to simplify the tail and reduce transactional noise.",
              },
              {
                title: "🔹 Standardise specifications",
                text: "You can’t consolidate if everyone buys something “slightly different”.",
              },
              {
                title: "🔹 Reduce the long tail",
                text: "80% of suppliers often represent 5% of spend and 80% of the effort.",
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
            <div className="text-xl font-bold">
              The real benefits go far beyond cost:
            </div>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Lower risk</li>
              <li>Better performance</li>
              <li>Faster execution</li>
              <li>Clear accountability</li>
              <li>Stronger supplier partnerships</li>
            </ul>
          </div>

          <p className="font-semibold">What lessons have you learned?</p>

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
