"use client";

import { FormState, createProduct } from "@/actions/products";
import { Submit } from "@/components/submit";
import { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction] = useActionState(createProduct, initialState);

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-8">
        <h1 className="text-foreground mb-2 text-2xl font-bold">
          Adicionar Produto
        </h1>
        <p className="text-muted-foreground">
          Preencha os dados para adicionar um novo produto ao banco de dados
        </p>
      </div>

      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Título</Label>
          <Input
            id="title"
            type="text"
            name="title"
            placeholder="Digite o título do produto"
            aria-invalid={!!state.errors.title}
          />
          {state.errors.title && (
            <p className="text-destructive text-sm font-medium">
              {state.errors.title}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Preço</Label>
          <Input
            id="price"
            type="number"
            name="price"
            placeholder="0.00"
            step="0.01"
            min="0"
            aria-invalid={!!state.errors.price}
          />
          {state.errors.price && (
            <p className="text-destructive text-sm font-medium">
              {state.errors.price}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descrição</Label>
          <textarea
            id="description"
            name="description"
            placeholder="Digite a descrição do produto"
            rows={4}
            className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 resize-vertical aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            aria-invalid={!!state.errors.description}
          />
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
