import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function StrategicSourcingPitfalls() {
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
            {/* Back to Procurement As Value */}
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
            The Pitfalls to Look Out For in Strategic Sourcing
          </h1>
          <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-slate-800">
          <p>
            After almost four decades working across major industries, I’ve learnt
            that strategic sourcing can transform a business, but only if you
            avoid some own goals along the way.
          </p>

          <p className="font-semibold">
            Here are some of the biggest pitfalls I’ve seen over nearly four
            decades in industry 👇
          </p>

          <div className="space-y-4">
            {[
              {
                title: "1️⃣ Focusing on cost, not value.",
                text: "Unit price focus stops organisations from considering lifecycle cost, risk and outcomes.",
              },
              {
                title: "2️⃣ Poor scope.",
                text: "If the business doesn’t know what it wants, no sourcing strategy can deliver the right result.",
              },
              {
                title: "3️⃣ Treating all suppliers the same.",
                text: "Strategic suppliers need different strategies, governance, and relationship management.",
              },
              {
                title: "4️⃣ Underestimating risk.",
                text: "Geopolitics, capacity limits, single-source dependence, IP exposure, insolvency… risk must be at the forefront of any strategy.",
              },
              {
                title: "5️⃣ Weak stakeholder alignment.",
                text: "Procurement can get a great commercial outcome but fails to deliver if the business isn’t onboard.",
              },
              {
                title: "6️⃣ Poor data.",
                text: "Bad spend data = bad decisions. It’s the major killer of any sourcing strategy.",
              },
              {
                title: "7️⃣ Short-term thinking.",
                text: "Chasing annual savings over long-term value destroys competitive advantage.",
              },
              {
                title: "8️⃣ Mismanaging supplier relationships.",
                text: "Both extremes, too adversarial or too cosy, lead to failure. You need the right balance.",
              },
              {
                title: "9️⃣ Poor make vs buy understanding.",
                text: "Strategic sourcing must align to business model design, not just chasing savings.",
              },
              {
                title: "🔟 Ignoring sustainability and ESG.",
                text: "This is now a commercial and reputational risk, not just a compliance tick-box.",
              },
              {
                title: "1️⃣1️⃣ Over-complication.",
                text: "Bureaucracy slows delivery, frustrates the business and kills credibility.",
              },
              {
                title: "1️⃣2️⃣ Weak post-award governance.",
                text: "The contract signature isn’t the end, value can be lost afterwards.",
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
            <div className="text-xl font-bold">Summary</div>
            <p className="mt-3">
              Strategic sourcing fails when organisations see it as a procurement
              exercise only and not a business decision making tool.
            </p>

            <p className="mt-4 font-semibold">When done well it delivers:</p>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>value</li>
              <li>resilience</li>
              <li>innovation</li>
              <li>speed</li>
              <li>risk reduction</li>
              <li>competitive advantage</li>
            </ul>
          </div>

          <p className="font-semibold">👉🏽 What are the pitfalls you’ve encountered?</p>

          <hr className="my-8" />

          <p className="font-semibold">Scars, Lessons and Triumphs (SLT) ⭐️</p>
          <p>A series of reflections from the procurement trenches.</p>

          <p className="font-semibold">
            👉🏽 Follow me for insights drawn from 25 years in procurement and over
            38 years across global industry
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
