"use client";

import { motion } from "motion/react";
import { useState } from "react";

type Category = "event" | "program";

export default function ActivityGalleryFilter({
  onChange,
}: {
  onChange: (category: Category) => void;
}) {
  const [active, setActive] = useState<Category>("event");

  const buttons: { label: string; value: Category }[] = [
    { label: "Penampilan", value: "event" },
    { label: "Program Kerja", value: "program" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 80 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className="border-brown flex w-fit overflow-hidden rounded-full border"
    >
      {buttons.map((btn) => {
        const isActive = active === btn.value;

        return (
          <button
            key={btn.value}
            onClick={() => {
              setActive(btn.value);
              onChange(btn.value);
            }}
            className={`px-6 py-2 text-sm transition-all duration-300 ${
              isActive
                ? "bg-brown text-zinc-50"
                : "hover:bg-dark-brown text-zinc-50"
            }`}
          >
            {btn.label}
          </button>
        );
      })}
    </motion.div>
  );
}
