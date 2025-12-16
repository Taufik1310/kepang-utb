import Image from "next/image";
import HomeHeroContent from "./Content";

export default function HomeHero() {
  return (
    <section className="relative flex h-screen w-screen flex-col items-center">
      <div className="absolute h-full w-full">
        <Image
          src={`/assets/images/hero/beranda.jpg`}
          alt="Overlay"
          fill
          className="object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/60 to-black" />
      </div>
      <HomeHeroContent />
    </section>
  );
}
