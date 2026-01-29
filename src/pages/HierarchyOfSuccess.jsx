// src/pages/HierarchyOfSuccess.jsx
import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function HierarchyOfSuccess() {
  const published = "21 Jan 2026"; // change anytime

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
          My Hierarchy of Success
        </h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <div className="mt-5 text-sm text-slate-500">
          Published:{" "}
          <span className="font-semibold text-slate-700">{published}</span>
        </div>

        <p className="mt-8 text-lg text-slate-700 leading-relaxed">
          People often talk about success as if it’s a personal journey. Promotions.
          Titles. Recognition. Career milestones. All important… but from my perspective
          I’ve learnt that success extends well beyond one’s own accomplishments.
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          For me, success starts with the business, is delivered through the team,
          and then is reflected in the individual.
        </p>

        <p className="mt-4 text-slate-900 font-semibold leading-relaxed">
          Business → Team → Individual.
          <br />
          That’s my hierarchy of success.
        </p>

        {/* Sections */}
        <section className="mt-10 space-y-10">
          <div>
            <h2 className="text-xl font-bold">1️⃣ Business success comes first</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              My belief is that I’m employed to do a job that contributes to the
              performance, growth and sustainability of the business. The business
              has to win first. If it doesn’t, nobody wins.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              That means focusing on outcomes, performance, delivery, decisions and
              results that matter at an enterprise level. Not at a functional level.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">2️⃣ Team success is how it’s delivered</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Obviously, success doesn’t happen by chance. You do it through teams,
              through collaboration, trust, shared responsibility, and aligned purpose.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              When teams succeed, momentum builds. The culture strengthens. Performance
              increases. People feel valued and engaged. And that collective success
              becomes the heart beat of the organisation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">3️⃣ Individual success is the outcome</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              When all that happens individual success naturally comes. Careers grow.
              People develop. Opportunities emerge. Recognition is given where it is deserved.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              You don’t have to chase status or visibility, it becomes a by-product of
              contribution.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Here is my take on different hierarchies of success
            </h2>

            <div className="mt-4 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold">
                  Focusing only on personal success
                </div>
                <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
                  <li>✔️ Can be motivating</li>
                  <li>✔️ Can drive ambition</li>
                  <li>❌ Risks ego-driven decisions</li>
                  <li>❌ Can create silos, competition and mistrust</li>
                  <li>❌ Rarely builds sustainable performance</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold">Focusing on team success</div>
                <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
                  <li>✔️ Builds resilience and capability</li>
                  <li>✔️ Strengthens culture and trust</li>
                  <li>✔️ Creates shared accountability</li>
                  <li>✔️ Drives consistent business performance</li>
                  <li>
                    ❌ Sometimes individuals may feel less visible (unless leaders ensure
                    recognition is there)
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold">
                  Focusing on business success first
                </div>
                <ul className="mt-3 list-disc pl-6 text-slate-600 space-y-1">
                  <li>✔️ Creates clarity of purpose</li>
                  <li>✔️ Aligns everyone to a common goal</li>
                  <li>✔️ Ensures impact is meaningful and measurable</li>
                  <li>
                    ❌ Requires strong leadership to balance people, delivery and culture
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold">So where do I place my priority?</h2>

            <p className="mt-3 text-slate-600 leading-relaxed font-semibold">
              👉 Business success first
              <br />
              👉 Delivered through high-performing teams
              <br />
              👉 Where individual success is earned, recognised and celebrated
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              That’s the model I believe creates sustainable performance, genuine value,
              and a sense of belonging and achievement.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We can choose to chase personal wins…
              <br />
              Or we can build something bigger than ourselves.
            </p>

            <p className="mt-4 text-slate-900 font-semibold leading-relaxed">
              What’s your thoughts?
            </p>
          </div>
        </section>

        {/* Close */}
        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-slate-700 font-semibold">
            Success is sustainable when it’s bigger than one person.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            When the business wins and the team thrives, individual success tends to
            follow — and it feels earned, not chased.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed font-semibold">
            Where do you place your hierarchy of success?
          </p>
        </section>

        <div className="mt-10 text-sm text-slate-500">
          Scars, Lessons and Triumphs (SLT) ⭐️ — reflections from the procurement trenches.
        </div>
      </main>
    </div>
  );
}
