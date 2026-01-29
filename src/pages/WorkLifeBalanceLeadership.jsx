import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function WorkLifeBalanceLeadership() {
  const navigate = useNavigate();

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
            {/* Back to previous screen */}
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              ← Back
            </button>

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
      <main className="mx-auto max-w-4xl px-4 py-14">
        <div className="mb-6">
          <div className="text-xs font-semibold tracking-wide text-amber-600">
            ORGANISATIONAL PERFORMANCE
          </div>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
            Work Life Balance: A Leadership Responsibility, Not a Luxury
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-slate-800">
          <p>
            As leaders, we often believe that striking the right work life
            balance is something everyone else should have, while we power
            through. Long hours, late calls, back-to-back travel, constant
            demands, it becomes easy to tell ourselves this is just what
            leadership looks like.
          </p>

          <p className="font-semibold">
            But the truth is, effective leadership requires balance.
          </p>

          <p className="font-semibold">
            Here are a few principles I’ve learned over the years:
          </p>

          <div className="space-y-4">
            {[
              {
                title: "1️⃣ Your team will mirror your behaviour.",
                text: "If leaders work relentlessly, email at midnight, and accept burnout, don’t be surprised when the rest of the organisation follows. Balance starts at the top.",
              },
              {
                title: "2️⃣ Protect thinking time.",
                text: "Leadership isn’t representative for the hours online; it’s about clarity, decisions, and output, none of which will happen if you’re exhausted.",
              },
              {
                title: "3️⃣ Prioritise outputs, not presence.",
                text: "Reward results and value creation, not the time you’re in the office. This builds trust, maturity, and motivation across teams.",
              },
              {
                title: "4️⃣ Set boundaries without apology.",
                text: "Turn the phone off in the evening and at weekends if possible. Block family time. Prioritise rest. High performance requires fuel.",
              },
              {
                title: "5️⃣ Remember you’re not just a title or number.",
                text: "Health, relationships, sleep, fitness, learning, these are not optional extras. These are the basics of leadership.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="font-bold">{item.title}</div>
                <div className="mt-2 text-slate-700">{item.text}</div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xl font-semibold">
              The highest performing leaders I’ve met are not the ones who grind
              the longest…
            </p>
            <p className="mt-3">
              They’re the ones who are present, disciplined, energised, and lead
              by example.
            </p>
          </div>

          <p className="font-semibold">
            What are your non-negotiables that keep you balanced?
          </p>

          <hr className="my-8" />

          <p className="font-semibold">Scars, Lessons and Triumphs (SLT) ⭐️</p>
          <p>A series of reflections from the procurement trenches.</p>

          <p className="font-semibold">
            👉🏽 Follow me for insights drawn from 25 years in procurement and
            over 38 years across global industry
          </p>

          <p className="font-semibold">Let’s continue the conversation.</p>

          <p className="text-slate-500">
            #Procurement #SupplyChain #StrategicSourcing #ValueCreation
            #BusinessPartnering #Sustainability #Innovation #Leadership
          </p>
        </div>
      </main>
    </div>
  );
}
