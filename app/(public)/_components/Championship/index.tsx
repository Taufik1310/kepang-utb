import HomeChampionshipContent from "./Content";
import HomeChampionshipGallery from "./Gallery";

export default function HomeChampionship() {
  return (
    <div className="mt-4 flex flex-col md:mt-20 md:flex-row md:items-start">
      <HomeChampionshipGallery />
      <HomeChampionshipContent />
    </div>
  );
}
