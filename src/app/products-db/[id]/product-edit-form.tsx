"use client";

import { FormState, editProduct } from "@/actions/products";
import { Submit } from "@/components/submit";

import { useActionState } from "react";
import { Product } from "../types/product.type";

export default function ProductEditForm({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction] = useActionState(editProductWithId, initialState);

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-8">
        <h1 className="text-foreground mb-2 text-2xl font-bold">
          Editar Produto
        </h1>
        <p className="text-muted-foreground">
          Atualize os dados do produto no banco de dados
        </p>
      </div>

      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm leading-none font-medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
            Título
            <input
              type="text"
              className="border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              name="title"
              defaultValue={product.title}
            />
          </label>
          {state.errors.title && (
            <p className="text-destructive text-sm font-medium">
              {state.errors.title}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm leading-none font-medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
            Preço
            <input
              type="number"
              className="border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              name="price"
              step="0.01"
              min="0"
              defaultValue={product.price}
            />
          </label>
          {state.errors.price && (
            <p className="text-destructive text-sm font-medium">
              {state.errors.price}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm leading-none font-medium text-gray-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-white">
            Descrição
            <textarea
              className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 resize-vertical aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              name="description"
              rows={4}
              defaultValue={product.description ?? ""}
            />
          </label>
          {state.errors.description && (
            <p className="text-destructive text-sm font-medium">
              {state.errors.description}
            </p>
          )}
        </div>

        <Submit />
      </form>
    </div>
  );
}
