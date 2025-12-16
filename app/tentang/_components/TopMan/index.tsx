"use client";

import { motion } from "motion/react";
import Typography from "@/components/_shared/Typography";
import { GetTopmanV2 } from "@/lib/management";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TOPMAN = GetTopmanV2();

export default function AboutTopman() {
  return (
    <section className="mt-32 flex flex-col items-center justify-center px-6 md:px-24 lg:px-48">
      <Typography
        animate
        size="title"
        weight="bold"
        text="TOP MANAJEMEN ( TOPMAN )"
      />
      <div className="mt-6 grid w-full grid-cols-2 items-center justify-between gap-4 md:grid-cols-2 lg:gap-6">
        {TOPMAN.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, translateY: 20 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className={`relative col-span-2 aspect-square md:col-span-1 ${index !== 0 ? "aspect-video" : "md:row-span-2"} w-full`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 -bottom-0.5 bg-linear-to-t from-black via-black/40 to-black/90" />
            <div className="absolute right-6 bottom-6 left-6 text-zinc-50">
              <Typography size="large" weight="semibold" text={item.title} />
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
