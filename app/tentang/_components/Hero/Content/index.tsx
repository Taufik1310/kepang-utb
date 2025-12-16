import Typography from "@/components/_shared/Typography";

export default function AboutHeroContent() {
  return (
    <div className="border-brown absolute bottom-32 w-75 max-w-5xl border-l-10 px-6 text-zinc-50 md:w-160 lg:w-240">
      <Typography animate size="insight" weight="bold" text="TENTANG KAMI" />
      <Typography
        animate
        size="large"
        weight="medium"
        text="Mengenal Lebih Dekat dengan Keluarga Paduan Angklung Universitas Teknologi Bandung"
      />
    </div>
  );
}
