"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";

interface ButtonProps {
  label: string;
  href?: string;
  animate?: boolean;
  delay?: number;
  className?: string;
}

export default function Button({
  label,
  href = "#",
  animate = false,
  delay = 0,
  className = "",
}: ButtonProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animationClasses = animate
    ? `transform transition-all duration-700 ease-out ${
        delay ? `delay-[${delay}ms]` : ""
      } ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`
    : "";

  return (
    <div ref={ref} className={animationClasses}>
      <Link
        href={href}
        className={`bg-brown hover:bg-dark-brown inline-flex items-center justify-center rounded-lg px-8 py-3 font-semibold text-white transition-colors duration-300 ${className}`}
      >
        {label}
      </Link>
    </div>
  );
}
