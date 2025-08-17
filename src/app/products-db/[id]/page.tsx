import ProductEditForm from "./product-edit-form";

import { getProducts } from "@/services/prisma-db";
import { notFound } from "next/navigation";
import { Product } from "../types/product.type";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const products: Product[] = await getProducts(id);
  const product: Product | null = products.length > 0 ? products[0] : null;

  if (!product) {
    notFound();
  }

  return <ProductEditForm product={product} />;
}
