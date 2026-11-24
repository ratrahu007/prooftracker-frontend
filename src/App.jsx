import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>
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
