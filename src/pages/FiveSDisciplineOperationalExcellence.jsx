import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function FiveSDisciplineOperationalExcellence() {
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
            5S: The Discipline Behind Operational Excellence
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-slate-800">
          <p className="font-semibold">
            5S is often misunderstood as a “housekeeping exercise”. It isn’t.
          </p>

          <p>
            Originating in Japan, 5S is far more than workplace organisation.
            It’s a discipline that drives efficiency, quality, and safety by
            eliminating waste and creating order — and it sits firmly within
            Lean and Kaizen.
          </p>

          <p>
            One of the strongest examples I’ve seen was during my time at{" "}
            <span className="font-semibold">URENCO</span>.
          </p>

          <p>
            In a safety-critical nuclear environment, 5S wasn’t just a tidy-up
            exercise. It was a foundational way of working. Visual control,
            clear standards, disciplined execution, and personal ownership were
            non-negotiable. And it wasn’t “implemented” and forgotten. It was
            sustained.
          </p>

          <p className="font-semibold">The Five Pillars of 5S:</p>

          <div className="space-y-4">
            {[
              {
                title: "🔹 Sort (Seiri)",
                text: "Separate what is necessary from what is not. If it doesn’t add value, it’s waste. Clutter hides problems and slows decision-making.",
              },
              {
                title: "🔹 Set in Order (Seiton)",
                text: "Arrange what’s needed so it’s easy to find and easy to return. A place for everything, and everything in its place. Time spent searching is time stolen from value creation.",
              },
              {
                title: "🔹 Shine (Seiso)",
                text: "Clean regularly—not to impress, but to inspect. A clean environment exposes defects early and builds pride in ownership.",
              },
              {
                title: "🔹 Standardize (Seiketsu)",
                text: "Create clear standards, routines, and visual controls. Consistency beats heroics. Standards enable scale, quality, and trust.",
              },
              {
                title: "🔹 Sustain (Shitsuke)",
                text: "The hardest S. This is about discipline and leadership. 5S only sticks when leaders role-model behaviours, reinforce standards, and never walk past a problem.",
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
            <p className="text-xl font-semibold">The real benefits of 5S:</p>

            <div className="mt-4 space-y-2 text-slate-700">
              {[
                "Reduced waste (time, inventory, motion)",
                "Improved safety and fewer accidents",
                "Increased productivity and flow",
                "Higher employee morale and ownership",
                "Better quality and reduced downtime",
              ].map((b) => (
                <div key={b} className="flex gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <p className="mt-5">
              5S is a cultural commitment to doing the basics exceptionally
              well, every day.
            </p>
          </div>

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
