"use client";

import { motion } from "motion/react";
import Typography from "@/components/_shared/Typography";
import { GetOurValues } from "@/lib/our-values";

const VALUES = GetOurValues();

export default function AboutValue() {
  return (
    <section className="mt-32 flex flex-col items-center justify-center px-6 md:px-24 lg:px-48">
      <Typography animate size="title" weight="bold" text="NILAI-NILAI KAMI" />

      <div className="mt-6 grid w-full grid-cols-2 items-center justify-between gap-4 md:grid-cols-4 lg:gap-6">
        {VALUES.map((value, index) => (
          <motion.div
            key={index}
            className="from-dark-brown to-brown flex items-center justify-center rounded bg-linear-to-r px-4 py-3"
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <Typography
              animate
              size="regular"
              weight="semibold"
              text={value.title}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
