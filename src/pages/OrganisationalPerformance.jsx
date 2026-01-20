import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function OrganisationalPerformance() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple Header */}
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
              to="/"
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

      {/* Page Content */}
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Organistional Performance
        </h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          Calm, accountability, and standards when it gets uncomfortable.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "My take on a Industry Leading Talent Development Strategy",
            "Work Life Balance: A Leadership Responsibility, Not a Luxury",
            "What I believe it takes to build a high-performing team",
            "5S: The Discipline Behind Operational Excellence",
            "High Performance Isn’t Just About Output, It’s About Honest Conversations",
            "Change Management",
          ].map((x) => (
            <div
              key={x}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold">{x}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
