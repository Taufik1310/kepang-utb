"use client";

import { motion } from "motion/react";
import { ProductType } from "@/types/product";
import Image from "next/image";
import Typography from "@/components/_shared/Typography";
import { IDRFormat } from "@/lib/utils";

export default function MerchCatalogProductCard({
  name,
  price,
  pics,
  disabled,
}: ProductType) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 80 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className={`${disabled ? "cursor-not-allowed" : ""} rounded shadow-[0_8px_30px_rgba(255,255,255,0.2)]`}
    >
      <div className="group relative aspect-square w-full overflow-hidden rounded">
        {pics?.map((pic, index) => (
          <Image
            key={index}
            src={pic}
            alt={`Foto Produk ${index + 1}`}
            fill
            className={`rounded object-cover transition-all duration-1000 ease-in-out ${
              index === 0
                ? "group-hover:opacity-0"
                : "opacity-0 group-hover:opacity-100"
            }`}
            priority
          />
        ))}

        {disabled && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <span className="rounded-full border border-white/40 px-6 py-2 text-sm font-semibold tracking-widest text-white">
              COMING SOON
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col items-start gap-2 p-4">
        <Typography size="large" weight="medium" text={name} />

        {!disabled ? (
          <div className="flex items-center gap-2">
            <Typography
              size="large"
              weight="extrabold"
              text={IDRFormat(price)}
            />
            <Typography
              size="small"
              weight="medium"
              text={IDRFormat(price * 2)}
              className="text-zinc-400 line-through"
            />
          </div>
        ) : (
          <Typography
            size="small"
            weight="medium"
            text="Segera hadir"
            className="text-zinc-400"
          />
        )}
      </div>
    </motion.div>
  );
}
