const steps = [
  {
    number: "01",
    title: "Create Your Goals",
    description:
      "Define what you want to achieve and establish a clear direction for your efforts.",
    visual: "goals",
    visualLabel: "Illustrative goal dashboard with active goals and progress indicators",
  },
  {
    number: "02",
    title: "Connect Supported Coding Activity",
    description:
      "Where supported, connect developer accounts to bring coding activity into your goal execution workflow.",
    visual: "integrations",
    visualLabel:
      "Illustrative ProofTracker dashboard connected to GitHub and LeetCode activity cards",
  },
  {
    number: "03",
    title: "Submit and Collect Proof",
    description:
      "Record completed work and build an evidence-based history of your efforts.",
    visual: "proof",
    visualLabel:
      "Illustrative proof record with evidence details, timestamp, source, and status",
  },
  {
    number: "04",
    title: "Monitor Consistency and Decay",
    description:
      "Understand how your consistency changes over time and recognize when your execution starts weakening.",
    visual: "consistency",
    visualLabel:
      "Illustrative consistency timeline showing activity, a missed period, and recovery",
  },
  {
    number: "05",
    title: "Review Risks and AI Guidance",
    description:
      "Use illustrative risk insights and AI Coach guidance to explore what you could improve next.",
    visual: "risk",
    visualLabel:
      "Illustrative goal health panel with a risk indicator and AI Coach next-action recommendation",
  },
  {
    number: "06",
    title: "Track Measurable Progress",
    description:
      "Review your recorded proof, goal progress, consistency history, and available insights to understand how your efforts are translating into progress.",
    visual: "analytics",
    visualLabel:
      "Illustrative analytics dashboard combining goal progress, proof history, consistency, and risk insights",
  },
];

function MiniIcon({ children }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
      {children}
    </span>
  );
}

