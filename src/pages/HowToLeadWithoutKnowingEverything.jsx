import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function HowToLeadWithoutKnowingEverything() {
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
              to="/personal-development"
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
          How to Lead Without Knowing Everything — Ask Better Questions, at the Right Time
        </h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <div className="mt-10 max-w-3xl space-y-6 text-lg text-slate-700 leading-relaxed">
          <p>
            One of the biggest misconceptions about leadership is that you must have every
            answer, every solution, and every situation figured out.
          </p>

          <p>You don’t.</p>

          <p>You’re not supposed to.</p>

          <p>
            In fact, some of the strongest leaders I’ve worked with didn’t have all the
            answers… but they knew how to ask the right questions at the right time. And
            that’s where real leadership lives.
          </p>

          <h2 className="pt-6 text-2xl font-bold text-slate-900">
            Why Asking Questions Is a Leadership Strength (Not a Weakness)
          </h2>

          <p>When leaders ask smart, timely questions, they:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Empower people instead of overruling them</li>
            <li>Unlock better thinking from the team</li>
            <li>Avoid “single-brain decision making”</li>
            <li>Build psychological safety and trust</li>
            <li>Show humility, curiosity, and confidence</li>
          </ul>

          <p>
            No one wants to follow a leader who pretends. But people will follow a leader
            who listens, respects their expertise, and makes them feel valued.
          </p>

          <h2 className="pt-6 text-2xl font-bold text-slate-900">
            The Art Is Not Just Asking… It’s Asking at the Right Time
          </h2>

          <p>
            Timing matters. Great leaders don’t interrupt flow. They don’t undermine. They
            don’t interrogate. They ask questions that move thinking forward, such as:
          </p>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="font-semibold">🕒 At the start:</p>
            <p className="mt-2">“What don’t we know yet?”</p>
            <p>“What assumptions are we making?”</p>

            <div className="mt-6"></div>

            <p className="font-semibold">🕒 During execution:</p>
            <p className="mt-2">“What risks are we not seeing?”</p>
            <p>“How confident are we, honestly?”</p>

            <div className="mt-6"></div>

            <p className="font-semibold">🕒 When things go wrong:</p>
            <p className="mt-2">“What did we learn?”</p>
            <p>“How do we get better next time?”</p>
          </div>

          <p>
            These are not questions of doubt.
            <br />
            They are questions of clarity, progress, and growth.
          </p>

          <h2 className="pt-6 text-2xl font-bold text-slate-900">
            Strong Leaders Aren’t The Smartest in the Room…
          </h2>

          <p>They build the smartest room.</p>
          <p>They surround themselves with brilliant people.</p>
          <p>They listen.</p>
          <p>They challenge respectfully.</p>
          <p>They make decisions with input, not ego.</p>

          <p>That is real strength.</p>

          <p>
            That’s how trust is built.
            <br />
            And that’s how teams grow because people feel <strong>INCLUDED</strong>, not
            just directed.
          </p>

          <h2 className="pt-6 text-2xl font-bold text-slate-900">
            My takeaway after years of leading teams
          </h2>

          <p>Leadership isn’t about knowing everything.</p>

          <p>It’s about creating an environment where the right thinking happens.</p>

          <p>
            Ask well.
            <br />
            Ask wisely.
            <br />
            Ask with intent.
          </p>

          <p>You’ll be amazed what your team will deliver.</p>

          <hr className="my-10 border-slate-200" />

          <p className="font-semibold text-slate-900">
            Scars, Lessons and Triumphs (SLT) ⭐️
          </p>
          <p className="text-slate-600">
            A series of reflections from the procurement trenches.
          </p>

          <p>
            👉🏽Follow me for insights drawn from 25 years in procurement and over 38
            years across global industry
          </p>

          <p className="text-slate-600">
            Let’s continue the conversation.
          </p>

          <p className="text-sm text-slate-500">
            #Procurement #SupplyChain #StrategicSourcing #ValueCreation #BusinessPartnering
            #Sustainability #Innovation #Leadership
          </p>
        </div>
      </div>
    </div>
  );
}
