export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center px-4 py-4">
          <img
            src="/logo.png"
            alt="SLT logo"
            className="h-10 w-auto"
          />
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-4 py-20">
        <h1 className="text-4xl font-semibold tracking-tight">
          Scars, Lessons &amp; Triumphs
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Real-world leadership and procurement stories — earned through experience,
          pressure, and delivery.
        </p>

        <p className="mt-8 text-sm text-slate-500">
          Website build in progress.
        </p>
      </main>
    </div>
  );
}