function StepVisual({ type, label }) {
  if (type === "goals") {
    return (
      <div className="space-y-4" aria-label={label} role="img">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2.5 w-24 rounded-full bg-slate-800" />
            <div className="mt-2 h-2 w-16 rounded-full bg-slate-200" />
          </div>
          <span className="rounded-lg bg-indigo-600 px-3 py-2 text-xs font-semibold text-white">
            + New goal
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            ["Learn system design", "68%", "bg-indigo-500"],
            ["Build portfolio", "42%", "bg-emerald-500"],
          ].map(([name, progress, color]) => (
            <div key={name} className="rounded-xl border border-slate-200 bg-white p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-700">{name}</span>
                <span className="text-[10px] font-medium text-slate-400">{progress}</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-100">
                <div className={`h-2 w-2/3 rounded-full ${color}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50/60 p-3">
          <MiniIcon>
            <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5v14" />
            </svg>
          </MiniIcon>
          <span className="text-xs text-slate-600">Turn an intention into a trackable outcome.</span>
        </div>
      </div>
    );
  }

  if (type === "integrations") {
    return (
      <div className="relative flex min-h-48 items-center justify-center" aria-label={label} role="img">
        <div className="absolute left-1/2 top-1/2 h-px w-44 -translate-x-1/2 -translate-y-1/2 bg-indigo-200" />
        <div className="relative z-10 rounded-2xl border border-indigo-200 bg-white p-4 text-center shadow-lg shadow-indigo-950/5">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white">P</div>
          <p className="mt-2 text-xs font-semibold text-slate-800">ProofTracker</p>
          <span className="mt-2 inline-flex items-center gap-1 text-[10px] text-emerald-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Synced
          </span>
        </div>
        <div className="absolute left-2 top-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">GH</span>
            <div>
              <p className="text-xs font-semibold text-slate-700">GitHub</p>
              <p className="text-[10px] text-slate-400">Repository activity</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-xs font-bold text-amber-700">LC</span>
            <div>
              <p className="text-xs font-semibold text-slate-700">LeetCode</p>
              <p className="text-[10px] text-slate-400">Coding submissions</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "proof") {
    return (
      <div className="space-y-3" aria-label={label} role="img">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-28 rounded-full bg-slate-800" />
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">Recorded</span>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <MiniIcon>
              <svg aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 16 4.5-4.5 3 3L16 10l4 4M5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1Z" />
              </svg>
            </MiniIcon>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-slate-800">Completed API module</p>
              <p className="mt-1 text-[10px] text-slate-400">Added evidence · Today, 10:42 AM</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
            <span className="text-[10px] text-slate-500">Source: Manual record</span>
            <span className="text-[10px] font-medium text-indigo-600">View proof →</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="h-2 flex-1 rounded-full bg-indigo-100" />
          <div className="h-2 w-16 rounded-full bg-slate-100" />
        </div>
      </div>
    );
  }

  if (type === "consistency") {
    return (
      <div aria-label={label} role="img">
        <div className="flex items-start justify-between">
          <div>
            <div className="h-2.5 w-32 rounded-full bg-slate-800" />
            <div className="mt-2 h-2 w-24 rounded-full bg-slate-200" />
          </div>
          <span className="rounded-lg bg-amber-50 px-2.5 py-1.5 text-[10px] font-semibold text-amber-700">Needs attention</span>
        </div>
        <div className="mt-7 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex h-28 items-end gap-2 border-b border-l border-slate-200 px-2 pb-2">
            {[80, 88, 70, 58, 44, 51, 67].map((height, index) => (
              <div key={`${height}-${index}`} className="relative flex-1">
                <div className={`absolute bottom-0 w-full rounded-t-md ${index === 4 ? "bg-amber-300" : "bg-indigo-200"}`} style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
            <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 text-[10px] text-emerald-600">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Recovery trend detected
        </div>
      </div>
    );
  }

  if (type === "risk") {
    return (
      <div className="space-y-3" aria-label={label} role="img">
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-28 rounded-full bg-slate-800" />
          <span className="flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-semibold text-rose-600">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> At risk
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-3">
            <p className="text-[10px] font-medium text-rose-500">Goal health</p>
            <p className="mt-2 text-2xl font-bold text-slate-800">62%</p>
            <div className="mt-2 h-1.5 rounded-full bg-rose-100"><div className="h-1.5 w-3/5 rounded-full bg-rose-400" /></div>
          </div>
          <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-3">
            <p className="text-[10px] font-medium text-indigo-600">AI Coach</p>
            <p className="mt-2 text-xs font-semibold leading-5 text-slate-700">Schedule one focused session next.</p>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3 text-[10px] text-slate-500">
          Risk insight helps prioritize your next action.
        </div>
      </div>
    );
  }

  return (
    <div aria-label={label} role="img">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-2.5 w-32 rounded-full bg-slate-800" />
          <div className="mt-2 h-2 w-20 rounded-full bg-slate-200" />
        </div>
        <span className="text-2xl font-bold text-indigo-600">78%</span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] text-slate-400">Proof history</p>
          <div className="mt-4 flex items-end gap-1">
            {[35, 55, 45, 72, 64, 86].map((height, index) => (
              <div key={`${height}-${index}`} className="flex-1 rounded-t bg-indigo-300" style={{ height: `${height}px` }} />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-3">
          <p className="text-[10px] text-slate-400">Goal progress</p>
          <div className="mx-auto mt-3 h-16 w-16 rounded-full border-[10px] border-indigo-100 border-t-indigo-600 border-r-indigo-500" />
          <p className="mt-2 text-center text-[10px] font-semibold text-slate-600">On track</p>
        </div>
      </div>
    </div>
  );
}

function WorkflowStep({ step, index }) {
  const copyOrder = index % 2 === 0 ? "order-2 lg:order-1" : "order-2 lg:order-2";
  const visualOrder = index % 2 === 0 ? "order-1 lg:order-2" : "order-1 lg:order-1";

  return (
    <article className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
      <div className={copyOrder}>
        <div className="flex items-center gap-3">
          <span className="font-accent text-sm font-semibold tracking-[0.16em] text-indigo-600">STEP {step.number}</span>
          <span className="h-px w-10 bg-indigo-200" />
        </div>
        <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          {step.title}
        </h3>
        <p className="font-body mt-4 max-w-md text-base leading-7 text-slate-600">
          {step.description}
        </p>
      </div>
      <div className={`rounded-3xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5 sm:p-7 ${visualOrder}`}>
        <StepVisual type={step.visual} label={step.visualLabel} />
      </div>
      {index < steps.length - 1 && (
        <div aria-hidden="true" className="absolute -bottom-8 left-1/2 hidden h-16 w-px bg-indigo-200 lg:block">
          <span className="absolute -bottom-1 -left-1.5 h-3 w-3 rotate-45 border-b border-r border-indigo-300 bg-white" />
        </div>
      )}
    </article>
  );
}

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-accent text-sm font-medium tracking-[0.2em] text-indigo-600">
            HOW PROOFTRACKER WORKS
          </p>
          <h2
            id="how-it-works-heading"
            className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            From Ambition to Evidence. From Evidence to Progress.
          </h2>
          <p className="font-body mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Turn your goals into measurable progress. Connect your development
            activity, record your proof, understand your consistency, and get
            AI-powered guidance to stay on track.
          </p>
        </header>

        <div className="relative mx-auto mt-14 max-w-5xl space-y-12 lg:mt-20 lg:space-y-16">
          {steps.map((step, index) => (
            <WorkflowStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
