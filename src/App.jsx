import MakeVsBuyProcurementHeartDecision from "./pages/MakeVsBuyProcurementHeartDecision";
import FiveSDisciplineOperationalExcellence from "./pages/FiveSDisciplineOperationalExcellence";
import React, { useMemo } from "react";
import { Routes, Route, Link } from "react-router-dom";

import OrganisationalPerformance from "./pages/OrganisationalPerformance";
import PersonalDevelopment from "./pages/PersonalDevelopment";
import ProcurementAsValue from "./pages/ProcurementAsValue";
import LeadershipThatInspires from "./pages/LeadershipThatInspires";

import TalentDevelopmentStrategy from "./pages/TalentDevelopmentStrategy";
import IdiotsGuideProcurement from "./pages/IdiotsGuideProcurement";
import HierarchyOfSuccess from "./pages/HierarchyOfSuccess";
import ControlTheControllables from "./pages/ControlTheControllables";
import IDontBelieveInRegrets from "./pages/IDontBelieveInRegrets";
import PowerPointWarriorProblem from "./pages/PowerPointWarriorProblem";
import RespectCostsNothing from "./pages/RespectCostsNothing";
import StrategicVsOperationalProcurement from "./pages/StrategicVsOperationalProcurement";
import HowToLeadWithoutKnowingEverything from "./pages/HowToLeadWithoutKnowingEverything";
import WhatILookForWhenInterviewingForTalent from "./pages/WhatILookForWhenInterviewingForTalent";
import StopThinkingItStartSayingIt from "./pages/StopThinkingItStartSayingIt";
import TheArtOfInfluencing from "./pages/TheArtOfInfluencing";
import DisciplineAboveEverythingElse from "./pages/DisciplineAboveEverythingElse";
import FallInLoveWithYourLife2026 from "./pages/FallInLoveWithYourLife2026";

import ProcurementBuiltOnTrust from "./pages/ProcurementBuiltOnTrust";
import NecVsFidic from "./pages/NecVsFidic";
import StrategicSourcingPitfalls from "./pages/StrategicSourcingPitfalls";
import SupplierReductionConsolidation from "./pages/SupplierReductionConsolidation";
import NecDesignedForCollaboration from "./pages/NecDesignedForCollaboration";

import WorkLifeBalanceLeadership from "./pages/WorkLifeBalanceLeadership";
import HighPerformingTeam from "./pages/HighPerformingTeam";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";

function NavLink({ to, children }) {
  return (
    <button
      type="button"
      onClick={() => {
        const el = document.getElementById(to);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
    >
      {children}
    </button>
  );
}

/** Fade-in on scroll (no libs) */
function useInView(options = { threshold: 0.15 }) {
  const [ref, setRef] = React.useState(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect(); // trigger once
      }
    }, options);

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options]);

  return [setRef, inView];
}

function FadeIn({ children, delayMs = 0 }) {
  const [setRef, inView] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={setRef}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function SLTTile({ title, children }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* animated accent line */}
      <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-amber-500 transition-transform duration-300 group-hover:scale-x-100" />

      <div className="relative">
        <div className="text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-slate-950">
          {title}
        </div>

        <p className="mt-2 text-sm text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
          {children}
        </p>
      </div>
    </div>
  );
}

