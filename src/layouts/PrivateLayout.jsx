import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/ProofTracker_ Logo.png";

const navigationItems = [
  { label: "Dashboard", to: "/app" },
  { label: "Challenges", to: "/app/challenges" },
  { label: "Progress", to: "/app/progress" },
];

export default function PrivateLayout() {
  return (
    <div className="min-h-screen bg-slate-50 font-body">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-slate-200 bg-white lg:block">
        <div className="flex h-20 items-center border-b border-slate-200 px-6">
          <NavLink to="/app" aria-label="ProofTracker dashboard">
            <img
              src={logo}
              alt="ProofTracker"
              className="h-12 w-36 object-contain"
            />
          </NavLink>
        </div>

        <nav aria-label="Private navigation" className="space-y-1 p-4">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/app"}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
          <NavLink to="/app" aria-label="ProofTracker dashboard" className="lg:hidden">
            <img
              src={logo}
              alt="ProofTracker"
              className="h-11 w-32 object-contain"
            />
          </NavLink>

          <div className="ml-auto flex items-center gap-3">
            <span className="hidden text-sm font-medium text-slate-600 sm:block">
              My workspace
            </span>
            <button
              type="button"
              aria-label="Open profile menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-indigo-600 text-sm font-bold text-white"
            >
              PT
            </button>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
