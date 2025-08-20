import { Suspense } from "react";

import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/blocks/header-01/mode-toggle";
import { Counter } from "@/components/counter";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-black transition-all duration-300 dark:bg-black dark:text-white">
      <div className="max-w-3xl space-y-10 text-center">
        <h1 className="text-6xl font-semibold">Next.js Dark Mode Tutorial</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ad
          obcaecati reiciendis dolorem odio qui nisi aperiam, assumenda
          reprehenderit alias porro omnis commodi libero placeat voluptate amet
          sunt aliquam facilis.
        </p>
        <div className="space-x-4">
          <Button variant="destructive">Button 1</Button>
          <Button variant="secondary">Button 2</Button>
        </div>
        <div className="space-x-4">
          <Suspense>
            <ModeToggle />
          </Suspense>
        </div>
        <div className="" >
          <Counter />
        </div>
      </div>
    </div>
  );
}
