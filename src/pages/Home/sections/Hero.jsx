import heroImage from "../../../assets/Hero_section.png";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden bg-slate-50 px-6 py-20 sm:py-24 lg:flex lg:items-center lg:py-28">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="hero-image pointer-events-none absolute bottom-0 left-0 h-[48%] w-full object-contain object-bottom opacity-70 sm:h-[55%] lg:inset-0 lg:h-full lg:object-right lg:opacity-100"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl pb-[42vh] sm:pb-[40vh] lg:pb-0">
        <div className="max-w-xl">
          <span className="font-accent mb-6 inline-block rounded-full border border-indigo-200 bg-white/90 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
            Build consistency. Track progress.
          </span>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Build Consistency.
            <span className="font-editorial block text-indigo-700">
              Complete Your Goals.
            </span>
          </h1>

          <p className="font-body mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Create your goals, track your progress, and visualize your journey.
            See where you're losing consistency so you know what to improve
            and stay on track toward completion.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="font-display rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700">
              Create Your Goal
            </button>

            <button className="font-body rounded-lg border border-slate-300 bg-white/90 px-6 py-3 font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-white hover:text-indigo-700">
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
