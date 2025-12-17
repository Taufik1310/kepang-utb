"use client";

import { motion } from "motion/react";
import Typography from "@/components/_shared/Typography";
import Image from "next/image";
import { GetAllGeneration } from "@/lib/generation";

const GENERATIONS = GetAllGeneration();

export default function GenerationGallery() {
  return (
    <section className="mt-4 flex flex-col items-center justify-center px-6 md:mt-20 md:px-24 lg:px-32">
      <div className="grid w-full grid-cols-1 gap-12">
        {GENERATIONS.map((generation, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className={`relative flex w-full flex-col rounded border border-zinc-50`}
          >
            <div
              className={`relative aspect-video w-full overflow-hidden border-b border-zinc-50`}
            >
              <Image
                src={generation.image}
                alt={generation.label}
                fill
                className="object-cover"
                loading="eager"
              />
            </div>
            <div className="p-4 lg:p-8">
              <Typography
                animate
                size="title"
                weight="bold"
                text={generation.label}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
