import { Icons } from "@/components/_shared/Icon";

export function GetAddressInfo() {
  return [
    {
      type: "address",
      value:
        "Universitas Teknologi Bandung, Jl. Soekarno-Hatta No.378, Kb. Lega, Kec. Bojongloa Kidul, Kota Bandung, Jawa Barat 40235",
      icon: Icons.location,
    },
    {
      type: "email",
      value: "kepang@utb-univ.ac.id",
      icon: Icons.email,
    },
  ];
}

export function GetSocialMediaInfo() {
  return [
    {
      name: "Instagram",
      url: "https://www.instagram.com/kepang_utb/",
      icon: Icons.instagram,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@kepangsttbandung2700",
      icon: Icons.youtube,
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@kepangutb/",
      icon: Icons.tiktok,
    },
  ];
}

export const GetAuthorInfo = () => {
  return {
    name: "Taufik Ismail",
    website: "https://taufiksmail.vercel.app",
    instagram: "https://www.instagram.com/taufiksmail_/",
  };
};
