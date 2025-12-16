import Typography from "@/components/_shared/Typography";
import { GetAllProduct } from "@/lib/product";
import MerchCatalogProductCard from "./ProductCard";
import Link from "next/link";

const PRODUCTS = GetAllProduct();

export default function MerchCatalog() {
  return (
    <div className="flex w-full flex-col gap-8">
      <Typography
        size="regular"
        weight="bold"
        text="Semua Produk"
        className="uppercase"
      />
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((product, index) => {
          const isComingSoon = product.availability === "coming_soon";

          return (
            <Link key={index} href={`/merchandise/${product.id}`}>
              {!isComingSoon ? (
                <MerchCatalogProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  pics={product.pics}
                />
              ) : (
                <MerchCatalogProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  pics={product.pics}
                  disabled
                />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
