"use client";

import Image from "next/image";

import { useInView } from "react-intersection-observer";

export default function HomeAchievementPhoto() {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className={`relative my-4 flex h-120 w-100 items-center justify-center overflow-hidden transition-all duration-700 ease-out md:order-last ${
        inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <Image
        src="/assets/images/content/lldikti-majalah.png"
        alt="Majalah LLDIKTI"
        fill
        className="object-contain"
        loading="eager"
      />
    </div>
  );
}
