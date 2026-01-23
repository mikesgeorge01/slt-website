import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function DisciplineAboveEverythingElse() {
  const published = "23 Jan 2026"; // adjust if needed

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
          Discipline — Above Everything Else
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {published} • 4 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          Looking back over my posts from 2025, one word keeps standing out more
          than anything else:
        </p>

        <p className="mt-4 text-slate-900 font-semibold leading-relaxed">
          Discipline.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          For me, discipline is at the heart of leadership and performance. It’s
          about showing up on tough days. It’s about doing what needs to be done
          when you’re tired, busy, or simply not in the mood.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          It’s choosing progress over comfort, again and again. It’s about
          moving forward.
        </p>

        <p className="mt-8 text-slate-600 leading-relaxed">
          For me discipline means:
        </p>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>Doing what needs to be done, especially when you don’t want to</li>
          <li>Staying focused when distraction exists all around you</li>
          <li>Holding yourself accountable when nobody else is watching</li>
          <li>Staying committed even when your motivation has gone</li>
          <li>Leaning into the boring, difficult, unglamorous work</li>
        </ul>

        <p className="mt-8 text-slate-600 leading-relaxed">It isn’t sexy.</p>
        <p className="mt-2 text-slate-600 leading-relaxed">It’s not exciting.</p>
        <p className="mt-2 text-slate-600 leading-relaxed">
          And it rarely gets recognition.
        </p>

        <p className="mt-8 text-slate-600 leading-relaxed">
          But discipline builds momentum.
          <br />
          Discipline creates trust.
          <br />
          Discipline delivers results.
        </p>

        <p className="mt-8 text-slate-600 leading-relaxed">
          In leadership, careers, health, and relationships, talent may open
          doors, but discipline is what keeps you walking through them.
        </p>

        <p className="mt-8 text-slate-600 leading-relaxed">
          You don’t always need to be extraordinary.
          <br />
          You need to be disciplined, consistent, and present.
        </p>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-900 font-semibold">
            Scars, Lessons and Triumphs (SLT) ⭐️
          </p>
          <p className="mt-2 text-slate-600">
            A series of reflections from the procurement trenches.
          </p>

          <p className="mt-4 text-slate-600">
            👉🏽Follow me for insights drawn from 25 years in procurement and over
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
