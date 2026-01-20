import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function IdiotsGuideProcurement() {
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
      <div className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-4xl font-extrabold tracking-tight">
          My “Idiot’s Guide” to Procurement (No Fluff Edition)
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          20 January 2026 • 6 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <div className="prose prose-slate mt-8 max-w-none">
          <p><strong>Let’s be honest…</strong></p>
          <p>Procurement isn’t complicated. <br />People make it complicated.</p>

          <p>
            Over the years, I’ve watched procurement get dressed up with buzzwords,
            over-engineered processes, and endless “frameworks” that look great on
            PowerPoint… but deliver very little in real life.
          </p>

          <p><strong>So here it is.</strong></p>
          <p><strong>My Idiot’s Guide to Procurement — the basics, done properly.</strong></p>

          <h3>1️⃣ Know what you’re buying</h3>
          <p>Before you negotiate anything, understand:</p>
          <ul>
            <li>What it is</li>
            <li>Why it matters</li>
            <li>Who needs it</li>
            <li>What “good” looks like</li>
          </ul>
          <p>If you don’t understand the requirement, you’re not procuring… you’re processing.</p>

          <h3>2️⃣ Define value (not just price)</h3>
          <p>Lowest cost doesn’t mean best deal.</p>
          <p>Value includes:</p>
          <ul>
            <li>Performance</li>
            <li>Risk</li>
            <li>Quality</li>
            <li>Lead time</li>
            <li>Reliability</li>
            <li>Contract protection</li>
            <li>Long-term outcomes</li>
          </ul>
          <p>Savings are easy to claim. Value is harder — but it’s what leaders respect.</p>

          <h3>3️⃣ The supplier is not the enemy</h3>
          <p>Procurement isn’t about “winning”.</p>
          <p>It’s about:</p>
          <ul>
            <li>Building the right relationships</li>
            <li>Creating leverage through trust</li>
            <li>Setting clear expectations</li>
            <li>Holding people accountable</li>
          </ul>
          <p>Strong suppliers make strong businesses.</p>

          <h3>4️⃣ Don’t hide behind process</h3>
          <p>Process should enable decisions, not delay them.</p>
          <p>
            If your procurement process takes longer than the delivery… <br />
            You don’t have a procurement function. You have a bureaucracy.
          </p>

          <h3>5️⃣ Communicate like a human</h3>
          <p>If you can’t explain your strategy in plain English, you don’t understand it.</p>
          <p>Procurement is a people business:</p>
          <ul>
            <li>Influence</li>
            <li>Relationships</li>
            <li>Clarity</li>
            <li>Confidence</li>
            <li>Consistency</li>
          </ul>

          <h3>6️⃣ Contract like it’s your own money</h3>
          <p><strong>Simple rule I’ve lived by my whole career:</strong></p>
          <p>
            If you wouldn’t spend your own money that way… don’t spend the company’s.
          </p>
          <p>Procurement is stewardship. Not admin.</p>

          <h3>7️⃣ Do what you said you’d do</h3>
          <p>This one separates the professionals from the noise.</p>
          <p>Procurement credibility comes from:</p>
          <ul>
            <li>Delivery</li>
            <li>Consistency</li>
            <li>Integrity</li>
            <li>Results</li>
          </ul>

          <p>Not posts. Not slogans. Not theatre.</p>

          <p>
            Procurement doesn’t need to be “sexy”. <br />
            It needs to be effective.
          </p>

          <p>
            And if we want to attract the next generation into this profession… <br />
            we need to stop overcomplicating it.
          </p>

          <p><strong>Keep it simple. Keep it real. Deliver value.</strong></p>

          <p><strong>What would YOU add to the idiot’s guide?</strong></p>

          <hr />

          <p>
            <strong>Scars, Lessons and Triumphs (SLT) ⭐️</strong><br />
            A series of reflections from the procurement trenches.
          </p>
          <p>
            👉🏽 Follow me for insights drawn from 25 years in procurement and over 38 years across global industry
          </p>
          <p><strong>Let’s continue the conversation.</strong></p>
        </div>
      </div>
    </div>
  );
}
