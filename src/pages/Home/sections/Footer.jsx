import logo from "../../../assets/ProofTracker_ Logo.png";

const productLinks = [
  { label: "How It Works", href: "#how-it-works-heading" },
];

const resourceLinks = [{ label: "About", href: "#about-section-heading" }];

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="rounded-md text-sm text-slate-400 transition-colors hover:text-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-4 lg:gap-10 lg:px-12 lg:py-20">
        <div className="lg:col-span-1">
          <a
            href="#"
            className="inline-flex rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <img
              src={logo}
              alt="ProofTracker"
              className="h-10 w-auto max-w-[220px] object-contain brightness-0 invert"
            />
          </a>
          <p className="font-display mt-6 text-lg font-semibold text-white">
            Turn your goals into proven progress.
          </p>
          <p className="font-body mt-3 max-w-xs text-sm leading-6 text-slate-400">
            Track goals, record proof, understand consistency, and make better
            decisions about your progress.
          </p>
        </div>

        <nav aria-labelledby="footer-product-heading">
          <h2
            id="footer-product-heading"
            className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white"
          >
            Product
          </h2>
          <ul className="mt-5 space-y-3">
            {productLinks.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-resources-heading">
          <h2
            id="footer-resources-heading"
            className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white"
          >
            Resources
          </h2>
          <ul className="mt-5 space-y-3">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <FooterLink href={link.href}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">
            Account
          </h2>
          <p className="font-body mt-5 max-w-xs text-sm leading-6 text-slate-400">
            Account access will be available when authentication routes are
            connected.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            © {currentYear} ProofTracker. All rights reserved.
          </p>
          <p>Built for consistent execution.</p>
        </div>
      </div>
    </footer>
  );
}
