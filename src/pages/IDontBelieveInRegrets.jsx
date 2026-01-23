import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function IDontBelieveInRegrets() {
  const published = "22 Jan 2026"; // adjust if needed

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
          I Don’t Believe in Regrets
        </h1>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <div className="mt-5 text-sm text-slate-500">
          Published:{" "}
          <span className="font-semibold text-slate-700">{published}</span>
          <span className="mx-2">•</span>4 min read
        </div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          I don’t believe in regrets.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          When we look back, it’s easy to think about what we could have done
          differently. Different choices. Different timing. Different paths.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          But here’s my take on it.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Every decision we made was based on what we knew at that moment in time.
        </p>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>The information we had</li>
          <li>The experiences we held</li>
          <li>The emotions within us</li>
          <li>What was happening in our lives</li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          And all of that matters.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Every experience we’ve encountered, the wins, the losses, the setbacks,
          the challenges, the tough days, and the proud moments, has shaped who
          we are today.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Every opportunity we embraced. Every risk we took. Every time we said
          “yes” or “no”.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          All of it contributed to the person standing here right now.
        </p>

        {/* Section */}
        <section className="mt-10 space-y-6">
          <p className="text-slate-600 leading-relaxed">
            We all grow by having a go.
          </p>

          <p className="text-slate-600 leading-relaxed">
            We develop when we learn something new.
          </p>

          <p className="text-slate-600 leading-relaxed">
            We build resilience when we’re challenged.
          </p>

          <p className="text-slate-600 leading-relaxed">
            And we gain wisdom when things don’t turn out as planned.
          </p>
        </section>

        <section className="mt-10 space-y-4">
          <p className="text-slate-900 font-semibold">
            So instead of regrets, I choose perspective.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Instead of “I wish I hadn’t”, I choose “I learned from that”.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Instead of “I failed”, I choose “I grew”.
          </p>
        </section>

        <p className="mt-8 text-slate-600 leading-relaxed">
          As long as we are moving forward, evolving, improving, and becoming
          better than the version of ourselves we were yesterday, every
          experience has purpose.
        </p>

        {/* Close */}
        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-900 font-semibold">No regrets.</p>
          <p className="mt-2 text-slate-600">Just lessons.</p>
          <p className="mt-2 text-slate-600">Just opportunities.</p>
          <p className="mt-2 text-slate-600">Just forward momentum.</p>
        </section>

        <p className="mt-8 text-slate-600 leading-relaxed">
          That’s how I choose to live my journey.
        </p>

        <div className="mt-10 text-sm text-slate-500">
          Scars, Lessons and Triumphs (SLT) ⭐️ — reflections from the procurement trenches.
        </div>
      </main>
    </div>
  );
}
