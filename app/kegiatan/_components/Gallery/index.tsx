"use client";

import { motion } from "motion/react";
import Typography from "@/components/_shared/Typography";
import Image from "next/image";
import { GetAllEvent, GetAllProgram } from "@/lib/activities";
import ActivityGalleryFilter from "./Filter";
import { useState } from "react";

type Category = "event" | "program";

const EVENTS = GetAllEvent();
const PROGRAMS = GetAllProgram();

export default function ActivityGallery() {
  const [category, setCategory] = useState<Category>("event");

  const filteredActivities = category === "event" ? EVENTS : PROGRAMS;

  return (
    <section className="mt-12 flex flex-col items-center justify-center px-6 md:px-24 lg:px-32">
      <ActivityGalleryFilter onChange={setCategory} />
      <div className="mt-12 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredActivities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className={`relative aspect-video w-full overflow-hidden`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 -bottom-0.5 bg-linear-to-t from-black/90 via-black/25 to-black/60" />
            <div className="absolute right-6 bottom-6 left-6 text-zinc-50 lg:bottom-8">
              <Typography
                size="regular"
                weight="semibold"
                text={`${item.title}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
