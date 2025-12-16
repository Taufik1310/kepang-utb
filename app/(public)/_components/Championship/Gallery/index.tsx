"use client";

import { GetChampionshipGallery } from "@/lib/championships";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";

const MARQUEE_IMAGES = GetChampionshipGallery();

export default function HomeChampionshipGallery() {
  return (
    <>
      <div className="relative w-screen overflow-hidden md:hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-linear-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black to-transparent" />

        <Marquee
          gradient
          speed={50}
          gradientColor="#0a0a0a"
          direction="right"
          className="py-4"
        >
          <div className="flex items-center justify-center">
            {MARQUEE_IMAGES.map((img, index) => (
              <div key={index} className="relative mx-4 h-64 w-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      <div className="hidden md:flex md:flex-col md:items-start">
        {MARQUEE_IMAGES.map((img, index) => (
          <AnimatedImage key={index} img={img} index={index} />
        ))}
      </div>
    </>
  );
}

function AnimatedImage({
  img,
  index,
}: {
  img: { src: string; alt: string };
  index: number;
}) {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className={`relative my-4 transform overflow-hidden transition-all duration-700 ease-out md:h-64 md:w-80 lg:h-80 lg:w-160 ${
        inView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
      }`}
      style={{
        transitionDelay: inView ? `${index * 120}ms` : "0ms",
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover"
        loading="eager"
      />
      <div className="0 pointer-events-none absolute inset-0 bg-linear-to-br from-black/80 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/20" />
    </div>
  );
}
