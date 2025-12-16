import Typography from "@/components/_shared/Typography";
import { HomeBigEventCarousel } from "./Carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeBigEvent() {
  return (
    <div className="justify-content-start mt-20 flex w-full flex-col items-start px-6 lg:px-32">
      <Typography
        animate
        size="title"
        weight="bold"
        text="EVENT BESAR YANG PERNAH DIIKUTI"
        className="mb-4"
      />
      <HomeBigEventCarousel />

      <Button
        asChild
        className="bg-brown hover:bg-dark-brown mt-4 self-end text-zinc-50"
      >
        <Link href="/kegiatan">
          <Typography size="small" weight="bold" text="Lihat Semua Event" />
        </Link>
      </Button>
    </div>
  );
}
