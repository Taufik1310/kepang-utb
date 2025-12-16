import { notFound } from "next/navigation";
import { GetAllProduct, GetDetailProduct } from "@/lib/product";
import ClientPage from "./ClientPage";

export async function generateStaticParams() {
  const products = GetAllProduct();

  return products.map((product) => ({
    slug: product.id,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const product = GetDetailProduct(params.slug);

  if (!product) return notFound();

  return <ClientPage product={product} slug={params.slug} />;
}
