import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function TheArtOfInfluencing() {
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
          The Art of Influencing
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {published} • 4 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          The Art of Influencing — Let’s be clear, it’s not about power. It’s about people.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Influencing is one of the most powerful leadership skills you can develop and it has
          nothing to do with authority, titles, or hierarchy.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          It’s about relationships, connections, shaping thinking, creating action, and earning
          trust so that people want to move with you, not because they have to.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Over the years, here’s what I’ve learned about true influence 👇
        </p>

        <section className="mt-10 space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-slate-900 font-semibold">
              ✨ Influence starts with credibility
            </p>
            <p className="mt-2 text-slate-600 leading-relaxed">
              People don’t follow noise. They follow competence, consistency, and someone who
              delivers when it matters. When you are credible, people listen and notice.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-slate-900 font-semibold">
              ✨ It’s built on relationships, not transactions
            </p>
            <p className="mt-2 text-slate-600 leading-relaxed">
              You don’t influence someone the day you need them. You influence them through
              months and even years of personal connections, integrity, fairness, and being
              dependable.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-slate-900 font-semibold">
              ✨ Listening is your biggest advantage
            </p>
            <p className="mt-2 text-slate-600 leading-relaxed">
              The most influential leaders listen more than they talk. They understand
              motivations, concerns, and fears and work with people, not against them.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-slate-900 font-semibold">
              ✨ Clarity wins every time
            </p>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Influence is about painting a clear picture — why this matters, how it helps, and
              what success looks like for everyone involved.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-slate-900 font-semibold">
              ✨ Emotion drives action
            </p>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Logic informs. Emotion creates momentum. When people feel seen, valued, and
              understood, they lean in.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-slate-900 font-semibold">
              ✨ Influence is earned daily
            </p>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Through behaviour. Through integrity. Through showing up when it counts.
            </p>
          </div>
        </section>

        <p className="mt-10 text-slate-600 leading-relaxed">
          In today’s fast paced world, the leaders who truly succeed aren’t the loudest or the
          most senior — they are the ones who can influence with credibility, respect,
          authenticity, and trust.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          You can’t shortcut.
        </p>

        <p className="mt-8 text-slate-900 font-semibold leading-relaxed">
          💬 What’s the best lesson you’ve learned about influencing others?
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
