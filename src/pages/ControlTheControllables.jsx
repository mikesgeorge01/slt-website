import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function ControlTheControllables() {
  const published = "22 Jan 2026"; // change anytime

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
            <Link
              to="/stories/leadership-that-inspires"
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
          Control the Controllables
        </h1>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

<img
  src="/control-the-controllables.jpg"
  alt="Control the Controllables"
  className="mt-8 mx-auto w-full max-w-xl rounded-3xl border border-slate-200 shadow-sm"
/>

        <div className="mt-5 text-sm text-slate-500">
          Published:{" "}
          <span className="font-semibold text-slate-700">{published}</span>
          <span className="mx-2">•</span>5 min read
        </div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          At the heart of my leadership, I <strong>try</strong> to control the
          controllables.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          “Worry about the things you can control.” We’ve all heard it.
          And I’ll be honest… it’s one of the hardest things to actually live by.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Because life isn’t that simple. Every day is filled with:
        </p>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>noise</li>
          <li>pressure</li>
          <li>uncertainty</li>
          <li>opinions</li>
          <li>expectations</li>
          <li>and the occasional chaos grenade… just for fun</li>
        </ul>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Even when we know we should focus on what’s within our control,
          we still get pulled into the things that aren’t.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          And when that happens, it doesn’t just stay in our head.
          It shows up physically:
        </p>

        <ul className="mt-4 list-disc pl-6 text-slate-600 space-y-1">
          <li>tension</li>
          <li>anxiety</li>
          <li>overthinking</li>
          <li>sleepless nights</li>
          <li>emotional reactions that don’t match the moment</li>
        </ul>

        {/* Sections */}
        <section className="mt-10 space-y-10">
          <div>
            <h2 className="text-xl font-bold">Out of my control</h2>
            <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
              <li>The past</li>
              <li>The future</li>
              <li>What other people think</li>
              <li>The actions of others</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold">In my control</h2>
            <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
              <li>My values</li>
              <li>My thoughts and actions</li>
              <li>The goals I set</li>
              <li>What I give my energy to</li>
              <li>How I speak to myself</li>
              <li>How I handle challenges</li>
            </ul>
          </div>
        </section>

        <p className="mt-10 text-slate-600 leading-relaxed">
          Knowing this is the easy bit. Recognising it — and managing it — takes work.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Earlier in my career, I spent far too much time worrying about whether I
          was good enough, whether I sounded confident, or whether I was being judged.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          That mental noise was exhausting.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          Over time — through experience, maturity, and scars earned the hard way —
          I learned something important.
        </p>

        <p className="mt-4 text-slate-900 font-semibold">
          Most of the things we worry about never happen.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          And the ones that do? We handle them far better than we ever imagined.
        </p>

        <p className="mt-6 text-slate-600 leading-relaxed">
          Meditation has genuinely helped me. Not because it fixes everything —
          but because it helps me return to what I can control.
        </p>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700 font-semibold">
            If you’re feeling overwhelmed, ask yourself:
          </p>
          <p className="mt-3 text-slate-900 font-semibold">
            Is this in my control… or not?
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            And if it isn’t — let it pass through you, not take over you.
          </p>
        </section>

        <div className="mt-10 text-sm text-slate-500">
          Scars, Lessons and Triumphs (SLT) ⭐️ — reflections from the procurement trenches.
        </div>
      </main>
    </div>
  );
}
