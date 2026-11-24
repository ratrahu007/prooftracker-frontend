const principles = [
  {
    title: "Evidence Over Assumptions",
    description: "Connect progress to recorded proof of completed work.",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m6 12 4 4 8-8M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
  {
    title: "Consistency Over Motivation",
    description: "Make execution patterns easier to review over time.",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 19V5m0 14h16M8 16v-3m4 3V8m4 8v-6" />
      </svg>
    ),
  },
  {
    title: "Insight Into Action",
    description: "Use available insights to identify practical next steps.",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v18m9-9H3m14.5-6.5L7 16m10 1.5L7 6.5" />
      </svg>
    ),
  },
];

function DashboardIllustration() {
  return (
    <div
      role="img"
      aria-label="Illustrative ProofTracker dashboard with goals, proof records, consistency trends, and an AI recommendation"
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-xl shadow-indigo-950/5 sm:p-6"
    >
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-indigo-100/60 blur-3xl" />
      <div className="relative rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <div className="h-2.5 w-28 rounded-full bg-slate-800" />
            <div className="mt-2 h-2 w-20 rounded-full bg-slate-200" />
          </div>
          <span className="rounded-lg bg-indigo-50 px-3 py-2 text-[10px] font-semibold text-indigo-600">
            Overview
          </span>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-xl border border-slate-200 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-400">Active goals</span>
              <span className="text-[10px] font-semibold text-emerald-600">On track</span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                ["Build portfolio", "74%", "bg-indigo-500"],
                ["Learn system design", "52%", "bg-emerald-500"],
                ["Ship weekly", "38%", "bg-amber-400"],
              ].map(([name, value, color]) => (
                <div key={name}>
                  <div className="flex justify-between text-[10px] text-slate-600">
                    <span>{name}</span><span>{value}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-slate-100">
                    <div className={`h-1.5 rounded-full ${color}`} style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-3">
            <span className="text-[10px] font-medium text-slate-400">Consistency trend</span>
            <div className="mt-4 flex h-20 items-end gap-1.5">
              {[42, 58, 50, 66, 61, 78, 84].map((height, index) => (
                <div key={`${height}-${index}`} className="flex-1 rounded-t bg-indigo-200" style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[10px] text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Improving
            </div>
          </div>
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-400">Recent proof</span>
              <span className="text-[10px] text-indigo-600">View all</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 12 4 4L19 6" />
                </svg>
              </span>
              <div>
                <p className="text-[10px] font-semibold text-slate-700">API module complete</p>
                <p className="text-[9px] text-slate-400">Recorded today</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-[10px] font-bold text-white">AI</span>
              <span className="text-[10px] font-semibold text-indigo-700">AI Coach</span>
            </div>
            <p className="mt-3 text-xs font-semibold leading-5 text-slate-700">
              Focus on one small action to keep this goal moving.
            </p>
          </div>
        </div>
        <p className="mt-4 text-center text-[9px] text-slate-400">
          Illustrative dashboard data
        </p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-section-heading"
      className="bg-slate-50 px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="font-accent text-sm font-medium tracking-[0.2em] text-indigo-600">
            ABOUT PROOFTRACKER
          </p>
          <h2
            id="about-section-heading"
            className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Progress Should Be Proven, Not Just Promised.
          </h2>
          <div className="font-body mt-6 space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Goals are easy to set, but consistent execution is harder to
              maintain. ProofTracker is built around a simple idea: meaningful
              progress should be supported by evidence.
            </p>
            <p>
              By bringing goals, proof of work, consistency insights, risk
              awareness, and AI-powered guidance into one place, ProofTracker
              helps you understand what you&apos;re doing, where you&apos;re
              falling behind, and what you can improve next.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition duration-200 hover:border-indigo-200 hover:shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  {principle.icon}
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-slate-900">
                    {principle.title}
                  </h3>
                  <p className="font-body mt-1 text-sm leading-6 text-slate-600">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#how-it-works-heading"
            className="font-display mt-8 inline-flex items-center rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Start proving your progress
            <span aria-hidden="true" className="ml-2">→</span>
          </a>
        </div>

        <DashboardIllustration />
      </div>
    </section>
  );
}
