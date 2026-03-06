import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function WhyOneToOnesMatter() {
  const published = "06 Mar 2026";

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
          Why 1-1s Are the Most Important Meeting in My Calendar
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {published} • 5 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-8 text-slate-600 leading-relaxed">
          The most important meeting in my calendar every month isn’t a steering
          committee, a board meeting, or a project update.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          It’s my 1-1s with my team.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          With nearly three decades in leadership roles, I’ve always believed
          that regular one-to-one conversations are non-negotiable.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Not as a status update.
          <br />
          Not as a performance review.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          But as a genuine conversation about how the person is doing.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Yes, we talk about work.
          <br />
          Progress, priorities, obstacles, and decisions.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          But the real value of a 1-1 goes much deeper.
        </p>

        <p className="mt-6 font-semibold text-slate-900">It’s about understanding:</p>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>How they are really doing</li>
          <li>What’s going well and what isn’t</li>
          <li>Where they need support</li>
          <li>What challenges they’re facing</li>
          <li>What frustrations they’re carrying</li>
          <li>What ambitions and aspirations they have</li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Leadership isn’t just about managing work. For me, it’s about
          understanding people.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          When people feel heard, supported, and trusted, something incredible
          happens:
        </p>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>✔ Confidence grows</li>
          <li>✔ Trust strengthens</li>
          <li>✔ Problems surface earlier</li>
          <li>✔ Ideas flow more freely</li>
          <li>✔ Performance improves</li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          And most importantly, people know they matter.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          I’ve always believed that great leadership starts with a simple
          principle:
        </p>

        <p className="mt-4 font-semibold text-slate-900 leading-relaxed">
          People first.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          When you invest time in understanding your team as individuals, the
          results happen by design.
        </p>

        <p className="mt-6 text-slate-900 font-semibold leading-relaxed">
          So if you lead a team, ask yourself one simple question:
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          When was the last time you had a proper conversation with each person
          in your team, not about work, but about them?
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Those conversations often become the most valuable leadership moments
          you’ll ever have.
        </p>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="font-semibold text-slate-900">
            Scars, Lessons &amp; Triumphs (SLT) ⭐️
          </p>
          <p className="mt-2 text-slate-600">
            A series of reflections from the procurement trenches.
          </p>

          <p className="mt-4 text-slate-600">
            👉🏽 Follow me for insights from 25 years in procurement and 38 years
            across global industry.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Procurement",
              "SupplyChain",
              "StrategicSourcing",
              "ValueCreation",
              "BusinessPartnering",
              "Leadership",
              "Innovation",
              "Sustainability",
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