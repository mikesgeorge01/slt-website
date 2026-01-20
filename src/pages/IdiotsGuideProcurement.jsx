import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function IdiotsGuideProcurement() {
  const published = "20 Jan 2026"; // change anytime

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
              to="/stories/procurement-as-value"
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
  My “Idiot’s Guide” to Procurement (No Fluff Edition)
</h1>
<div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

<img
  src="/idiots-guide.jpg"
  alt="Idiot’s Guide to Procurement"
  className="mt-8 mx-auto w-full max-w-xl rounded-3xl border border-slate-200 shadow-sm"
/>

        <div className="mt-5 text-sm text-slate-500">
          Published: <span className="font-semibold text-slate-700">{published}</span>
        </div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          Let’s be honest…
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Procurement isn’t complicated. People make it complicated.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Over the years, I’ve watched procurement get dressed up with buzzwords,
          over-engineered processes, and endless “frameworks” that look great on PowerPoint…
          but deliver very little in real life.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          So here it is, my Idiot’s Guide to Procurement. The basics, done properly.
        </p>

        {/* Sections */}
        <section className="mt-10 space-y-10">
          <div>
            <h2 className="text-xl font-bold">1️⃣ Know what you’re buying</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Before you negotiate anything, understand:
            </p>
            <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
              <li>What it is</li>
              <li>Why it matters</li>
              <li>Who needs it</li>
              <li>What “good” looks like</li>
            </ul>
            <p className="mt-4 text-slate-600 leading-relaxed">
              If you don’t understand the requirement, you’re not procuring… you’re processing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">2️⃣ Define value (not just price)</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Lowest cost doesn’t mean best deal.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">Value includes:</p>
            <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
              <li>Performance</li>
              <li>Risk</li>
              <li>Quality</li>
              <li>Lead time</li>
              <li>Reliability</li>
              <li>Contract protection</li>
              <li>Long-term outcomes</li>
            </ul>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Savings are easy to claim. Value is harder — but it’s what leaders respect.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">3️⃣ The supplier is not the enemy</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Procurement isn’t about “winning”.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">It’s about:</p>
            <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
              <li>Building the right relationships</li>
              <li>Creating leverage through trust</li>
              <li>Setting clear expectations</li>
              <li>Holding people accountable</li>
            </ul>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Strong suppliers make strong businesses.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">4️⃣ Don’t hide behind process</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Process should enable decisions, not delay them.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed font-semibold">
              If your procurement process takes longer than the delivery… you don’t have a procurement function.
              You have a bureaucracy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">5️⃣ Communicate like a human</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              If you can’t explain your strategy in plain English, you don’t understand it.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Procurement is a people business:
            </p>
            <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
              <li>Influence</li>
              <li>Relationships</li>
              <li>Clarity</li>
              <li>Confidence</li>
              <li>Consistency</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">6️⃣ Contract like it’s your own money</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Simple rule I’ve lived by my whole career:
            </p>
            <p className="mt-4 text-slate-900 font-semibold">
              If you wouldn’t spend your own money that way… don’t spend the company’s.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Procurement is stewardship. Not admin.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">7️⃣ Do what you said you’d do</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              This one separates the professionals from the noise.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Procurement credibility comes from:
            </p>
            <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
              <li>Delivery</li>
              <li>Consistency</li>
              <li>Integrity</li>
              <li>Results</li>
            </ul>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Not posts. Not slogans. Not theatre.
            </p>
          </div>
        </section>

        {/* Close */}
        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700 font-semibold">
            Procurement doesn’t need to be “sexy”. It needs to be effective.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            And if we want to attract the next generation into this profession… we need to stop overcomplicating it.
            Keep it simple. Keep it real. Deliver value.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed font-semibold">
            What would YOU add to the idiot’s guide?
          </p>
        </section>

        <div className="mt-10 text-sm text-slate-500">
          Scars, Lessons and Triumphs (SLT) ⭐️ — reflections from the procurement trenches.
        </div>
      </main>
    </div>
  );
}
