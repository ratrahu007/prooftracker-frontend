import AboutSection from "./pages/Home/sections/AboutSection";
import Footer from "./pages/Home/sections/Footer";
import Hero from "./pages/Home/sections/Hero";
import HowItWorks from "./pages/Home/sections/HowItWorks";
import Navbar from "./pages/Home/sections/Navbar";
import ProblemSection from "./pages/Home/sections/ProblemSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <AboutSection />
      <Footer />
    </>
  );
}

export default App
