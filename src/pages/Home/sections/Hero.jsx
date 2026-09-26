export default function Hero() {
  return (
    <section className="px-6 py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* Hero Content */}
        <div className="max-w-2xl">
          <span className="mb-6 inline-block rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300">
            Build consistency. Track progress.
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build Consistency.
            <span className="block text-indigo-400">
              Complete Your Goals.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Create your goals, track your progress, and visualize your journey.
            See where you're losing consistency so you know what to improve
            and stay on track toward completion.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400">
              Create Your Goal
            </button>

            <button className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:bg-slate-900">
              See How It Works
            </button>
          </div>
        </div>

        {/* Product Preview */}
        <div className="relative">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">

            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Current Goal</p>
                <h2 className="mt-1 text-lg font-semibold text-white">
                  Learn Java
                </h2>
              </div>

              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                On Track
              </span>
            </div>

            {/* Progress */}
            <div className="mt-8">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-400">Progress</span>
                <span className="font-semibold text-white">82%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[82%] rounded-full bg-indigo-500" />
              </div>
            </div>

            {/* Consistency */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">
                  Weekly Consistency
                </p>

                <p className="text-sm font-semibold text-white">
                  86%
                </p>
              </div>

              <div className="mt-4 grid grid-cols-7 gap-2">
                <div className="h-10 rounded-md bg-indigo-500" />
                <div className="h-10 rounded-md bg-indigo-500" />
                <div className="h-10 rounded-md bg-indigo-500" />
                <div className="h-10 rounded-md bg-indigo-500" />
                <div className="h-10 rounded-md bg-slate-800" />
                <div className="h-10 rounded-md bg-indigo-500" />
                <div className="h-10 rounded-md bg-indigo-500" />
              </div>
            </div>

            {/* Insight */}
            <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <p className="text-sm font-medium text-amber-400">
                Consistency Insight
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-400">
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