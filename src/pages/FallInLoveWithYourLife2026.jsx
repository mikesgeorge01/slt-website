import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function FallInLoveWithYourLife2026() {
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
              to="/stories/news"
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
          Fall in Love With Your Life in 2026
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {published} • 4 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          I read this on Growth Vibes and loved it. Simple but powerful.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          And the message is straightforward: small habits make a powerful
          difference.
        </p>

        <ol className="mt-8 list-decimal pl-6 text-slate-600 space-y-2">
          <li>Wake up early</li>
          <li>Make your bed</li>
          <li>Enjoy the morning sun</li>
          <li>Set clear intentions for the day</li>
          <li>Speak kindly to yourself</li>
          <li>Slow down and enjoy your coffee</li>
          <li>Take a walk without your phone</li>
          <li>Stay connected with friends and family</li>
          <li>Learn something new</li>
          <li>Fuel your body with good food</li>
          <li>Practice gratitude daily</li>
          <li>Surround yourself with uplifting people</li>
          <li>Move your body, even on low-energy days</li>
          <li>Get enough sleep</li>
          <li>Drink more water</li>
          <li>Let go of what you can’t control</li>
          <li>Protect your peace rather than people-pleasing</li>
          <li>Spend time in silence or reflection</li>
          <li>Celebrate small wins</li>
          <li>End each day proud that you showed up</li>
        </ol>

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
