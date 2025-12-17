import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "KEPANG UTB | %s",
    default:
      "KEPANG UTB | Keluarga Paduan Angklung Universitas Teknologi Bandung",
  },
  description:
    "KEPANG UTB adalah Keluarga Paduan Angklung Universitas Teknologi Bandung. Organisasi seni dan budaya yang berfokus pada pelestarian angklung, pengembangan kreativitas, serta memperkuat rasa kebersamaan antar mahasiswa.",
  generator: "Next.js",
  applicationName: "KEPANG UTB Website",
  referrer: "origin-when-cross-origin",

  keywords: [
    "KEPANG UTB",
    "Keluarga Paduan Angklung UTB",
    "Angklung",
    "Seni dan Budaya",
    "Organisasi Kampus",
    "UKM UTB",
    "Universitas Teknologi Bandung",
    "Kelompok Musik Kampus",
  ],

  authors: [
    { name: "KEPANG UTB" },
    { name: "Taufik Ismail", url: "https://taufiksmail.vercel.app/" },
  ],

  creator: "Taufik Ismail",
  publisher: "KEPANG UTB",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL("https://kepang-utb.my.id"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "KEPANG UTB | Keluarga Paduan Angklung Universitas Teknologi Bandung",
    description:
      "Website resmi KEPANG UTB — Menyajikan informasi tentang sejarah, angkatan, galeri, kegiatan, prestasi, dan kesempatan bergabung dalam keluarga besar Paduan Angklung Universitas Teknologi Bandung.",
    url: "https://kepang-utb.my.id",
    siteName: "KEPANG UTB",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "KEPANG UTB Cover Image",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
    other: {
      rel: "icon",
      url: "/icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark flex min-h-screen min-w-screen flex-col justify-between overflow-x-hidden overflow-y-auto bg-black antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
