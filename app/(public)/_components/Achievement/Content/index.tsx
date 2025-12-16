import Typography from "@/components/_shared/Typography";

export default function HomeAchievementContent() {
  return (
    <div className="flex w-full flex-col gap-6 px-6 text-zinc-50 lg:px-0">
      <Typography
        animate
        size="title"
        weight="bold"
        text="Momen Bersejarah: KEPANG UTB Masuk Majalah LLDIKTI Wilayah 4"
      />
      <div className="flex flex-col gap-4">
        <Typography
          animate
          size="regular"
          weight="light"
          text="Masuknya Keluarga Paduan Angklung Universitas Teknologi Bandung (KEPANG UTB) ke dalam Majalah LLDIKTI Wilayah IV merupakan sebuah pencapaian yang sangat membanggakan. Hal ini menunjukkan bahwa KEPANG UTB tidak hanya aktif sebagai organisasi kemahasiswaan, tetapi juga mampu menampilkan kualitas, prestasi, dan kontribusi nyata hingga mendapat perhatian pada tingkat Lembaga Layanan Pendidikan Tinggi."
        />
        <Typography
          animate
          size="regular"
          weight="light"
          text="Publikasi ini menjadi bukti bahwa kegiatan, karya, dan perjalanan KEPANG UTB telah diakui dan dinilai layak untuk disebarluaskan sebagai contoh positif bagi perguruan tinggi lainnya. Pencapaian ini diharapkan dapat menjadi motivasi bagi seluruh anggota untuk terus berkarya, menjaga kualitas, serta membawa nama baik organisasi dan kampus ke tingkat yang lebih tinggi."
        />
      </div>
    </div>
  );
}
