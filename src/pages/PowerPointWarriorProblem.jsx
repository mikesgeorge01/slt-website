import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function PowerPointWarriorProblem() {
  const published = "23 Jan 2026"; // change anytime

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
              to="/stories/organisational-performance"
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
          The “PowerPoint Warrior” Problem
        </h1>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <div className="mt-5 text-sm text-slate-500">
          Published:{" "}
          <span className="font-semibold text-slate-700">{published}</span>
          <span className="mx-2">•</span>5 min read
        </div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          We’ve all worked with them. Highly polished slides. Immaculate formatting.
          Perfect graphics.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          But very little real conversation happening.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          PowerPoint can be a great tool — but when it becomes the primary communication
          style, it can actually stifle progress and decision-making.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Here’s why I think the “PowerPoint warrior” approach is far more destructive
          than people realise.
        </p>

        {/* Sections */}
        <section className="mt-10 space-y-10">
          <div>
            <h2 className="text-xl font-bold">❌ Context gets lost</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              A slide can’t carry nuance. It can’t show emotion. It can’t adjust when the
              conversation changes.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Complex subjects need personality, empathy, and tone. When everything is
              put into boxes, bullet points, and carefully censored wording, the true
              context disappears.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Important details, risks, and considerations that matter in real life often
              never make it onto the slide.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              ❌ The story becomes about the slides… not the subject
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Instead of asking:
            </p>
            <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
              <li>What are the real risks?</li>
              <li>What should we do?</li>
              <li>What haven’t we thought about?</li>
            </ul>

            <p className="mt-5 text-slate-600 leading-relaxed">
              We end up with:
            </p>
            <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
              <li>“Font size is wrong…”</li>
              <li>“Slide 7 contradicts slide 3…”</li>
              <li>“Where’s the appendix?”</li>
            </ul>

            <p className="mt-4 text-slate-600 leading-relaxed">
              The room stops thinking critically about the issue and instead critiques
              the presentation. The objective is no longer solving a problem… it’s
              defending a PowerPoint.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">❌ It kills conversation</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              PowerPoint doesn’t promote dialogue… it limits it.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              You’re effectively locked into a structure someone predetermined. Slides
              dictate the path — how to think, what to discuss, and which direction to
              follow. That’s not collaboration; that’s controlled storytelling.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              The best conversations are:
            </p>
            <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
              <li>Free-flowing</li>
              <li>Challenging</li>
              <li>Adaptive</li>
              <li>Honest</li>
            </ul>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A rigid deck tends to suffocate that.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">❌ It gives a false sense of confidence</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              A slick deck can make weak thinking look strong. It hides uncertainty and
              vulnerability. It creates the illusion that everything is known, fixed,
              and certain.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              But in real life, projects change. External factors shift. Risks develop.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed font-semibold">
              It should be more about thinking, not presenting.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">❌ It can become culturally destructive</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              When PowerPoint becomes the default language of communication, people talk
              to slides — not to people.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              That erodes trust, insight, debate, and human connection — and can distance
              teams from what’s really important.
            </p>
          </div>
        </section>

        {/* Close */}
        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700 font-semibold">
            Use PowerPoint as a supporting tool — not as your voice.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Not as your thinking. Not as your leadership style.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Generally, the most powerful conversations happen with a whiteboard, a table
            discussion, a simple document… or just people talking.
          </p>
        </section>

        <div className="mt-10 text-sm text-slate-500">
          Scars, Lessons and Triumphs (SLT) ⭐️ — reflections from the procurement trenches.
        </div>
      </main>
    </div>
  );
}
