import Typography from "@/components/_shared/Typography";
import {
  GetAddressInfo,
  GetAuthorInfo,
  GetSocialMediaInfo,
} from "@/lib/contact";
import { GetMenuList } from "@/lib/menus";
import Image from "next/image";
import Link from "next/link";

const MENUS = GetMenuList();
const ADDRESS_INFO = GetAddressInfo();
const SOCIAL_MEDIA = GetSocialMediaInfo();
const AUTHOR = GetAuthorInfo();

export default function Footer() {
  return (
    <footer className="relative mt-32 w-full overflow-hidden px-6 pt-8 text-zinc-50 md:px-16 lg:px-24 xl:px-32">
      <div className="absolute -bottom-50 -left-20 h-full w-full opacity-10 md:-bottom-20 md:-left-60 lg:-bottom-10 lg:left-140">
        <Image
          src="/assets/images/logo/vector-logo.png"
          alt="Logo Kepang"
          fill
          className="object-contain invert"
          loading="eager"
        />
      </div>

      <div className="flex w-full flex-col gap-10 border-b border-gray-500/30 pb-6 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 md:max-w-96">
          <Link href="/" className="transform transition duration-300">
            <Image
              src="/assets/images/logo/main-logo.png"
              alt="KEPANG UTB Logo"
              width={80}
              height={80}
              className="transition-transform duration-300 hover:rotate-6"
            />
          </Link>
          <div className="flex flex-col items-center gap-1">
            <Typography animate size="title" weight="bold" text="KEPANG UTB" />
            <Typography
              animate
              size="regular"
              weight="medium"
              text="Keluarga Paduan Angklung <br /> Universitas Teknologi Bandung"
              className="text-center"
            />
          </div>
        </div>

        <div className="flex w-full flex-1 flex-wrap items-start justify-between gap-12 md:justify-end lg:gap-20">
          <div className="space-y-4">
            <Typography animate size="small" weight="semibold" text="TAUTAN" />
            <ul className="space-y-2">
              {MENUS.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.path}>
                    <Typography
                      animate
                      size="small"
                      weight="light"
                      text={menu.name}
                      className="hover:text-brown"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <Typography animate size="small" weight="semibold" text="ALAMAT" />
            {ADDRESS_INFO.map((info, index) => (
              <div key={index} className="flex items-start gap-2">
                <info.icon size={16} />
                <Typography
                  animate
                  size="small"
                  weight="light"
                  text={info.value}
                  className="w-40"
                />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <Typography
              animate
              size="small"
              weight="semibold"
              text="SOSIAL MEDIA"
            />
            <div className="flex items-center gap-4">
              {SOCIAL_MEDIA.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="hover:bg-brown flex items-start justify-center rounded-full bg-zinc-50 p-2 text-black"
                >
                  <item.icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 py-6 pb-20">
        <Typography
          animate
          size="small"
          weight="medium"
          text={`Copyright ${new Date().getFullYear()} ©.`}
        />
        <Link href={AUTHOR.instagram} target="_blank" rel="noopener noreferrer">
          <Typography
            animate
            size="small"
            weight="medium"
            text={`KEPANG UTB.`}
            className="underline"
          />
        </Link>
        <Typography
          animate
          size="small"
          weight="medium"
          text={`Hak Cipta Dilindungi`}
        />
      </div>
    </footer>
  );
}
