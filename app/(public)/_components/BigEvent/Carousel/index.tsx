"use client";

import { motion } from "motion/react";
import Typography from "@/components/_shared/Typography";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GetBigEvents } from "@/lib/activities";
import Image from "next/image";

const EVENTS = GetBigEvents();

export function HomeBigEventCarousel() {
  return (
    <Carousel opts={{ align: "start" }} className="w-full overflow-visible">
      <CarouselContent className="-ml-4">
        {EVENTS.map((event, index) => (
          <CarouselItem key={index} className="basis-[80%] pl-4 md:basis-[45%]">
            <Card className="overflow-hidden border-transparent py-0">
              <CardContent className="p-0">
                <motion.div
                  initial={{ opacity: 0, translateY: 20 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1 }}
                  className="relative aspect-video w-full"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 -bottom-0.5 bg-linear-to-t from-black via-black/40 to-black/90" />

                  <div className="absolute right-4 bottom-4 left-4 text-zinc-50">
                    <Typography
                      size="large"
                      weight="semibold"
                      text={event.title}
                    />
                    <Typography
                      size="small"
                      weight="semibold"
                      text={`${event.year}`}
                      className="text-brown"
                    />
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}
