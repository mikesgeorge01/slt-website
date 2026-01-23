import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function WhatILookForWhenInterviewingForTalent() {
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
            {/* Back to Leadership That Inspires */}
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
          What I Look for When Interviewing For Talent
        </h1>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <div className="mt-5 text-sm text-slate-500">
          Published:{" "}
          <span className="font-semibold text-slate-700">{published}</span>
          <span className="mx-2">•</span>5 min read
        </div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          Over the years, I’ve interviewed a lot of people.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Different industries. Different roles. Different stages of their career.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          And while experience matters, I’ve learned something important:
        </p>

        <p className="mt-4 text-slate-900 font-semibold leading-relaxed">
          I’m not just hiring a CV. I’m hiring a mindset.
        </p>

        {/* Section */}
        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            1) Curiosity (Do they want to learn?)
          </h2>

          <p className="text-slate-600 leading-relaxed">
            The best people don’t pretend they know everything.
          </p>

          <p className="text-slate-600 leading-relaxed">
            They ask questions. They listen. They want to understand how things work.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Curiosity is the difference between someone who repeats tasks… and someone who
            grows into leadership.
          </p>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            2) Ownership (Do they take responsibility?)
          </h2>

          <p className="text-slate-600 leading-relaxed">
            I look for people who don’t blame, deflect, or hide.
          </p>

          <p className="text-slate-600 leading-relaxed">
            They own outcomes. They take accountability. They follow through.
          </p>

          <p className="text-slate-600 leading-relaxed">
            It’s not about being perfect. It’s about being dependable.
          </p>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            3) Humility (Are they confident enough to be coached?)
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Confidence is good.
          </p>

          <p className="text-slate-600 leading-relaxed">
            But ego kills teams.
          </p>

          <p className="text-slate-600 leading-relaxed">
            The best hires are the ones who are strong, capable, and still open to learning.
          </p>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            4) Communication (Can they make things clear?)
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Great people don’t just do the work…
          </p>

          <p className="text-slate-600 leading-relaxed">
            They can explain it.
          </p>

          <p className="text-slate-600 leading-relaxed">
            They can simplify complexity and bring stakeholders with them.
          </p>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            5) Values (Will I trust them in the tough moments?)
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Skills can be taught.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Values are harder to change.
          </p>

          <p className="text-slate-600 leading-relaxed">
            I look for people who treat others with respect, act with integrity, and show
            professionalism when it gets uncomfortable.
          </p>
        </section>

        <section className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            My final thought
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Interviews aren’t just about proving competence.
          </p>

          <p className="text-slate-600 leading-relaxed">
            They’re about showing character.
          </p>

          <p className="text-slate-600 leading-relaxed">
            I want people who will raise standards, strengthen culture, and make the team better.
          </p>
        </section>

        <div className="mt-10 text-sm text-slate-500">
          Scars, Lessons and Triumphs (SLT) ⭐️ — reflections from the procurement trenches.
        </div>
      </main>
    </div>
  );
}
