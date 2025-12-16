import Typography from "@/components/_shared/Typography";

export default function GenerationHeroContent() {
  return (
    <div className="border-brown absolute bottom-32 w-75 max-w-5xl border-l-10 px-6 text-zinc-50 md:w-160 lg:w-240">
      <Typography
        animate
        size="insight"
        weight="extrabold"
        text="KEGIATAN"
        className="wrap-break-word"
      />
      <Typography
        animate
        size="large"
        weight="medium"
        text="Jejak Aktivitas Keluarga Paduan Angklung Universitas Teknologi Bandung"
      />
    </div>
  );
}
