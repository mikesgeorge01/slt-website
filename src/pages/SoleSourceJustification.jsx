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

export default function SoleSourceJustification() {
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
      <main className="mx-auto max-w-3xl px-4 py-14">
        <h1 className="text-4xl font-extrabold tracking-tight">
          What Does a Good Sole Source Justification Look Like in Procurement?
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          6 March 2026 • 5 min read
        </p>

        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-6 text-lg text-slate-600">
          Sole source awards are sometimes necessary, but they still require the
          same commercial rigour and challenge as a competitive tender.
        </p>

        <p className="mt-4 text-lg text-slate-600">
          In my experience, a sole source award must be subject to strict
          governance and must stand up to scrutiny, audit, and commercial sense.
        </p>

        <p className="mt-4 text-lg text-slate-600">
          Over the years, I’ve seen weak justifications that say little more
          than:
        </p>

        <p className="mt-4 text-lg font-semibold text-slate-800">
          “Only one supplier can do this.”
        </p>

        <p className="mt-4 text-lg text-slate-600">
          That’s not a justification — that’s an assertion.
        </p>

        <p className="mt-4 text-lg text-slate-600">
          A good sole source justification is structured, evidence-based and
          risk-focused. It clearly explains why competition is not viable and
          how value and controls are still protected.
        </p>

        <div className="mt-10 space-y-5">
          <SectionCard title="1️⃣ Clear Business Need">
            <p className="text-slate-600">
              Define the requirement in detail.
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>What exactly is being procured</Bullet>
              <Bullet>Why it is required now</Bullet>
              <Bullet>What happens if the award is delayed or not made</Bullet>
            </ul>

            <p className="mt-4 text-slate-600">
              Vague scope almost always leads to a weak justification.
            </p>
          </SectionCard>

          <SectionCard title="2️⃣ Objective Reason Competition Is Not Viable">
            <p className="text-slate-600">
              Examples may include:
            </p>

            <ul className="mt-4 space-y-2">
              <Bullet>Genuine technical exclusivity</Bullet>
              <Bullet>Intellectual property or proprietary technology</Bullet>
              <Bullet>OEM-only parts or services</Bullet>
              <Bullet>Safety or regulatory constraints</Bullet>
              <Bullet>Compatibility with installed systems</Bullet>
              <Bullet>Continuity of critical operations</Bullet>
              <Bullet>Extreme time-critical situations</Bullet>
            </ul>

            <p className="mt-4 text-slate-600">
              The key word is <span className="font-semibold">objective</span>.
              Preference or convenience is not a valid justification.
            </p>
          </SectionCard>

          <SectionCard title="3️⃣ Evidence of Supplier Uniqueness">
            <p className="text-slate-600">
              Support the claim with real evidence.
            </p>

            <ul className="mt-4 space-y-2">
              <Bullet>Market analysis summary</Bullet>
              <Bullet>Alternative suppliers considered and ruled out</Bullet>
              <Bullet>Technical authority confirmation</Bullet>
              <Bullet>Compatibility statements</Bullet>
              <Bullet>Regulatory or warranty constraints</Bullet>
            </ul>

            <p className="mt-4 text-slate-600">
              Show the reasoning — don’t just state the conclusion.
            </p>
          </SectionCard>

          <SectionCard title="4️⃣ Value-for-Money Protection Measures">
            <p className="text-slate-600">
              Even without competition, commercial rigour still applies.
            </p>

            <ul className="mt-4 space-y-2">
              <Bullet>Cost breakdowns</Bullet>
              <Bullet>Should-cost estimates</Bullet>
              <Bullet>Benchmark rates</Bullet>
              <Bullet>Market comparisons</Bullet>
              <Bullet>Prior pricing comparisons</Bullet>
              <Bullet>Negotiation outcomes</Bullet>
            </ul>

            <p className="mt-4 text-slate-600">
              No competition does not mean no challenge.
            </p>
          </SectionCard>

          <SectionCard title="5️⃣ Risk Assessment and Mitigation">
            <p className="text-slate-600">
              Sole sourcing introduces risks that must be understood and
              managed.
            </p>

            <ul className="mt-4 space-y-2">
              <Bullet>Supplier dependency</Bullet>
              <Bullet>Pricing power</Bullet>
              <Bullet>Delivery risk</Bullet>
              <Bullet>Long-term lock-in</Bullet>
            </ul>

            <p className="mt-4 text-slate-600">
              Strong justifications also document mitigation actions.
            </p>
          </SectionCard>

          <SectionCard title="6️⃣ Governance and Approvals">
            <p className="text-slate-600">
              A proper sole source justification is formally reviewed,
              approved, and recorded.
            </p>

            <p className="mt-4 text-slate-600">
              Governance protects both the organisation and the procurement
              function.
            </p>
          </SectionCard>

          <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-bold tracking-tight">My summary</h2>

            <p className="mt-3 text-slate-700">
              A good sole source justification should read like a commercial
              case, not a fait accompli.
            </p>

            <p className="mt-4 text-slate-700">
              If it wouldn’t stand up to audit or challenge, it isn’t strong
              enough.
            </p>

            <p className="mt-5 text-slate-700">
              <span className="font-semibold">
                Scars, Lessons and Triumphs (SLT) ⭐️
              </span>
              <br />
              A series of reflections from the procurement trenches.
            </p>

            <p className="mt-4 text-slate-700">
              👉🏽 Follow me for insights drawn from 25 years in procurement and
              over 38 years across global industry
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Procurement",
                "SupplyChain",
                "StrategicSourcing",
                "ValueCreation",
                "BusinessPartnering",
                "Leadership",
                "Innovation",
                "Sustainability",
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