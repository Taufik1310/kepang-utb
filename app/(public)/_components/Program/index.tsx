import Typography from "@/components/_shared/Typography";
import HomeProgramGallery from "./Gallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeProgram() {
  return (
    <div className="justify-content-start mt-16 flex w-full flex-col items-start px-6 lg:px-32">
      <Typography
        animate
        size="title"
        weight="bold"
        text="PROGRAM UNGGULAN"
        className="mb-4"
      />
      <HomeProgramGallery />
      <Button
        asChild
        className="bg-brown hover:bg-dark-brown mt-4 self-center text-zinc-50"
      >
        <Link href="/kegiatan">
          <Typography size="small" weight="bold" text="Lihat Semua Program" />
        </Link>
      </Button>
    </div>
  );
}
