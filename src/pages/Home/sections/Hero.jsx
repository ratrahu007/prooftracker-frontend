
import heroImage from "../../../assets/Hero_img.png";

export default function Hero() {
  return (
    
<section id="home" className="relative isolate grid min-h-[calc(100vh-4rem)] items-center gap-8 overflow-hidden bg-white px-6 pt-6 pb-12 sm:px-8 sm:pt-8 sm:pb-16 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:pt-10 lg:pb-4">

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl"
      />

      {/* Left: Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-2xl lg:mx-0">
        <span className="font-accent mb-6 inline-flex rounded-full border border-indigo-200 bg-indigo-50/70 px-4 py-2 text-sm font-medium text-indigo-700">
          Build consistency. Track progress.
        </span>

        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          Build Consistency.
          <span className="font-editorial mt-2 block text-indigo-700">
            Complete Your Goals.
          </span>
        </h1>

        <p className="font-body mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
          Create your goals, track your progress, and visualize your journey.
          See where you're losing consistency so you know what to improve
          and stay on track toward completion.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#how-it-works-heading"
            className="font-display inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Explore the workflow
          </a>

          <a
            href="#how-it-works-heading"
            className="font-body inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition duration-200 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            See How It Works
          </a>
        </div>

        <p className="font-body mt-5 text-sm text-slate-500">
          Small steps. Consistent effort. Visible progress.
        </p>
      </div>

      {/* Right: Illustration card */}
      <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto lg:mr-0 lg:max-w-[640px]">
        {/* Soft glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-8 rounded-full bg-indigo-200/40 blur-3xl"
        />

        {/* Image container */}
        <div className="relative overflow-hidden rounded-3xl  p-2.5 shadow-xl shadow-indigo-950/5 sm:rounded-[2rem] sm:p-4">
          <img
            src={heroImage}
            alt="ProofTracker dashboard showing goals, progress, consistency, and AI suggestions"
            fetchPriority="high"
            className="block h-auto max-h-[520px] w-full  object-contain sm:max-h-[580px]"
          />
        </div>
      </div>
    </section>
  );
}
