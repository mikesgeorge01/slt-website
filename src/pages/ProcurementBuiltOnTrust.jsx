import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function ProcurementBuiltOnTrust() {
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
            {/* Back to previous screen (Procurement As Value listing) */}
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
            PROCUREMENT AS VALUE
          </div>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
            Procurement is built on trust, and trust is built on ethics.
          </h1>
          <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-slate-800">
          <p>
            <strong>
              Procurement is built on trust, and trust is built on ethics.
            </strong>
          </p>

          <p>
            One of the biggest lessons I learned early in my career was simple
            but powerful:
          </p>

          <p className="font-semibold">
            👉 When you commit money on behalf of your company, treat it as if it
            were your own.
          </p>

          <p>That mindset changes everything.</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Value for money becomes non-negotiable.</li>
            <li>Integrity drives your decision making.</li>
            <li>Doing the right thing becomes a strength.</li>
          </ul>

          <p>In procurement, you will face pressure.</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Pressure to “just approve it.”</li>
            <li>Pressure to “just do it as a favour.”</li>
            <li>Pressure to “not make a fuss.”</li>
          </ul>

          <p className="font-semibold">But here’s the truth I’ve lived by:</p>

          <p className="text-xl font-bold">
            💡 If something doesn’t feel right, it usually isn’t.
          </p>

          <p>
            Ethics isn’t just a policy… it’s about strength of character. It’s
            courage. It’s choosing the right path even when the easy path is
            more convenient.
          </p>

          <p>
            Standing firm takes strength. It may feel uncomfortable in the
            moment. You may not always be thanked for it. But in the long run?
          </p>

          <p className="text-xl font-semibold">
            ✨ You’ll earn respect <br />
            ✨ You’ll build credibility <br />
            ✨ And you’ll look back with absolute confidence knowing you did the
            right thing
          </p>

          <p>
            To anyone starting out in procurement or supply chain, remember
            this:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>✔️ Stay true to your values and integrity</li>
            <li>✔️ Be ethical even when nobody is watching</li>
            <li>✔️ Make decisions you can defend</li>
            <li>✔️ Stand behind your judgement</li>
          </ul>

          <p className="font-semibold">
            Your reputation is your legacy. Don’t ever lose sight of that.
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
