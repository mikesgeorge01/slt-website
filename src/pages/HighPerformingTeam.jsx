import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function HighPerformingTeam() {
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
            {/* Back to previous screen */}
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
            ORGANISATIONAL PERFORMANCE
          </div>

          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
            What I believe it takes to build a high-performing team.
          </h1>

          <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-slate-800">
          <p>
            After nearly four decades leading teams across nuclear, oil &amp;
            gas, defence, and giga-projects, the major truth I’ve learned is
            that high performance is achieved by setting your people up for
            success.
          </p>

          <p className="font-semibold">My leadership focuses on having a:</p>

          <div className="space-y-4">
            {[
              {
                title: "🔹 Shared Purpose",
                text: "Everyone understands the “why”. They know exactly what they’re building towards and how their daily actions contribute to the mission. The greatest example I have seen in my career is when I worked in Nuclear. Everyone passionately believes in clean nuclear energy.",
              },
              {
                title: "🔹 Relentless Accountability",
                text: "Ownership is a must. People do what they say they’ll do, they hold each other to standards, and excuses don’t exist.",
              },
              {
                title: "🔹 Transparency & Trust",
                text: "No politics. No hidden agendas. No egos. People speak openly, challenge respectfully, and decisions are made with honesty.",
              },
              {
                title: "🔹 Psychological Safety",
                text: "People feel safe to admit mistakes, ask questions, and say, “I need help.” That’s where innovation lives. Show your vulnerability.",
              },
              {
                title: "🔹 Continuous Improvement",
                text: "The team never gets comfortable. They actively look for better ways of working, smarter processes, and ways to reduce waste and complexity.",
              },
              {
                title: "🔹 Diversity of Thought",
                text: "Different experiences, backgrounds, ages, cultures and strengths, not only welcomed, but a must. Status quo is a risk, not a strength.",
              },
              {
                title: "🔹 Fun & Connection",
                text: "High performance isn’t without personality. The very best teams laugh together, support each other, and enjoy the journey as much as the outcome.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="font-bold">{item.title}</div>
                <div className="mt-2 text-slate-700">{item.text}</div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xl font-semibold">
              And here’s my summary:
            </p>
            <p className="mt-3">
              High performance isn’t measured only in KPIs. It’s culture,
              behaviour, discipline and energy.
            </p>
          </div>

          <p>
            I’ve been lucky enough to lead some incredible teams over the years,
            teams that have delivered major turnarounds, nuclear projects,
            transformation programmes and giga-project procurement strategies.
          </p>

          <p className="font-semibold">
            Every single one of them proved the same lesson.
          </p>

          <p className="text-xl font-semibold">
            As a former CEO once said to me, if you take care of the people, the
            performance takes care of itself.
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
