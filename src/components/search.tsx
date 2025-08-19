import Form from "next/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Search() {
  return (
    <Form action="/products-db" className="flex gap-2">
      <Input name="query" className="flex-1" placeholder="Search products" />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
