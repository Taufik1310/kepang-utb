"use client";

import { useInView } from "react-intersection-observer";

interface TypographyProps {
  text: string;
  animate?: boolean;
  className?: string;
  weight:
    | "thin"
    | "extralight"
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  size:
    | "small"
    | "regular"
    | "large"
    | "subtitle"
    | "title"
    | "heading"
    | "insight";
}

export default function Typography({
  text,
  className = "",
  weight = "thin",
  size = "small",
  animate = false,
}: TypographyProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const weightClasses = [
    {
      key: "thin",
      class: "font-thin",
    },
    {
      key: "extralight",
      class: "font-extralight",
    },
    {
      key: "light",
      class: "font-light",
    },
    {
      key: "medium",
      class: "font-medium",
    },
    {
      key: "semibold",
      class: "font-semibold",
    },
    {
      key: "bold",
      class: "font-bold",
    },
    {
      key: "extrabold",
      class: "font-extrabold",
    },
    {
      key: "black",
      class: "font-black",
    },
  ];

  const sizeClasses = [
    {
      key: "small",
      class: "text-xs",
    },
    {
      key: "small",
      class: "text-xs",
    },
    {
      key: "regular",
      class: "text-sm",
    },
    {
      key: "large",
      class: "text-base lg:text-lg",
    },
    {
      key: "subtitle",
      class: "text-lg lg:text-xl",
    },
    {
      key: "title",
      class: "text-xl md:text-2xl lg:text-3xl",
    },
    {
      key: "heading",
      class: "text-3xl md:text-4xl lg:text-5xl",
    },
    {
      key: "insight",
      class: "text-4xl md:text-[40px] lg:text-[56px] lg:leading-[64px]",
    },
  ];

  const fontClasses = [
    weightClasses?.find((item) => item?.key === weight)?.class,
    sizeClasses?.find((item) => item?.key === size)?.class,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const transitionClasses = animate
    ? `transform transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`
    : "";

  return (
    <p
      ref={ref}
      className={`${fontClasses} ${transitionClasses}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
