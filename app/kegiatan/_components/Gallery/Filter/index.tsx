"use client";

import { useState } from "react";

type Category = "event" | "program";

export default function ActivityGalleryFilter({
  onChange,
}: {
  onChange: (category: Category) => void;
}) {
  const [active, setActive] = useState<Category>("event");

  const buttons: { label: string; value: Category }[] = [
    { label: "Event", value: "event" },
    { label: "Program", value: "program" },
  ];

  return (
    <div className="border-brown flex w-fit overflow-hidden rounded-full border">
      {buttons.map((btn) => {
        const isActive = active === btn.value;

        return (
          <button
            key={btn.value}
            onClick={() => {
              setActive(btn.value);
              onChange(btn.value);
            }}
            className={`px-6 py-2 text-sm transition-all duration-300 ${
              isActive
                ? "bg-brown text-zinc-50"
                : "hover:bg-dark-brown text-zinc-50"
            }`}
          >
            {btn.label}
          </button>
        );
      })}
    </div>
  );
}
