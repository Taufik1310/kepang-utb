import AboutDivision from "./_components/Division/page";
import AboutHero from "./_components/Hero";
import AboutHistory from "./_components/History";
import AboutTopman from "./_components/TopMan";
import AboutValue from "./_components/Value";
import AboutVisionMission from "./_components/VisionMission";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutHistory />
      <AboutValue />
      <AboutVisionMission />
      <AboutTopman />
      <AboutDivision />
    </>
  );
}
