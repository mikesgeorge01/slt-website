import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function MyProcurementRoadmap() {
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
              to="/"
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
          My Procurement Roadmap – Lessons from the Trenches
        </h1>

        <p className="mt-2 text-sm text-slate-500">{published} • 6 min read</p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-8 text-slate-600 leading-relaxed">
          After 25 years in Procurement and Supply Chain, spanning multiple industries and
          geographies, I’ve been fortunate to work with outstanding people and seize
          opportunities that shaped both my career and leadership approach.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Along the way, I’ve gathered lessons, some strategic, some practical, that
          continue to guide me today. Here's what I've learned by being in the trenches:
        </p>

        <p className="mt-6 font-semibold text-slate-900">Strategic lessons:</p>
        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>1️⃣ Relationships are as important as contracts.</li>
          <li>2️⃣ Procurement is a strategic enabler, not just a transactional function.</li>
          <li>3️⃣ Change is constant, adaptability is resilience.</li>
          <li>4️⃣ Data drives decisions, but people deliver outcomes.</li>
          <li>5️⃣ Integrity is non-negotiable.</li>
        </ul>

        <p className="mt-6 font-semibold text-slate-900">Practical lessons:</p>
        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>1️⃣ Keep it clear, avoid jargon with stakeholders.</li>
          <li>2️⃣ 15% of requirements are unique, 85% are routine.</li>
          <li>3️⃣ Spend data is your foundation.</li>
          <li>4️⃣ Compliance safeguards both you and the business.</li>
          <li>5️⃣ Own it end-to-end, accountability matters.</li>
          <li>6️⃣ Sit with your stakeholders, decisions move faster.</li>
          <li>7️⃣ See what you’re buying, context matters.</li>
          <li>8️⃣ Reporting lines are secondary, flex your style.</li>
          <li>9️⃣ Beware of “PowerPoint consultants.”</li>
          <li>🔟 Procurement isn’t hard, people make it hard.</li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          At its core, procurement is about creating clarity, simplifying complexity, and
          driving tangible outcomes. Simplicity and accountability always win.
        </p>

        <p className="mt-6 text-slate-900 font-semibold leading-relaxed">
          👉 I’d love to hear from you, what are the biggest lessons you’ve learned in your
          procurement career?
        </p>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-900 font-semibold">
            Scars, Lessons and Triumphs (SLT) ⭐️
          </p>
          <p className="mt-2 text-slate-600">
            A series of reflections from the procurement trenches.
          </p>

          <p className="mt-4 text-slate-600">
            👉🏽Follow me for insights drawn from 25 years in procurement and over 38 years
            across global industry
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
