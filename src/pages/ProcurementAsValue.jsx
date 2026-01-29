import React from "react";
import { Link } from "react-router-dom";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

export default function ProcurementAsValue() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Simple Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo1.png" alt="SLT logo" className="h-14 w-auto" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-tight">SLT</div>
              <div className="text-xs text-slate-500 leading-tight">
                Scars • Lessons • Triumphs
              </div>
            </div>
          </Link>

          {/* Header Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
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
          Procurement As Value
        </h1>
        <div className="mt-4 h-1 w-20 rounded-full bg-amber-500"></div>

        <p className="mt-6 max-w-3xl text-lg text-slate-600">
          Calm, accountability, and standards when it gets uncomfortable.
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link
            to="/stories/idiots-guide-procurement"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
          >
            <div className="text-sm font-semibold">
              My “Idiot’s Guide” to Procurement (No Fluff Edition)
            </div>
            <div className="mt-2 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          <Link
            to="/stories/strategic-vs-operational-procurement"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
          >
            <div className="text-sm font-semibold">
              Strategic vs Operational Procurement (why both matter)
            </div>
            <div className="mt-2 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          <Link
            to="/stories/procurement-as-value/procurement-built-on-trust"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
          >
            <div className="text-sm font-semibold">
              Procurement is built on trust, and trust is built on ethics.
            </div>
            <div className="mt-2 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          <Link
            to="/stories/procurement-as-value/nec-vs-fidic"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
          >
            <div className="text-sm font-semibold">
              NEC vs FIDIC – What’s the real difference?
            </div>
            <div className="mt-2 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          <Link
            to="/stories/procurement-as-value/strategic-sourcing-pitfalls"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
          >
            <div className="text-sm font-semibold">
              The Pitfalls to Look Out For in Strategic Sourcing
            </div>
            <div className="mt-2 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          <Link
            to="/stories/procurement-as-value/supplier-reduction-consolidation"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
          >
            <div className="text-sm font-semibold">
              Supplier Reduction &amp; Consolidation
            </div>
            <div className="mt-2 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          <Link
            to="/stories/procurement-as-value/nec-designed-for-collaboration"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
          >
            <div className="text-sm font-semibold">
              NEC Contracting: Designed for Collaboration
            </div>
            <div className="mt-2 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          <Link
            to="/stories/procurement-as-value/make-vs-buy-procurement-heart-of-decision"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
          >
            <div className="text-sm font-semibold">
              Make vs Buy: Why Procurement sits at the heart of the decision
            </div>
            <div className="mt-2 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          {/* ✅ NEW ARTICLE */}
          <Link
            to="/stories/procurement-as-value/why-procurement-governance-is-a-non-negotiable"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
          >
            <div className="text-sm font-semibold">
              Why Procurement Governance Is a Non-Negotiable
            </div>
            <div className="mt-2 text-xs font-semibold text-amber-600">
              Read more →
            </div>
          </Link>

          <Link
  to="/stories/procurement-as-value/the-true-cost-of-maverick-spend"
  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition block"
>
  <div className="text-sm font-semibold">
    The True Cost of Maverick Spend (and how to reduce it)
  </div>
  <div className="mt-2 text-xs font-semibold text-amber-600">
    Read more →
  </div>
</Link>
        </div>
      </div>
    </div>
  );
}
