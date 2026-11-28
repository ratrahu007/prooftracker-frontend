import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <BrowserRouter>

    {/* Public routes are accessible to all users. */}
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Authentication routes */}
        <Route path="/auth" element={<AuthLayout/>}>
          
        </Route>

        {/* Private routes are only accessible to authenticated users. */}
        <Route path="/app" element={<PrivateLayout />}>
          <Route
            index
            element={
              <section className="rounded-2xl border border-slate-200 bg-white p-6">
                <h1 className="font-display text-2xl font-bold text-slate-900">
                  Dashboard
                </h1>
              </section>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
