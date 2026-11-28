import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/ProofTracker_ Logo.png";

export default function AuthLayout() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

            <section className="hidden lg:flex bg-indigo-600">
               <NavLink to="/" aria-label="ProfTracker Home" >
                <img
                    src={logo}
                    alt="ProofTracker"
                    className="h-12 w-36 object-contain"
                />
               </NavLink>
                 <div>
          <h1 className="text-4xl font-bold text-white">
            Track. Prove. Grow.
          </h1>

          <p className="mt-4 text-indigo-100">
            Your journey to become a skilled and
            confident developer starts here.
          </p>
        </div>

        <p className="text-sm text-indigo-100">
          Built for learners. Designed for growth.
        </p>
            </section>

            <section className="flex items-center justify-center">
                <Outlet />
            </section>

        </div>
    )
}