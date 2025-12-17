"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";

import MerchProductDetailGallery from "./_components/Gallery";
import Typography from "@/components/_shared/Typography";
import { Button } from "@/components/ui/button";

import { IDRFormat } from "@/lib/utils";
import { GetDetailProduct } from "@/lib/product";

export default function MerchProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = GetDetailProduct(slug);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  if (!product) return notFound();

  const currentUrl =
    typeof window !== "undefined"
      ? window.location.origin + `/product/${slug}`
      : "";

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Pilih ukuran dulu ya 🙂");
      return;
    }

    const whatsappNumber = "6285659191322";

    const message = `
    Halo admin Kewirausahaan KEPANG 👋

    Saya tertarik untuk membeli merchandise berikut:

    • Produk  : ${product.name}
    • Ukuran  : ${selectedSize}
    • Harga   : ${IDRFormat(product.price)}

    Link produk:
    ${currentUrl}

    Mohon info ketersediaan dan cara pemesanannya ya.
    Terima kasih 🙏
    `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="mt-12 flex w-full flex-col gap-12 px-8 py-16 md:mt-32 md:flex-row md:px-16">
      <MerchProductDetailGallery pics={product.pics} />
      <div className="flex w-full flex-col gap-8 lg:w-5/12">
        <Typography size="title" weight="bold" text={product.name} />
        <div className="flex w-full items-center gap-2">
          <Typography
            size="title"
            weight="medium"
            text={IDRFormat(product.price)}
          />
          <Typography
            size="regular"
            weight="regular"
            text={IDRFormat(product.price * 2)}
            className="text-zinc-400 line-through"
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Typography
            size="large"
            weight="bold"
            text="SIZE"
            className="text-zinc-400"
          />
          <div className="flex w-full flex-wrap gap-4">
            {product?.sizes?.map((size) => (
              <Button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border-brown flex cursor-pointer items-center justify-center rounded-full border px-6 py-6 ${
                  selectedSize === size
                    ? "bg-brown hover:bg-brown text-white"
                    : "text-brown hover:bg-brown bg-transparent hover:text-white"
                }`}
              >
                <Typography size="regular" weight="medium" text={size} />
              </Button>
            ))}
          </div>
        </div>
        <Button
          className="bg-brown hover:bg-dark-brown cursor-pointer py-6 text-zinc-50"
          onClick={() => handleBuyNow()}
        >
          <Typography size="subtitle" weight="medium" text={"Beli Sekarang"} />
        </Button>
        <Typography
          size="small"
          weight="regular"
          text={product.description}
          className="text-zinc-500"
        />
      </div>
    </div>
  );
}
