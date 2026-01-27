import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function TheArtOfBuildingRelationships() {
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
              to="/stories/personal-development"
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
          The Art of Building Relationships
        </h1>

        <p className="mt-2 text-sm text-slate-500">{published} • 4 min read</p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          After nearly four decades in industry, one lesson stands above all others:
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          👉 Results follow relationships.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          The best leaders I’ve worked with don’t lead with authority, they lead by
          building relationships.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Over the years, I’ve seen firsthand that relationships and success are
          inextricably linked.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Here’s what I’ve learned about building strong relationships, it’s about:
        </p>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>Listening more than speaking</li>
          <li>Doing what you say you’ll do</li>
          <li>Having the difficult conversations early and respectfully</li>
          <li>Giving credit freely and taking accountability personally</li>
          <li>Being curious, not judgemental</li>
          <li>Respecting different perspectives</li>
          <li>Being clear, honest, and kind</li>
          <li>
            Standing by people when decisions are hard, not just when they’re popular
          </li>
          <li>Following through long after the meeting ends</li>
          <li>
            Treating relationships as long-term, not just when you need something today
          </li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          In high-pressure environments, contracts, KPIs, and governance matter, but when
          things get really tough, it’s relationships that get you through.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          People always remember how you made them feel and whether they could rely on you.
        </p>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-900 font-semibold">
            Scars, Lessons and Triumphs (SLT) ⭐️
          </p>
          <p className="mt-2 text-slate-600">
            A series of reflections from the procurement trenches.
          </p>

          <p className="mt-4 text-slate-600">
            👉🏽Follow me for insights drawn from 25 years in procurement and over 38
            years across global industry
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
