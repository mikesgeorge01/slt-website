import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function NecVsFidic() {
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
            {/* Back to Procurement As Value */}
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
            PROCUREMENT AS VALUE
          </div>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
            NEC vs FIDIC – What’s the real difference?
          </h1>
          <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-slate-800">
          <p>
            In major infrastructure and construction projects, contract strategy
            shapes behaviour, risk, collaboration, cost and ultimately, outcomes.
            Two of the most widely used contract suites globally are NEC and
            FIDIC, but they some important differences in philosophy and intent.
          </p>

          <p className="font-semibold">
            I’ve worked with both, so here’s my simple breakdown:
          </p>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xl font-bold text-amber-600">
              🔶 NEC (New Engineering Contract)
            </p>
            <p className="mt-3">
              NEC is built on proactive project management and collaboration. It
              drives early warning, risk sharing and transparency between all
              parties. The contract is written in plain English and encourages
              behaviours that prevent disputes rather than manage them later.
            </p>

            <p className="mt-4 font-semibold">Key traits:</p>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Focus on collaboration and communication</li>
              <li>Early warning / risk registers at the core</li>
              <li>Real-time project management tools</li>
              <li>Flexibility through modular options and schedules</li>
              <li>Designed to reduce claims and conflict</li>
            </ul>

            <p className="mt-4">
              It’s widely used across the UK and gaining momentum
              internationally, especially where project culture and integrated
              teams matter.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xl font-bold text-blue-600">
              🔷 FIDIC (International Federation of Consulting Engineers)
            </p>
            <p className="mt-3">
              FIDIC is more traditional and globally recognised. It provides
              clear roles, responsibilities and risk allocation in a structured
              and predictable way. It’s built around defined liabilities and
              contractual certainty, making it very strong for international
              contracting where clarity and legal robustness are essential.
            </p>

            <p className="mt-4 font-semibold">Key traits:</p>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>Traditional engineering contract structure</li>
              <li>Clear legal allocation of risk</li>
              <li>Strong global adoption</li>
              <li>Standardised forms across project types</li>
              <li>Command control governance model</li>
            </ul>

            <p className="mt-4">
              FIDIC tends to suit large cross-border engineering projects, where
              legal certainty, contractor clarity and defined responsibilities
              matter more than behavioural alignment.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xl font-bold">In summary:</p>
            <p className="mt-3">
              👉 <strong>NEC</strong> = collaborative, behavioural, transparent,
              project-management led.
              <br />
              👉 <strong>FIDIC</strong> = structured, traditional, legally
              defined, contract-law led.
            </p>
          </div>

          <p className="font-semibold">
            Both work. Both are proven. The choice isn’t about which contract is
            “best”, it’s about what outcome you want:
          </p>

          <p>
            Do you want collaboration and shared risk?
            <br />
            Or do you want clearly defined accountability and conventional risk
            transfer?
          </p>

          <p>
            The most successful organisations understand both, choose
            strategically and build supply chains that align people, culture and
            project objectives to the contract model.
          </p>

          <p className="font-semibold">
            What’s your experience? NEC or FIDIC and why? 👇
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
