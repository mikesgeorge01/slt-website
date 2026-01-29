import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function HowToLeadWithoutKnowingEverything() {
  const published = "23 Jan 2026"; // adjust if needed

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
            {/* ✅ Back to Personal Development (make sure this route exists) */}
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
          How to Lead Without Knowing Everything — Ask Better Questions, at the Right Time
        </h1>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <div className="mt-5 text-sm text-slate-500">
          Published:{" "}
          <span className="font-semibold text-slate-700">{published}</span>
          <span className="mx-2">•</span>4 min read
        </div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          One of the biggest misconceptions about leadership is that you must have every answer,
          every solution, and every situation figured out.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">You don’t.</p>

        <p className="mt-4 text-slate-600 leading-relaxed">You’re not supposed to.</p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          In fact, some of the strongest leaders I’ve worked with didn’t have all the answers…
          but they knew how to ask the right questions at the right time. And that’s where real
          leadership lives.
        </p>

        {/* Section */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Why Asking Questions Is a Leadership Strength (Not a Weakness)
          </h2>

          <p className="text-slate-600 leading-relaxed">
            When leaders ask smart, timely questions, they:
          </p>

          <ul className="list-disc pl-6 text-slate-600 space-y-1">
            <li>Empower people instead of overruling them</li>
            <li>Unlock better thinking from the team</li>
            <li>Avoid “single-brain decision making”</li>
            <li>Build psychological safety and trust</li>
            <li>Show humility, curiosity, and confidence</li>
          </ul>

          <p className="text-slate-600 leading-relaxed">
            No one wants to follow a leader who pretends. But people will follow a leader who
            listens, respects their expertise, and makes them feel valued.
          </p>
        </section>

        {/* Section */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            The Art Is Not Just Asking… It’s Asking at the Right Time
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Timing matters. Great leaders don’t interrupt flow. They don’t undermine. They don’t
            interrogate. They ask questions that move thinking forward, such as:
          </p>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-slate-900 font-semibold">🕒 At the start:</p>
            <p className="mt-2 text-slate-600">“What don’t we know yet?”</p>
            <p className="mt-1 text-slate-600">“What assumptions are we making?”</p>

            <div className="mt-6"></div>

            <p className="text-slate-900 font-semibold">🕒 During execution:</p>
            <p className="mt-2 text-slate-600">“What risks are we not seeing?”</p>
            <p className="mt-1 text-slate-600">“How confident are we, honestly?”</p>

            <div className="mt-6"></div>

            <p className="text-slate-900 font-semibold">🕒 When things go wrong:</p>
            <p className="mt-2 text-slate-600">“What did we learn?”</p>
            <p className="mt-1 text-slate-600">“How do we get better next time?”</p>
          </div>

          <p className="text-slate-600 leading-relaxed">
            These are not questions of doubt.
            <br />
            They are questions of clarity, progress, and growth.
          </p>
        </section>

        {/* Section */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Strong Leaders Aren’t The Smartest in the Room…
          </h2>

          <p className="text-slate-600 leading-relaxed">They build the smartest room.</p>
          <p className="text-slate-600 leading-relaxed">They surround themselves with brilliant people.</p>
          <p className="text-slate-600 leading-relaxed">They listen.</p>
          <p className="text-slate-600 leading-relaxed">They challenge respectfully.</p>
          <p className="text-slate-600 leading-relaxed">They make decisions with input, not ego.</p>

          <p className="text-slate-600 leading-relaxed">That is real strength.</p>

          <p className="text-slate-600 leading-relaxed">
            That’s how trust is built.
            <br />
            And that’s how teams grow because people feel{" "}
            <span className="font-semibold text-slate-900">INCLUDED</span>, not just directed.
          </p>
        </section>

        {/* Section */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            My takeaway after years of leading teams
          </h2>

          <p className="text-slate-600 leading-relaxed">Leadership isn’t about knowing everything.</p>

          <p className="text-slate-600 leading-relaxed">
            It’s about creating an environment where the right thinking happens.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Ask well. <br />
            Ask wisely. <br />
            Ask with intent.
          </p>

          <p className="text-slate-600 leading-relaxed">
            You’ll be amazed what your team will deliver.
          </p>
        </section>

        <div className="mt-10 text-sm text-slate-500">
          Scars, Lessons and Triumphs (SLT) ⭐️ — reflections from the procurement trenches.
        </div>
      </main>
    </div>
  );
}
