"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/_shared/Icon";
import { GetMenuList } from "@/lib/menus";
import Typography from "@/components/_shared/Typography";

const MENU = GetMenuList();

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav
        className={`fixed z-100 flex w-full animate-[fadeDown_0.4s_ease] items-center justify-between px-6 py-4 text-sm text-zinc-50 backdrop-blur transition-all duration-300 md:px-16 lg:px-24 xl:px-32`}
      >
        <Link
          href="/"
          className="flex transform items-center gap-2 transition duration-300 hover:scale-105"
        >
          <Image
            src="/assets/images/logo/main-logo.png"
            alt="KEPANG UTB Logo"
            width={48}
            height={48}
            className="transition-transform duration-300 hover:rotate-6"
            loading="eager"
          />
          <Typography size="regular" weight="bold" text="KEPANG UTB" />
        </Link>

        <div className="hidden items-center gap-8 transition duration-500 lg:flex">
          {MENU.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`block transition-all duration-300 hover:scale-105 ${isActive ? "text-brown font-semibold" : "hover:text-brown"} `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <button
          className="rounded p-2 transition-transform duration-300 hover:scale-110 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <Icons.cancel size={24} /> : <Icons.menu size={32} />}
        </button>
      </nav>

      {open && (
        <div className="fixed z-50 w-full animate-[slideDown_0.35s_ease] space-y-8 px-6 pt-24 pb-8 text-zinc-50 backdrop-blur-lg lg:hidden">
          {MENU.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`hover:text-brown block transition-transform duration-300 hover:translate-x-1 ${isActive ? "text-brown font-semibold" : ""} `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
