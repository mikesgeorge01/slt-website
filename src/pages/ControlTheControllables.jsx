import React from "react";
import { Link } from "react-router-dom";

export default function ControlTheControllables() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link to="/stories/leadership-that-inspires" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
            ← Back to Leadership
          </Link>

          <Link
            to="/"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            Home
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Control the Controllables
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
            <span>Leadership That Inspires</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <div className="mt-6 h-1 w-20 rounded-full bg-amber-500"></div>
        </div>

        <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-li:leading-relaxed">
          <p>
            At the heart of my leadership: I <strong>try</strong> to control the controllables.
          </p>

          <p>
            “Worry about the things you can control.” We’ve all heard it.
            And I’ll be honest… it’s one of the hardest things to actually live by.
          </p>

          <p>
            Because life isn’t that simple. Every day is filled with noise, pressure,
            uncertainty, opinions, expectations — and the occasional chaos grenade,
            just for fun.
          </p>

          <p>
            So even when we know we should focus on what’s within our control,
            we still get pulled into the things that aren’t.
          </p>

          <p>
            And when that happens, it doesn’t just stay in our mind.
            It shows up physically:
          </p>

          <ul>
            <li>tension</li>
            <li>anxiety</li>
            <li>overthinking</li>
            <li>sleepless nights</li>
            <li>emotional reactions that don’t match the moment</li>
          </ul>

          <p>
            That’s why I love the idea of separating life into two clear spaces.
          </p>

          <h3>Out of my control</h3>
          <ul>
            <li>The past</li>
            <li>The future</li>
            <li>What other people think</li>
            <li>The actions of others</li>
          </ul>

          <h3>In my control</h3>
          <ul>
            <li>My values</li>
            <li>My thoughts and actions</li>
            <li>The goals I set</li>
            <li>What I give my energy to</li>
            <li>How I speak to myself</li>
            <li>How I handle challenges</li>
          </ul>

          <p>
            Knowing this is the easy bit. Recognising it — and managing it — takes work.
          </p>

          <p>
            Earlier in my career, I spent far too much time worrying about things like:
          </p>

          <ul>
            <li>Do they think I’m good enough?</li>
            <li>Do I look out of my depth?</li>
            <li>Do I sound like I know what I’m talking about?</li>
            <li>Am I being judged?</li>
          </ul>

          <p>
            That mental noise was exhausting.
          </p>

          <p>
            But over time — through experience, maturity, and scars earned the hard way —
            I learned something important.
          </p>

          <p>
            Most of the things we worry about never happen.
            And the ones that do?
            We handle them better than we ever imagined.
          </p>

          <p>
            One technique that has genuinely helped me is meditation.
            Not because it “fixes” everything — but because it helps me return to
            what I can control.
          </p>

          <p>
            And when you return to that, you regain calm and clarity.
            Which puts you back in a position of strength.
          </p>

          <p>
            So if you’re feeling overwhelmed right now, ask yourself one simple question:
          </p>

          <p>
            <strong>Is this in my control… or not?</strong>
          </p>

          <p>
            And if it isn’t?
            Let it pass through you — not take over you.
          </p>
        </div>
      </article>
    </div>
  );
}
