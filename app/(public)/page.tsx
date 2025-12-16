import HomeAchievement from "./_components/Achievement";
import HomeBigEvent from "./_components/BigEvent";
import HomeChampionship from "./_components/Championship";
import HomeHero from "./_components/Hero";
import HomeProgram from "./_components/Program";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeChampionship />
      <HomeAchievement />
      <HomeBigEvent />
      <HomeProgram />
    </>
  );
}