function Home() {
  const year = useMemo(() => new Date().getFullYear(), []);

  const storyCards = [
    {
      title: "Organisational Performance",
      desc: "How to maximise performance through people, process and governance.",
      slug: "organisational-performance",
    },
    {
      title: "Personal Development",
      desc: "How to build your confidence, resilience, and stronger decision making under pressure.",
      slug: "personal-development",
    },
    {
      title: "Procurement as value",
      desc: "How to shift procurement from savings to value, and how to build stakeholder confidence",
      slug: "procurement-as-value",
    },
    {
      title: "Leadership that inspires",
      desc: "How to elevate your leadership and remain humble.",
      slug: "leadership-that-inspires",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="SLT logo" className="h-24 w-auto" />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold leading-tight">SLT</div>
              <div className="text-xs text-slate-500 leading-tight">
                Scars • Lessons • Triumphs
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="home">Home</NavLink>
            {/* UPDATED: About now targets About SLT section */}
            <NavLink to="about-slt">About</NavLink>
            <NavLink to="stories">Articles</NavLink>
            <NavLink to="speaking">Speaking</NavLink>
            <NavLink to="news">News</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </nav>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600 transition"
          >
            Connect on LinkedIn
          </a>
        </div>
      </header>

      {/* Hero (WHITE) */}
      <section id="home" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="grid items-center gap-10">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight leading-none sm:text-5xl">
                Scars. Lessons. <span className="slt-accent">Triumphs.</span>
              </h1>

              <div className="mt-4 h-1 w-20 rounded-full slt-accent-bg"></div>

              <div className="mt-5">
                <p className="text-lg font-semibold text-slate-800 leading-snug">
                  Real leadership stories from the frontline of procurement and
                  business.
                </p>

                <p className="mt-2 max-w-2xl text-sm text-slate-600 leading-relaxed">
                  Reflections, scars and hard-won insights for leaders navigating
                  complexity, pressure and change.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900">
                    Leadership
                  </span>
                  <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900">
                    Procurement
                  </span>
                  <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900">
                    Real Stories
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About SLT (GREY) */}
      <section
        id="about-slt"
        className="border-t border-slate-200 bg-slate-50 py-10 sm:py-12"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Left: Text */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight">About SLT</h2>

              <div className="mt-4 h-1 w-16 rounded-full slt-accent-bg"></div>

              <div className="mt-5 space-y-4 text-sm text-slate-600 leading-relaxed max-w-2xl">
                <p>
                  SLT was created to capture the lessons I’ve learned throughout
                  my career, the experiences that shaped the leader I am today,
                  and how I approach people, performance, and purpose.
                </p>

                <p>
                  <span className="font-semibold text-slate-800">
                    Scars, Lessons & Triumphs
                  </span>{" "}
                  is deliberately named, because it reflects the journey I’ve
                  lived: the wins I’m proud of, the failures that tested me, and
                  the moments in between that taught me the most.
                </p>

                <p>
                  I’ve been fortunate to work alongside brilliant leaders who
                  challenged my thinking, raised my standards, and helped shape
                  my values. Those hard-earned insights, combined with my own
                  experience, became the lessons that matter most.
                </p>

                <p>
                  So why share them? Because building a legacy matters. And
                  giving back matters.
                </p>

                <p>
                  SLT is my way of doing that, sharing real experiences to
                  support, challenge, and inspire others navigating their own
                  careers.
                  <span className="font-semibold text-slate-800">
                    {" "}
                    No fluff. No theory.
                  </span>{" "}
                  Just honest reflections from the trenches.
                </p>

                <p className="font-semibold text-slate-800">
                  I’ve learned the lessons the hard way, so you don’t have to.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/mike.jpg"
                  alt="Mike George"
                  className="h-[320px] w-[260px] rounded-3xl object-cover shadow-lg sm:h-[420px] sm:w-[340px]"
                />

                <div className="absolute bottom-3 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-lg shadow-amber-500/20">
                  <div className="text-sm font-semibold">Mike George</div>
                  <div className="text-xs text-slate-600 whitespace-nowrap">
                    Founder — Scars, Lessons & Triumphs
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Focus / Style / Intent tiles REMOVED */}
        </div>
      </section>

      {/* What SLT stands for (WHITE) */}
      <section id="about" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">
            What SLT stands for
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            SLT is about sharing real experiences from the trenches, lessons
            learned through pressure, mistakes, resilience, and wins.
          </p>

          {/* Animated tiles */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <FadeIn delayMs={0}>
              <SLTTile title="Scars">
                The moments that tested me. The hard calls. The failures I learned
                from.
              </SLTTile>
            </FadeIn>

            <FadeIn delayMs={120}>
              <SLTTile title="Lessons">
                The insight I earned: decision-making, influence, discipline,
                consistency.
              </SLTTile>
            </FadeIn>

            <FadeIn delayMs={240}>
              <SLTTile title="Triumphs">
                The outcomes: team success, business performance, and personal
                growth.
              </SLTTile>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Articles (GREY) */}
      <section id="stories" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Insights & Articles</h2>

          <p className="mt-4 max-w-3xl text-slate-600">
            My articles are organised into four pillars. Select a pillar and explore
            articles that will transform your leadership.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {storyCards.map((item) => (
              <Link
                key={item.slug}
                to={`/stories/${item.slug}`}
                className="block text-left rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-md transition"
              >
                <div className="text-sm font-semibold">{item.title}</div>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                <div className="mt-4 text-xs font-semibold text-amber-600">
                  Read more →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600 transition"
            >
              Read on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Speaking (WHITE) */}
      <section id="speaking" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Speaking</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            I am available for keynotes, leadership sessions, procurement
            transformation talks, and team workshops, all tailored to the audience
            and built to drive action.
          </p>

          {/* Speaking tiles styled like SLT tiles */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <FadeIn delayMs={0}>
              <SLTTile title="Leadership Standards">
                Respect, accountability, trust, and discipline, made practical.
              </SLTTile>
            </FadeIn>

            <FadeIn delayMs={120}>
              <SLTTile title="High-performing Teams">
                What ‘great’ looks like, and how to build it deliberately.
              </SLTTile>
            </FadeIn>

            <FadeIn delayMs={240}>
              <SLTTile title="Procurement Transformation">
                From transaction to strategic value, governance, outcomes, culture.
              </SLTTile>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* News (GREY) */}
      <section id="news" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">News</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Updates, reflections, and announcements from SLT, new thinking, recent
            talks, and moments worth sharing.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold">SLT launch</div>
              <p className="mt-2 text-sm text-slate-600">
                Scars, Lessons & Triumphs is now live, a platform for sharing
                leadership experience from the procurement front line.
              </p>
              <div className="mt-3 text-xs text-slate-500">January 2026</div>
            </div>

            <Link
              to="/stories/fall-in-love-with-your-life-2026"
              className="block rounded-3xl border border-slate-200 bg-white p-6 hover:shadow-md transition"
            >
              <div className="text-sm font-semibold">
                Fall in Love With Your Life 2026
              </div>
              <p className="mt-2 text-sm text-slate-600">
                20 simple habits that make a powerful difference, one day at a
                time.
              </p>
              <div className="mt-3 text-xs font-semibold text-amber-600">
                Read more →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact (WHITE) */}
      <section id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            For speaking, collaboration, or SLT conversations, message on LinkedIn
            or click the email button.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-600 transition"
            >
              Message on LinkedIn
            </a>

            <a
              href="mailto:mike@scarslessonstriumphs.com"
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 text-sm text-slate-600">
          <div>© {year} SLT — Scars, Lessons & Triumphs</div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/stories/organisational-performance"
        element={<OrganisationalPerformance />}
      />
      <Route
        path="/stories/personal-development"
        element={<PersonalDevelopment />}
      />
      <Route
        path="/stories/procurement-as-value"
        element={<ProcurementAsValue />}
      />
      <Route
        path="/stories/leadership-that-inspires"
        element={<LeadershipThatInspires />}
      />

      <Route
        path="/stories/talent-development-strategy"
        element={<TalentDevelopmentStrategy />}
      />
      <Route
        path="/stories/idiots-guide-procurement"
        element={<IdiotsGuideProcurement />}
      />
      <Route
        path="/stories/hierarchy-of-success"
        element={<HierarchyOfSuccess />}
      />
      <Route
        path="/stories/control-the-controllables"
        element={<ControlTheControllables />}
      />
      <Route
        path="/stories/i-dont-believe-in-regrets"
        element={<IDontBelieveInRegrets />}
      />
      <Route
        path="/stories/powerpoint-warrior-problem"
        element={<PowerPointWarriorProblem />}
      />
      <Route
        path="/stories/respect-costs-nothing"
        element={<RespectCostsNothing />}
      />
      <Route
        path="/stories/strategic-vs-operational-procurement"
        element={<StrategicVsOperationalProcurement />}
      />
      <Route
        path="/stories/how-to-lead-without-knowing-everything"
        element={<HowToLeadWithoutKnowingEverything />}
      />
      <Route
        path="/stories/what-i-look-for-when-interviewing-for-talent"
        element={<WhatILookForWhenInterviewingForTalent />}
      />
      <Route
        path="/stories/stop-thinking-it-start-saying-it"
        element={<StopThinkingItStartSayingIt />}
      />
      <Route
        path="/stories/the-art-of-influencing"
        element={<TheArtOfInfluencing />}
      />
      <Route
        path="/stories/discipline-above-everything-else"
        element={<DisciplineAboveEverythingElse />}
      />
      <Route
        path="/stories/fall-in-love-with-your-life-2026"
        element={<FallInLoveWithYourLife2026 />}
      />

      <Route
        path="/stories/procurement-as-value/procurement-built-on-trust"
        element={<ProcurementBuiltOnTrust />}
      />
      <Route
        path="/stories/procurement-as-value/nec-vs-fidic"
        element={<NecVsFidic />}
      />
      <Route
        path="/stories/procurement-as-value/strategic-sourcing-pitfalls"
        element={<StrategicSourcingPitfalls />}
      />
      <Route
        path="/stories/organisational-performance/work-life-balance-leadership"
        element={<WorkLifeBalanceLeadership />}
      />
      <Route
        path="/stories/organisational-performance/high-performing-team"
        element={<HighPerformingTeam />}
      />
      <Route
        path="/stories/procurement-as-value/supplier-reduction-consolidation"
        element={<SupplierReductionConsolidation />}
      />
      <Route
        path="/stories/procurement-as-value/nec-designed-for-collaboration"
        element={<NecDesignedForCollaboration />}
      />
      <Route
  path="/stories/organisational-performance/5s-discipline-operational-excellence"
  element={<FiveSDisciplineOperationalExcellence />}
/>
<Route
  path="/stories/procurement-as-value/make-vs-buy-procurement-heart-of-decision"
  element={<MakeVsBuyProcurementHeartDecision />}
/>
    </Routes>
  );
}
