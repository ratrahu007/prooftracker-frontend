import consistencyIllustration from "../../../assets/problem-consistency.svg";
import progressIllustration from "../../../assets/problem-progress.svg";
import accountabilityIllustration from "../../../assets/problem-accountability.svg";

const problems = [
  {
    title: "Lost Consistency",
    caption: "Good intentions fade.",
    description:
      "Busy days and broken routines make it difficult to stay consistent.",
    image: consistencyIllustration,
    alt: "Goal checklist with unfinished tasks, a fading calendar streak, and a broken progress line",
  },
  {
    title: "Unclear Progress",
    caption: "Progress feels invisible.",
    description:
      "Without a clear record of completed work, it's difficult to see how far you've come.",
    image: progressIllustration,
    alt: "Dashboard with scattered task records, incomplete progress indicators, and an unclear chart",
  },
  {
    title: "Lack of Accountability",
    caption: "Effort is hard to measure.",
    description:
      "Without evidence of completed work, reviewing your actual progress becomes difficult.",
    image: accountabilityIllustration,
    alt: "Goal card with an empty evidence area, missing proof attachment, and unverified completion indicator",
  },
];

export default function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-section-heading"
      className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-accent text-sm font-medium tracking-[0.2em] text-indigo-600">
            THE CHALLENGE
          </p>
          <h2
            id="problem-section-heading"
            className="font-display mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Setting Goals Is Easy. Staying Consistent Is Hard.
          </h2>
          <p className="font-body mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Most people know what they want to achieve. The challenge is
            staying consistent, measuring progress, and proving the work they
            put in.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {problems.map((problem) => (
            <article
              key={problem.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-950/5"
            >
              <div className="border-b border-slate-100 bg-slate-50/70 p-4 sm:p-5">
                <img
                  src={problem.image}
                  alt={problem.alt}
                  className="h-auto w-full rounded-2xl transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6 sm:p-7">
                <p className="font-accent text-xs font-medium uppercase tracking-[0.16em] text-indigo-600">
                  {problem.caption}
                </p>
                <h3 className="font-display mt-3 text-xl font-semibold text-slate-950">
                  {problem.title}
                </h3>
                <p className="font-body mt-3 text-base leading-7 text-slate-600">
                  {problem.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
