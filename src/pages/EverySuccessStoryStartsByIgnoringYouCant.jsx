import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function EverySuccessStoryStartsByIgnoringYouCant() {
  const published = "27 Jan 2026"; // adjust if needed

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
          Every Success Story Starts by Ignoring “You Can’t”
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {published} • 4 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          From childhood to adulthood, these two words have the power to shape, or
          limit, our entire belief system.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Whether it comes from upbringing, friends, family, workplace culture, or
          even leaders who should know better… “you can’t” is a phrase that has no
          place in my world.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          The truth is, every meaningful achievement I’ve seen, in myself and in
          others, has come from doing the opposite: taking personal risks,
          stepping outside comfort zones, and choosing growth over fear.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Whether it’s:
        </p>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>Taking on a role you’ve never done before</li>
          <li>Moving to a new country</li>
          <li>Setting a bold fitness goal</li>
          <li>Or challenging yourself to become a better version of you</li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          The reality remains: focused, disciplined people who step outside their
          comfort zone can accomplish anything.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Growth doesn’t happen where it’s safe and familiar. It happens in the
          uncomfortable moments, the uncertain decisions, and the leaps of faith
          that challenge who you think you are.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          The right environment and leadership can accelerate this. But even
          without them, your mindset, your belief in what is possible — remains
          your greatest strength.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          So the next time someone says “you can’t”, take it as confirmation that
          you’re stepping into territory that matters.
        </p>

        <p className="mt-6 text-slate-900 font-semibold leading-relaxed">
          Because the truth is:
          <br />
          You can. You always could. And with courage, discipline, and a
          willingness to take risks, you always will.
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
