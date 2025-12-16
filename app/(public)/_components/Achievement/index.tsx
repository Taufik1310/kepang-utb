import HomeAchievementContent from "./Content";
import HomeAchievementPhoto from "./Photo";

export default function HomeAchievement() {
  return (
    <div className="mt-16 flex w-full flex-col items-center justify-center gap-8 md:mt-2 md:flex-row lg:px-32">
      <HomeAchievementPhoto />
      <HomeAchievementContent />
    </div>
  );
}
