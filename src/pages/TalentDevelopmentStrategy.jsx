import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

function Bullet({ children }) {
  return (
    <li className="flex gap-2 text-slate-600">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-amber-500" />
      <span>{children}</span>
    </li>
  );
}

function SectionCard({ title, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function TalentDevelopmentStrategy() {
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
          My take on an Industry Leading Talent Development Strategy
        </h1>

<p className="mt-2 text-sm text-slate-500">
  29 December 2025 • 6 min read
</p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-6 text-lg text-slate-600">
          After nearly four decades leading teams, I’ve learned that high performing
          organisations don’t just find talent, they develop it. They invest, stretch
          people, coach daily, and create environments where potential turns into
          capability.
        </p>

        <p className="mt-4 text-lg text-slate-600">
          This is what I’ve learnt, from some of the best senior leaders.
        </p>

        <div className="mt-10 space-y-5">
          <SectionCard title="1️⃣ Clear Skills Vision & Workforce Planning">
            <p className="text-slate-600">Start with your end goal:</p>
            <ul className="mt-4 space-y-2">
              <Bullet>What skills will the business need in 2, 5, 10 years?</Bullet>
              <Bullet>Which roles are critical?</Bullet>
              <Bullet>Where are the gaps today?</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="2️⃣ Personalised Development Paths">
            <p className="text-slate-600">
              Leading organisations don’t use generic plans. They create:
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Competency models by role</Bullet>
              <Bullet>Individual development plans</Bullet>
              <Bullet>Skills matrices</Bullet>
              <Bullet>Tailored learning pathways</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="3️⃣ Leadership at Every Level">
            <p className="text-slate-600">
              Talent development is not an HR initiative. It’s about leadership.
            </p>
            <p className="mt-4 text-slate-600">High-performing companies:</p>
            <ul className="mt-4 space-y-2">
              <Bullet>Train leaders as coaches</Bullet>
              <Bullet>Reward people development</Bullet>
              <Bullet>Measure leaders on talent outcomes</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="4️⃣ Stretch Roles & Rotational Experience">
            <p className="text-slate-600">
              Classroom learning has limits. Top strategies include:
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Secondments</Bullet>
              <Bullet>Rotations</Bullet>
              <Bullet>Cross-functional assignments</Bullet>
              <Bullet>Acting roles</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="5️⃣ Culture of Psychological Safety">
            <p className="text-slate-600">People take risks when:</p>
            <ul className="mt-4 space-y-2">
              <Bullet>They can ask questions</Bullet>
              <Bullet>They can fail without fear</Bullet>
              <Bullet>They can challenge upwards</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="6️⃣ Structured Feedback & Coaching">
            <p className="text-slate-600">Not once a year. Constantly.</p>
            <p className="mt-4 text-slate-600">Best practice includes:</p>
            <ul className="mt-4 space-y-2">
              <Bullet>Monthly career conversations</Bullet>
              <Bullet>Coaching frameworks</Bullet>
              <Bullet>360 feedback</Bullet>
              <Bullet>Strength-based development</Bullet>
              <Bullet>Mentoring networks</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="7️⃣ High-Potential & Succession Pipelines">
            <p className="text-slate-600">World-class organisations:</p>
            <ul className="mt-4 space-y-2">
              <Bullet>Identify top talent early</Bullet>
              <Bullet>Fast-track their development</Bullet>
              <Bullet>Tie learning to succession plans</Bullet>
              <Bullet>Map risk of loss vs importance</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="8️⃣ Integrated Learning Ecosystem">
            <p className="text-slate-600">
              Industry leaders blend learning into work:
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Digital academies</Bullet>
              <Bullet>Micro-learning</Bullet>
              <Bullet>External accreditations</Bullet>
              <Bullet>Internal knowledge libraries</Bullet>
              <Bullet>Communities of practice</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="9️⃣ Data-Driven Measurement">
            <p className="text-slate-600">
              Any investment should show as a ROI:
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Capability uplift</Bullet>
              <Bullet>Internal mobility</Bullet>
              <Bullet>Engagement scores</Bullet>
              <Bullet>Retention</Bullet>
              <Bullet>Performance uplift</Bullet>
            </ul>
          </SectionCard>

          <SectionCard title="1️⃣0️⃣ Purpose & Values Alignment">
            <p className="text-slate-600">
              Organisations that connect development to purpose enjoy:
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Higher loyalty</Bullet>
              <Bullet>Better collaboration</Bullet>
              <Bullet>Stronger culture</Bullet>
            </ul>
          </SectionCard>

          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-bold tracking-tight">My summary</h2>
            <p className="mt-3 text-slate-700">
              Invest in your people, the rewards will speak for themselves.
            </p>

            <p className="mt-5 text-slate-700">
              <span className="font-semibold">Scars, Lessons and Triumphs (SLT) ⭐️</span>
              <br />
              A series of reflections from the procurement trenches.
            </p>

            <p className="mt-4 text-slate-700">
              👉🏽 Follow me for insights drawn from 25 years in procurement and over 38 years across global industry
            </p>

            <p className="mt-4 text-slate-700 font-semibold">
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

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/"
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Back to SLT
            </Link>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600 transition"
            >
              Discuss on LinkedIn
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
