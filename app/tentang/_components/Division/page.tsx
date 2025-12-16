"use client";

import { motion } from "motion/react";
import Typography from "@/components/_shared/Typography";
import { GetDivisions } from "@/lib/management";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DIVISIONS = GetDivisions();

export default function AboutDivision() {
  return (
    <section className="mt-32 flex flex-col items-center justify-center px-6 md:px-24 lg:px-48">
      <Typography animate size="title" weight="bold" text="DIVISI KAMI" />
      <div className="mt-6 grid w-full grid-cols-1 items-center justify-between gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {DIVISIONS.map((divisi, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className={`relative aspect-video w-full md:aspect-square`}
          >
            <Image
              src={divisi.image}
              alt={divisi.title}
              fill
              className="object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 -bottom-0.5 bg-linear-to-t from-black via-black/40 to-black/90" />
            <div className="absolute right-6 bottom-6 left-6 text-zinc-50">
              <Typography size="large" weight="semibold" text={divisi.title} />
            </div>
          </motion.div>
        ))}
      </div>
      <Button
        asChild
        className="bg-brown hover:bg-dark-brown mt-4 self-center text-zinc-50"
      >
        <Link href="/kepengurusan">
          <Typography size="small" weight="bold" text="Lihat Kepengurusan" />
        </Link>
      </Button>
    </section>
  );
}
