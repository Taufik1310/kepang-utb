import HomeChampionshipContent from "./Content";
import HomeChampionshipGallery from "./Gallery";

export default function HomeChampionship() {
  return (
    <div className="mt-20 flex flex-col md:flex-row md:items-start">
      <HomeChampionshipGallery />
      <HomeChampionshipContent />
    </div>
  );
}
