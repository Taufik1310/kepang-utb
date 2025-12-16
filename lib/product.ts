const PRODUCTS = [
  {
    id: "pdh-kepang",
    name: "PDH KEPANG",
    price: 150000,
    availability: "available",
    description: "Pakaian Dinas Harian (PDH) resmi untuk pengurus KEPANG UTB.",
    thumbnail: "/assets/images/management/ketum.png",
    pics: [
      "/assets/images/management/ketum.png",
      "/assets/images/management/waketum.png",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "pin-angklung-kepang",
    name: "Pin Angklung KEPANG",
    price: 15000,
    availability: "coming_soon",
    description:
      "Pin eksklusif berbentuk angklung sebagai identitas dan kebanggaan anggota KEPANG.",
    thumbnail: "/assets/images/product/pin-angklung-1.png",
    pics: [
      "/assets/images/product/pin-angklung-1.png",
      "/assets/images/product/pin-angklung-2.png",
    ],
  },
  {
    id: "gantungan-kunci-kepang",
    name: "Gantungan Kunci KEPANG",
    price: 20000,
    availability: "coming_soon",
    description:
      "Gantungan kunci resmi KEPANG dengan desain sederhana namun elegan.",
    thumbnail: "/assets/images/product/gantungan-kunci-1.png",
    pics: [
      "/assets/images/product/gantungan-kunci-1.png",
      "/assets/images/product/gantungan-kunci-2.png",
    ],
  },
  {
    id: "sticker-pack-kepang",
    name: "Sticker Pack KEPANG",
    price: 10000,
    availability: "coming_soon",
    description:
      "Paket stiker KEPANG dengan berbagai desain angklung dan identitas organisasi.",
    thumbnail: "/assets/images/product/sticker-pack-1.png",
    pics: [
      "/assets/images/product/sticker-pack-1.png",
      "/assets/images/product/sticker-pack-2.png",
    ],
  },
  {
    id: "kaos-kepang",
    name: "Kaos KEPANG",
    price: 130000,
    availability: "coming_soon",
    description:
      "Kaos resmi KEPANG berbahan cotton combed yang nyaman digunakan dalam berbagai kegiatan.",
    thumbnail: "/assets/images/product/kaos-kepang-1.png",
    pics: [
      "/assets/images/product/kaos-kepang-1.png",
      "/assets/images/product/kaos-kepang-2.png",
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "kimono-kepang",
    name: "Kimono KEPANG",
    price: 250000,
    availability: "coming_soon",
    description:
      "Kimono khas KEPANG yang digunakan saat penampilan dan acara resmi.",
    thumbnail: "/assets/images/product/kimono-kepang-1.png",
    pics: [
      "/assets/images/product/kimono-kepang-1.png",
      "/assets/images/product/kimono-kepang-2.png",
    ],
    sizes: ["M", "L", "XL"],
  },
];

export function GetAllProduct() {
  return PRODUCTS;
}

export function GetDetailProduct(id: string) {
  return PRODUCTS.find((product) => product.id === id) || null;
}
