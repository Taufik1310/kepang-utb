"use client";

import { motion } from "motion/react";
import Typography from "@/components/_shared/Typography";

export default function MerchTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 80 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className="from-dark-brown to-brown flex w-full flex-col items-center justify-center rounded-2xl bg-linear-to-br px-4 py-12 text-center text-zinc-50 md:px-12 md:py-24 lg:px-24"
    >
      <Typography
        animate
        size="heading"
        weight="bold"
        text="MERCHANDISE KEPANG UTB"
      />
      <div className="my-4 h-[3px] w-32 bg-linear-to-l from-transparent to-white" />
      <Typography
        animate
        size="regular"
        weight="medium"
        text="Merchandise KEPANG UTB hadir sebagai representasi perjalanan seni, kebersamaan lintas angkatan, dan semangat melestarikan budaya yang terus hidup."
      />
    </motion.div>
  );
}
