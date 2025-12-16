"use client";

import { motion } from "motion/react";
import Typography from "@/components/_shared/Typography";
import { GetDivisions } from "@/lib/management";
import Image from "next/image";

const DIVISIONS = GetDivisions();

export default function ManagementDivision() {
  return (
    <section className="mt-32 flex flex-col items-center justify-center px-6 md:px-24 lg:px-32">
      <Typography animate size="title" weight="bold" text="DIVISI - DIVISI" />
      <div className="mt-12 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {DIVISIONS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateY: 80 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className={`relative flex w-full flex-col rounded border border-zinc-50`}
          >
            <div
              className={`relative aspect-square w-full overflow-hidden border-b border-zinc-50`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 -bottom-0.5 bg-linear-to-t from-black via-black/40 to-black/90" />
              <div className="absolute right-6 bottom-8 left-6 text-zinc-50">
                <Typography
                  size="subtitle"
                  weight="semibold"
                  text={`Divisi ${item.title}`}
                />
              </div>
            </div>
            <div className="space-y-4 p-4 lg:p-8">
              <Typography
                animate
                size="small"
                weight="light"
                text={item.description || ""}
              />
              <ul className="space-y-4">
                {item?.duties?.map((duty, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Typography
                      animate
                      size="small"
                      weight="medium"
                      text={`${index + 1}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-50"
                    />
                    <Typography
                      animate
                      size="small"
                      weight="light"
                      text={duty}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
