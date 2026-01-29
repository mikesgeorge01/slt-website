import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function LeadershipThatInspires() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple Header */}
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
          Leadership that Inspires
        </h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          Calm, accountability, and standards when it gets uncomfortable.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {/* Live article – Hierarchy of Success */}
          <Link
            to="/stories/hierarchy-of-success"
            className="block rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-md transition"
          >
            <div className="text-sm font-semibold">My Hierarchy of Success</div>
            <p className="mt-2 text-sm text-slate-600">
              Business → Team → Individual. Why sustainable success starts bigger
              than ourselves.
            </p>
            <div className="mt-4 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          {/* Live article – Control the Controllables */}
          <Link
            to="/stories/control-the-controllables"
            className="block rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-md transition"
          >
            <div className="text-sm font-semibold">Control the Controllables</div>
            <p className="mt-2 text-sm text-slate-600">
              Focus your energy on what you can influence — and let the rest pass.
            </p>
            <div className="mt-4 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          {/* Live article – I Don’t Believe in Regrets */}
          <Link
            to="/stories/i-dont-believe-in-regrets"
            className="block rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-md transition"
          >
            <div className="text-sm font-semibold">I Don’t Believe in Regrets</div>
            <p className="mt-2 text-sm text-slate-600">
              Every decision was made with what we knew at the time. No regrets —
              just lessons and forward momentum.
            </p>
            <div className="mt-4 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          {/* Live article – Respect */}
          <Link
            to="/stories/respect-costs-nothing"
            className="block rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-md transition"
          >
            <div className="text-sm font-semibold">
              Respect, it costs nothing, but means everything
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Respect sets the tone. It builds trust, strengthens relationships,
              and shows real character.
            </p>
            <div className="mt-4 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          {/* Live article – Interviewing for Talent */}
          <Link
            to="/stories/what-i-look-for-when-interviewing-for-talent"
            className="block rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-md transition"
          >
            <div className="text-sm font-semibold">
              What I Look for When Interviewing For Talent
            </div>
            <p className="mt-2 text-sm text-slate-600">
              What I look for beyond the CV — mindset, ownership, curiosity, and values.
            </p>
            <div className="mt-4 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          {/* ✅ NEW Live article – Every Success Story Starts by Ignoring “You Can’t” */}
          <Link
            to="/stories/leadership-that-inspires/every-success-story-starts-by-ignoring-you-cant"
            className="block rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-md transition"
          >
            <div className="text-sm font-semibold">
              Every Success Story Starts by Ignoring “You Can’t”
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Growth starts where it’s uncomfortable — courage, discipline, and belief
              in what’s possible.
            </p>
            <div className="mt-4 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
