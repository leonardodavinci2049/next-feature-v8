"use client";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Salvando..." : "Salvar Produto"}
    </Button>
  );
};
