import Hero from "../components/sections/Hero";
import ProblemSection from "../components/sections/ProblemSection";
import HowItWorks from "../components/sections/HowItWorks";
import AboutSection from "../components/sections/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <AboutSection />
    </>
  );
}