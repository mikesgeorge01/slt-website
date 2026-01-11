import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Calendar,
  ChevronDown,
  ExternalLink,
  Flame,
  HeartHandshake,
  Linkedin,
  Mail,
  MessageSquare,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const LINKEDIN_URL = "https://linkedin.com/in/mikegeorge12";
const CONTACT_EMAIL = "mikegeorge.uk1@gmail.com";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("All");

  const nav = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "pillars", label: "Pillars" },
      { id: "stories", label: "Stories" },
      { id: "speaking", label: "Speaking" },
      { id: "resources", label: "Resources" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const storyTopics = ["All", "Leadership", "Procurement", "Mindset", "Teams", "Transformation"];

  const stories = useMemo(
    () => [
      {
        id: "s1",
        topic: "Leadership",
        title: "Respect is a leadership currency",
        excerpt:
          "Relationships are built in conversation—respect keeps the door open even when you disagree.",
        time: "3 min",
        icon: HeartHandshake,
      },
      {
        id: "s2",
        topic: "Procurement",
        title: "Procurement isn’t for the masses",
        excerpt: "Skills can be taught—pressure, influence, and resilience are earned.",
        time: "4 min",
        icon: ShieldCheck,
      },
      {
        id: "s3",
        topic: "Transformation",
        title: "From savings to value",
        excerpt: "Risk, delivery, local content, and total cost—value is bigger than a %.",
        time: "5 min",
        icon: TrendingUp,
      },
      {
        id: "s4",
        topic: "Teams",
        title: "Business → Team → Individual",
        excerpt: "When the business wins through the team, individual success becomes inevitable.",
        time: "4 min",
        icon: Users,
      },
      {
        id: "s5",
        topic: "Mindset",
        title: "No regrets—only reps",
        excerpt: "Every decision is made with what we know then. Learn fast. Move forward.",
        time: "3 min",
        icon: Flame,
      },
      {
        id: "s6",
        topic: "Procurement",
        title: "The PowerPoint warrior trap",
        excerpt: "Slides can shrink context and limit real conversation—people need dialogue.",
        time: "4 min",
        icon: MessageSquare,
      },
    ],
    []
  );

  const filteredStories = useMemo(() => {
    const q = search.trim().toLowerCase();
    return stories
      .filter((s) => (topic === "All" ? true : s.topic === topic))
      .filter((s) => (!q ? true : `${s.title} ${s.excerpt} ${s.topic}`.toLowerCase().includes(q)));
  }, [stories, search, topic]);

  const speaking = useMemo(
    () => [
      {
        title: "Procurement as a Strategic Weapon",
        bullets: [
          "Turning ‘cost’ conversations into ‘value’ outcomes",
          "Influence without authority",
          "A practical playbook your team can use Monday morning",
        ],
        icon: Target,
      },
      {
        title: "High-Performance Teams Under Pressure",
        bullets: [
          "Discipline and consistency as an operating system",
          "Culture, accountability, and trust",
          "Sustain delivery without burning out",
        ],
        icon: TrendingUp,
      },
      {
        title: "Scars, Lessons & Triumphs (Keynote)",
        bullets: [
          "Real stories—what worked, what didn’t, what I learned",
          "Leading through conflict and ambiguity",
          "Building credibility when it matters most",
        ],
        icon: Sparkles,
      },
    ],
    []
  );

  useEffect(() => {
    const ids = nav.map((n) => n.id);
    const handler = () => {
      const y = window.scrollY;
      let current = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop - 120;
        if (y >= top) current = id;
      }
      setActiveSection(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [nav]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileNavOpen(false);
  };

  const onNewsletter = (e) => {
    e.preventDefault();
    // Demo only – hook to Mailchimp/ConvertKit/etc.
    setNewsletterEmail("");
    alert("Subscribed (demo). We can wire this to your email tool next.");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 rounded-2xl px-2 py-1"
            aria-label="Go to home"
          >
            <img src="/logo.png" alt="SLT logo" className="h-10 w-auto" />
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const active = item.id === activeSection;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={
                    "rounded-2xl px-3 py-2 text-sm transition " +
                    (active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100")
                  }
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("contact");
              }}
              className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:opacity-95"
            >
              Work with SLT <ArrowRight className="h-4 w-4" />
            </a>

            <button
              onClick={() => setMobileNavOpen((v) => !v)}
              className="md:hidden inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
            >
              Menu{" "}
              <ChevronDown className={"h-4 w-4 transition " + (mobileNavOpen ? "rotate-180" : "")} />
            </button>
          </div>
        </div>

        {mobileNavOpen && (
          <div id="mobile-nav" className="md:hidden border-t border-slate-200/60 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-3">
              <div className="grid grid-cols-2 gap-2">
                {nav.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="rounded-2xl border border-slate-200 px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-24 left-1/2 h-72 w-[38rem] -translate-x-1/2 rounded-full bg-slate-100 blur-3xl" />
            <div className="absolute -bottom-28 right-[-6rem] h-72 w-[34rem] rounded-full bg-slate-100 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
                  <BadgeCheck className="h-4 w-4" />
                  <span>Brand-led leadership & procurement stories</span>
                </div>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Scars, Lessons &amp; Triumphs
                </h1>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  Real-world leadership and procurement insights — built for impact, not applause.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollTo("stories")}
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-95"
                  >
                    Explore stories <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => scrollTo("speaking")}
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    Speaking <Calendar className="h-4 w-4" />
                  </button>

                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    Follow on LinkedIn <Linkedin className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <MiniStat icon={Users} label="Community" value="Leaders & doers" />
                  <MiniStat icon={ShieldCheck} label="Standards" value="Ethics + delivery" />
                  <MiniStat icon={BookOpen} label="Stories" value="Scars → lessons" />
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">Featured idea</div>
                    <div className="text-sm text-slate-500">Your next 10 minutes</div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-slate-50 p-5">
                  <div className="flex items-start gap-3">
                    <Quote className="mt-1 h-5 w-5 text-slate-700" />
                    <div>
                      <p className="text-sm leading-6 text-slate-700">
                        “If procurement is only invited to talk price, you’ve already lost half the value.”
                      </p>
                      <p className="mt-2 text-xs text-slate-500">— SLT principle: value &gt; savings</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-sm font-semibold">Newsletter</div>
                  <p className="mt-1 text-sm text-slate-600">One email. One lesson. One action.</p>
                  <form onSubmit={onNewsletter} className="mt-3 flex gap-2">
                    <input
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:border-slate-400"
                    />
                    <button
                      className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:opacity-95"
                      type="submit"
                    >
                      Join <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                  <p className="mt-2 text-xs text-slate-500">Demo form (we can wire it later).</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-slate-200/60">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">What SLT is</h2>
                <p className="mt-3 text-slate-600 leading-7">
                  SLT is a story-led platform built on lived experience—what scars taught, what lessons
                  changed, and what triumphs proved. It’s for leaders and procurement professionals who want
                  clarity, accountability, and results.
                </p>

                <div className="mt-6 grid gap-3">
                  <InfoRow
                    icon={ShieldCheck}
                    title="Truth over theatre"
                    desc="No fluff. No buzzwords. Real conversations about what actually works."
                  />
                  <InfoRow
                    icon={Target}
                    title="Practical action"
                    desc="Stories are useful only if they change behaviours and outcomes."
                  />
                  <InfoRow
                    icon={Users}
                    title="Community"
                    desc="Built for people who care about delivery, trust, and standards."
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">The SLT mission</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      A simple promise: help people lead better, deliver more, and raise standards.
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <BookOpen className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm leading-7 text-slate-700">
                    SLT is built on the belief that credibility is earned in pressure moments. It’s where lessons
                    from hard decisions become clear actions people can apply immediately.
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button
                    onClick={() => scrollTo("contact")}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:opacity-95"
                  >
                    Contact <Mail className="h-4 w-4" />
                  </button>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    LinkedIn <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section id="pillars" className="border-t border-slate-200/60 bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="text-2xl font-semibold tracking-tight">The SLT pillars</h2>
            <p className="mt-2 text-slate-600">A simple framework for decisions, behaviours, and outcomes.</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Pillar
                icon={ShieldCheck}
                title="Standards"
                desc="Do the right thing. Hold the line. Raise the bar."
              />
              <Pillar
                icon={HeartHandshake}
                title="Relationships"
                desc="Respect is non-negotiable. Trust is earned."
              />
              <Pillar
                icon={TrendingUp}
                title="Value"
                desc="Savings is a metric. Value is the outcome."
              />
              <Pillar
                icon={Flame}
                title="Discipline"
                desc="Consistency beats intensity—every single time."
              />
            </div>
          </div>
        </section>

        {/* Stories */}
        <section id="stories" className="border-t border-slate-200/60">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Stories</h2>
                <p className="mt-2 text-slate-600">
                  Short reads designed to change how you think, lead, and deliver.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search…"
                    className="w-64 max-w-full rounded-2xl border border-slate-200 bg-white pl-9 pr-3 py-2 text-sm outline-none focus:border-slate-400"
                  />
                </div>

                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-slate-400"
                >
                  {storyTopics.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredStories.map((s) => (
                <StoryCard key={s.id} story={s} />
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Next step: we can link each story to a Substack/Medium/blog page.
            </p>
          </div>
        </section>

        {/* Speaking */}
        <section id="speaking" className="border-t border-slate-200/60 bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Speaking & workshops</h2>
                <p className="mt-2 text-slate-600">
                  Keynotes, panels, and practical sessions tailored to your audience.
                </p>
              </div>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-95"
              >
                Enquire <Mail className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {speaking.map((s) => (
                <div key={s.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold">{s.title}</div>
                      <div className="mt-1 text-sm text-slate-600">
                        Designed for leaders, procurement, and delivery teams.
                      </div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                      <s.icon className="h-5 w-5" />
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                        <span className="leading-6">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => scrollTo("contact")}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    Request this session <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="border-t border-slate-200/60">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="text-2xl font-semibold tracking-tight">Resources</h2>
            <p className="mt-2 text-slate-600">Templates and tools (placeholders we can replace).</p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Resource
                icon={BookOpen}
                title="SLT Story Template"
                desc="Context → tension → decision → lesson → action."
              />
              <Resource
                icon={ShieldCheck}
                title="Ethical Procurement Checklist"
                desc="A quick pre-award sanity check for pressure moments."
              />
              <Resource
                icon={TrendingUp}
                title="Value Beyond Savings"
                desc="A simple scoreboard: risk, delivery, quality, TCO."
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-slate-200/60 bg-slate-50/40">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-slate-600">For speaking, workshops, collaboration, or partnership.</p>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="mt-1 text-lg font-semibold">{CONTACT_EMAIL}</div>
                    <p className="mt-2 text-sm text-slate-600">Click to email SLT.</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:opacity-95"
                >
                  Email SLT <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-slate-500">LinkedIn</div>
                    <div className="mt-1 text-lg font-semibold">Follow / DM</div>
                    <p className="mt-2 text-sm text-slate-600">Updates and daily leadership stories.</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Linkedin className="h-5 w-5" />
                  </div>
                </div>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
                >
                  Open LinkedIn <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-slate-500">Next upgrade</div>
                    <div className="mt-1 text-lg font-semibold">Domain + email capture</div>
                    <p className="mt-2 text-sm text-slate-600">
                      We can connect a domain and wire the newsletter to a real tool.
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <button
                  onClick={() => alert("Next: buy a domain + connect to Vercel.")}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
                >
                  Plan next steps <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <footer className="mt-10 text-xs text-slate-500">
              © {new Date().getFullYear()} SLT — Scars, Lessons &amp; Triumphs
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

function MiniStat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-xs text-slate-500">{label}</div>
        <Icon className="h-4 w-4 text-slate-600" />
      </div>
      <div className="mt-2 text-sm font-semibold">{value}</div>
    </div>
  );
}

function InfoRow({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="mt-1 text-sm text-slate-600 leading-6">{desc}</div>
      </div>
    </div>
  );
}

function Pillar({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="mt-1 text-sm text-slate-600 leading-6">{desc}</div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function StoryCard({ story }) {
  const Icon = story.icon;
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
        <Icon className="h-4 w-4" />
        {story.topic}
      </div>
      <div className="mt-3 text-lg font-semibold leading-snug">{story.title}</div>
      <div className="mt-2 text-sm text-slate-600 leading-6">{story.excerpt}</div>
      <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
        <span>{story.time} read</span>
        <button
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
          onClick={() => alert("Next: link stories to a blog page or Substack.")}
        >
          Read <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Resource({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="mt-2 text-sm text-slate-600 leading-6">{desc}</div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <button
        onClick={() => alert("Next: wire this to a PDF download or Notion page.")}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
      >
        View <ExternalLink className="h-4 w-4" />
      </button>
    </div>
  );
}
