"use client";

import { motion } from "motion/react";
import Typography from "@/components/_shared/Typography";
import { GetFlagshipProgram } from "@/lib/activities";
import Image from "next/image";

const PROGRAMS = GetFlagshipProgram();

export default function HomeProgramGallery() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
      {PROGRAMS.map((program, index) => (
        <motion.div
          initial={{ opacity: 0, translateY: 80 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          key={index}
          className="relative aspect-square w-full"
        >
          <Image
            src={program.image}
            alt={program.title}
            fill
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 -bottom-0.5 bg-linear-to-t from-black via-black/40 to-black/90" />
          <div className="absolute right-6 bottom-6 left-6 text-zinc-50">
            <Typography
              animate
              size="large"
              weight="semibold"
              text={program.title}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
