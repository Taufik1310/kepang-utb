"use client";

import Typography from "@/components/_shared/Typography";
import { GetVisionMission } from "@/lib/management";
import { motion } from "motion/react";

const VISION_MISSION = GetVisionMission();

export default function AboutVisionMission() {
  return (
    <section className="mt-32 flex flex-col items-center justify-center px-6 md:px-24 lg:px-32">
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
        className="flex flex-col rounded border border-zinc-50 lg:flex-row"
      >
        <div className="space-y-4 border-b border-zinc-50 p-4 lg:w-8/12 lg:border-r lg:border-b-0 lg:p-8">
          <Typography animate size="title" weight="bold" text="VISI" />
          <Typography
            animate
            size="small"
            weight="light"
            text={VISION_MISSION.vision}
          />
        </div>
        <div className="space-y-4 p-4 lg:p-8">
          <Typography animate size="title" weight="bold" text="MISI" />
          <ul className="space-y-4">
            {VISION_MISSION.mission.map((mission, index) => (
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
                  text={mission}
                />
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
