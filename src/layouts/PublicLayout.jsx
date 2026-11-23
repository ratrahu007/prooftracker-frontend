import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/sections/Navbar";
import Footer from "../pages/Home/sections/Footer";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
