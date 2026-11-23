import Hero from "./sections/Hero";
import ProblemSection from "./sections/ProblemSection";
import HowItWorks from "./sections/HowItWorks";
import AboutSection from "./sections/AboutSection";

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