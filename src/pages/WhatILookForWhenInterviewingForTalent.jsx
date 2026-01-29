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
          What I Look for When Interviewing For Talent
        </h1>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <div className="mt-5 text-sm text-slate-500">
          Published:{" "}
          <span className="font-semibold text-slate-700">{published}</span>
          <span className="mx-2">•</span>6 min read
        </div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          Over the years, I’ve recruited many people into a wide range of roles.
          Most have been successes. A few I’ve got wrong. That’s life.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          It’s true to say the more senior the role the interview has less
          technical content and focusses more on leadership, values, cultural fit.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Here’s what I’m actually looking for when I sit across the table from a
          candidate 👇
        </p>

        {/* 1 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">1️⃣ First impressions matter</h2>
          <p className="text-slate-600 leading-relaxed">
            How do they greet you?
            <br />
            Eye contact. Confidence (not arrogance). Polite. Respectful. Positive
            energy.
            <br />
            Presence counts.
          </p>
        </section>

        {/* 2 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            2️⃣ Real conversation, not rehearsed answers
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Yes preparation is key. But do they listen actively?
            <br />
            Do they pause, think, and respond thoughtfully?
            <br />
            Great candidates build on the question, not just answer it.
          </p>
        </section>

        {/* 3 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            3️⃣ Clear articulation of their journey
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Can they succinctly talk through their career?
            <br />
            Key highlights. Real impact. Tangible successes.
            <br />
            And can they articulate who they are and what they stand for? What
            are their values and beliefs?
          </p>
        </section>

        {/* 4 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">4️⃣ Strategy and delivery</h2>
          <p className="text-slate-600 leading-relaxed">
            It’s easy to talk strategy.
            <br />
            It’s harder to roll up your sleeves and deliver.
            <br />
            I look for people who can do both and know when each is needed.
          </p>
        </section>

        {/* 5 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            5️⃣ Relationships and influence
          </h2>
          <p className="text-slate-600 leading-relaxed">
            How do they build trust?
            <br />
            How do they influence outcomes?
            <br />
            Fitting into a team matters but so does changing outcomes.
          </p>
        </section>

        {/* 6 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            6️⃣ Energy, ambition, and self-awareness
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Do they have drive?
            <br />
            Where do they want to grow?
            <br />
            Are they comfortable being uncomfortable?
            <br />
            Mindset and emotional intelligence matter more than titles.
          </p>
        </section>

        {/* 7 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            7️⃣ Preparation and understanding
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Have they researched the company?
            <br />
            Do they understand the role?
            <br />
            Can they clearly articulate the value they bring and bring it to life
            with examples?
          </p>
        </section>

        {/* 8 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">
            8️⃣ Presence throughout the conversation
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Relaxed. Engaged. Confident.
            <br />
            Do they feel like the right fit in the room?
          </p>
        </section>

        {/* 9 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">9️⃣ Genuine excitement</h2>
          <p className="text-slate-600 leading-relaxed">
            Does the role excite them?
            <br />
            Does the challenge energise them?
            <br />
            You can’t fake real motivation.
          </p>
        </section>

        {/* 10 */}
        <section className="mt-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">🔟 Quality of questions</h2>
          <p className="text-slate-600 leading-relaxed">
            Not generic.
            <br />
            Targeted. Thoughtful. Specific to the role, the company, and the
            interviewers.
            <br />
            Great questions reveal great thinking.
          </p>
        </section>

        <p className="mt-10 text-slate-600 leading-relaxed">
          For me, an interview isn’t about ticking boxes. It’s about spotting
          potential, mindset, and fit and imagining how this person shows up on
          day one and every day, not just interview day.
        </p>

        <p className="mt-6 text-slate-900 font-semibold leading-relaxed">
          What do you look for when hiring?
        </p>

        {/* SLT footer */}
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
