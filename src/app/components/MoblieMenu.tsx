"use client";

import { Menu } from "lucide-react";
import { Drawer } from "vaul";
import { Button } from "./ui/button";

export function MobileMenu() {
  return (
    <div className="md:hidden">
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <button className="p-2">
            <Menu size={28} />
          </button>
        </Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-3xl" />

          <Drawer.Content className="fixed inset-y-0 left-0 w-[80%] max-w-[300px] bg-background p-6 z-50">
            <nav className="flex flex-col gap-6 mt-10 text-lg font-semibold">
              <Drawer.Title className="">Mobile Menu</Drawer.Title>

              <a href="#">Programs</a>
              <a href="#">Transformation</a>
              <a href="#">About</a>
              <a href="#">Stories</a>
              <Button className="p-0">Apply for Coaching</Button>
            </nav>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
