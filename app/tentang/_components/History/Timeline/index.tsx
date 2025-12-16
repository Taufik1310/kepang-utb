"use client";

import { motion } from "motion/react";
import Typography from "@/components/_shared/Typography";
import { GetHistory } from "@/lib/history";

const HISTORIES = GetHistory();

export default function AboutHistoryTimeline() {
  return (
    <motion.div
      className="mt-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-2xl">
        {HISTORIES.map((history, index) => {
          const isLeft = index % 2 === 1;

          return (
            <div
              key={index}
              className="relative grid grid-cols-9 items-stretch"
            >
              <div
                className={`col-span-4 ${
                  isLeft ? "pr-6 text-right" : "col-start-1 opacity-0"
                }`}
              >
                {isLeft && (
                  <div className="relative rounded-2xl p-4">
                    <div className="pointer-events-none absolute -inset-1 rounded-2xl border border-white/20 opacity-50 blur-md" />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/30" />
                    <Typography
                      animate
                      size="small"
                      weight="light"
                      text={history.description}
                      className="relative text-zinc-50"
                    />
                  </div>
                )}
              </div>
              <div className="relative col-span-1 flex flex-col items-center">
                <Typography
                  animate
                  size="large"
                  weight="bold"
                  text={history.year}
                  className="z-10 flex aspect-square items-center justify-center rounded-full bg-black/20 p-3"
                />

                {(index + 1) % 2 == 1 && (
                  <div className="absolute top-8 left-1/2 h-[90%] w-0.5 -translate-x-1/2 bg-linear-to-b from-transparent via-white to-transparent" />
                )}
              </div>

              <div className={`col-span-4 ${!isLeft ? "pl-6" : "opacity-0"}`}>
                {!isLeft && (
                  <div className="relative rounded-2xl p-4">
                    <div className="pointer-events-none absolute -inset-1 rounded-2xl border border-white/20 opacity-50 blur-md" />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/30" />
                    <Typography
                      animate
                      size="small"
                      weight="light"
                      text={history.description}
                      className="relative leading-relaxed text-zinc-50"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
