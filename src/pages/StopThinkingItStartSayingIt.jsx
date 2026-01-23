import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function StopThinkingItStartSayingIt() {
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
              to="/stories/personal-development"
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
          Stop Thinking It. Start Saying It.
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          {published} • 4 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          Stop Thinking It. Start Saying It. If It Matters Enough to Think It… It
          Matters Enough to Say It
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Some of the most powerful conversations in leadership never make it
          into the room.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          They stay in our heads. Your own background conversations, or as I call
          it, your unsaids.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          You know the ones:
        </p>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>When you disagree but don’t speak up</li>
          <li>When something feels wrong but you stay quiet</li>
          <li>When you have a better idea but doubt yourself</li>
          <li>When your instincts are screaming, but your voice stays silent</li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          We convince ourselves:
        </p>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>“Now isn’t the right time.”</li>
          <li>“I don’t want to upset anyone.”</li>
          <li>“Someone else will say it.”</li>
          <li>“What if I’m wrong?”</li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          So the conversation continues…
          <br />
          …but only in our mind.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          And that’s where risk sits.
          <br />
          That’s where opportunities are lost.
          <br />
          That’s where trust slowly erodes with ourselves.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Over the years I’ve learned this:
        </p>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>👉 If your inner voice is speaking loudly… it’s usually for a reason.</li>
          <li>👉 Courage isn’t shouting, it’s calmly saying what matters.</li>
          <li>
            👉 Silence may feel safe, but it rarely serves us, our teams, or the
            organisation.
          </li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          The best leaders I’ve worked with create environments where people feel
          safe to speak.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          But the first step is personal courage, choosing to bring that internal
          voice into the room.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          If you disagree, say it respectfully.
          <br />
          If you see a risk, raise it.
          <br />
          If you have an idea, share it.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Because progress doesn’t come from quiet internal dialogue. It comes
          when we find the courage to speak up.
        </p>

        <p className="mt-6 text-slate-900 font-semibold leading-relaxed">
          Beat your inner demons and share your thoughts!
        </p>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-900 font-semibold">
            Scars, Lessons and Triumphs (SLT) ⭐️
          </p>
          <p className="mt-2 text-slate-600">
            A series of reflections from the procurement trenches.
          </p>

          <p className="mt-4 text-slate-600">
            👉🏽Follow me for insights drawn from 25 years in procurement and over 38
            years across global industry
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
