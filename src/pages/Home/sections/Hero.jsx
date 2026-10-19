export default function Hero() {
  return (
    <section className="px-6 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* Hero Content */}
        <div className="max-w-2xl">
          <span className="font-accent mb-6 inline-block rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300">
            Build consistency. Track progress.
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
            Build Consistency.
            <span className="font-editorial block text-black">
              Complete Your Goals.
            </span>
          </h1>

          <p className="font-body mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Create your goals, track your progress, and visualize your journey.
            See where you're losing consistency so you know what to improve
            and stay on track toward completion.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="font-display rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400">
              Create Your Goal
            </button>

            <button className="font-body rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:bg-slate-900">
              See How It Works
            </button>
          </div>
        </div>

        {/* Product Preview */}
        <div className="relative">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">

            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-accent text-sm text-slate-500">Current Goal</p>
                <h2 className="font-display mt-1 text-lg font-semibold text-slate-900">
                  Learn Java
                </h2>
              </div>

              <span className="font-body rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                On Track
              </span>
            </div>

            {/* Progress */}
            <div className="mt-8">
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-body text-slate-500">Progress</span>
                <span className="font-accent font-semibold text-slate-900">82%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[82%] rounded-full bg-slate-700" />
              </div>
            </div>

            {/* Consistency */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="font-body text-sm text-slate-500">
                  Weekly Consistency
                </p>

                <p className="font-accent text-sm font-semibold text-slate-900">
                  86%
                </p>
              </div>

              <div className="mt-4 grid grid-cols-7 gap-2">
                <div className="h-10 rounded-md bg-slate-500" />
                <div className="h-10 rounded-md bg-slate-500" />
                <div className="h-10 rounded-md bg-slate-500" />
                <div className="h-10 rounded-md bg-slate-500" />
                <div className="h-10 rounded-md bg-slate-100" />
                <div className="h-10 rounded-md bg-slate-500" />
                <div className="h-10 rounded-md bg-slate-500" />
              </div>
            </div>

            {/* Insight */}
            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="font-display text-sm font-medium text-amber-700">
                Consistency Insight
              </p>

              <p className="font-body mt-1 text-sm leading-6 text-slate-600">
                You missed 1 day this week. Stay consistent to maintain your
                current progress.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}