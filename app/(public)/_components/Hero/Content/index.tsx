import Typography from "@/components/_shared/Typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomeHeroContent() {
  return (
    <div className="absolute top-1/2 left-1/2 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 px-6 text-center text-zinc-50 md:px-0">
      <Typography
        animate
        size="insight"
        weight="bold"
        text="KEPANG UTB"
        className="mb-2 leading-tight"
      />
      <Typography
        animate
        size="title"
        weight="semibold"
        text="Keluarga Paduan Angklung <br /> Universitas Teknologi Bandung"
        className="mb-12 leading-tight"
      />
      <Typography
        animate
        size="regular"
        weight="light"
        text="KEPANG membina, mengembangkan, dan menyalurkan minat serta kreativitas
        mahasiswa dalam bidang seni dan budaya tradisional, khususnya Angklung"
        className="mx-auto mb-8 w-75 md:w-1/2"
      />
      <Button asChild className="bg-brown hover:bg-dark-brown text-zinc-50">
        <Link href="/tentang">
          <Typography size="small" weight="bold" text="Lihat Selengkapnya" />
        </Link>
      </Button>
    </div>
  );
}
