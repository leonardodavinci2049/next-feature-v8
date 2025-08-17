
import { getProducts } from "@/services/prisma-db";
import { ProductDetail } from "./product-detail";
import { Product } from "./types/product.type";



export default async function ProductsPrismaDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  return <ProductDetail products={products} />;
}
