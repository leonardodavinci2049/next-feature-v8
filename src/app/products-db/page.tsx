import { getProducts } from "@/services/prisma-db";
import { ProductDetail } from "./product-detail";
import { Product } from "./types/product.type";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Search from "@/components/search";




export default async function ProductsDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  return(
    <div>
      <div className="flex justify-between items-end p-4">
         <Search />
        <Link href="/products-db-create">
          <Button variant="destructive">Create Product</Button>
        </Link>
      </div>
      <ProductDetail products={products} />;

    </div>
  )
  
}

