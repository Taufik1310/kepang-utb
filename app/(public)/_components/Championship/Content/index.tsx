import Typography from "@/components/_shared/Typography";

export default function HomeChampionshipContent() {
  return (
    <div className="mt-4 flex w-full flex-col gap-6 px-6 text-zinc-50 md:pe-20 lg:pe-32">
      <div className="flex flex-col gap-1">
        <Typography
          animate
          size="title"
          weight="bold"
          text="JUARA 1"
          className="from-brown bg-linear-to-r to-white bg-clip-text text-transparent"
        />
        <Typography
          animate
          size="title"
          weight="bold"
          text="Kategori Umum Lomba Musik Angklung Padaeng (LMAP) XIII Tingkat
          Nasional"
        />
        <Typography
          animate
          size="regular"
          weight="bold"
          text="2025"
          className="text-brown"
        />
      </div>
      <div className="flex flex-col gap-4">
        <Typography
          animate
          size="regular"
          weight="light"
          text="Melalui latihan konsisten dan kerja sama yang solid, Kepang UTB
          berhasil meraih Juara 1 Kategori Umum Lomba Musik Angklung Padaeng
          (LMAP) XIII Tingkat Nasional yang diselenggarakan oleh Kabumi
          Universitas Pendidikan Indonesia."
        />
        <Typography
          animate
          size="regular"
          weight="light"
          text="Pencapaian ini menjadi bukti nyata bahwa semangat berkesenian dan
          budaya yang dijaga mahasiswa mampu melahirkan karya berkualitas
          sekaligus mengharumkan nama kampus. Prestasi Kepang UTB diharapkan
          dapat menginspirasi mahasiswa lain untuk terus berkarya, berkompetisi
          sehat, dan memberikan kontribusi positif bagi masyarakat."
        />
      </div>
    </div>
  );
}
