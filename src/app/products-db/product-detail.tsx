"use client";

import { useOptimistic } from "react";
import { removeProduct } from "@/actions/products";
import Link from "next/link";
import Form from "next/form";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export const ProductDetail = ({ products }: { products: Product[] }) => {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    },
  );

  const removeProductById = async (productId: number) => {
    setOptimisticProducts(productId);
    await removeProduct(productId);
  };

  return (
    <ul className="space-y-4 p-4">
      {optimisticProducts.map((product) => (
        <li
          key={product.id}
          className="rounded-lg bg-white p-4 text-gray-700 shadow-md"
        >
          <h2 className="text-xl font-semibold">
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
          </h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <div className="mt-4 flex justify-between">
            <Link
              href={`/products-db/${product.id}`}
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              Edit
            </Link>
            <Form action={removeProductById.bind(null, product.id)}>
              <button
                type="submit"
                className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none"
              >
                Delete
              </button>
            </Form>
          </div>
        </li>
      ))}
    </ul>
  );
};
