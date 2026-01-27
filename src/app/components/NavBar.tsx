import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "./ui/menubar";
import { MobileMenu } from "./MoblieMenu";

import { Button } from "./ui/button";

export function Navbar({ name }: { name: string }) {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-5 h-[72px] flex items-center justify-between gap-20">
        <div className="flex items-center gap-4">
          <img src="/orbitnest-logo.png" alt="Logo" width={40} height={40} />
          <div className="text-xl font-bold">{name}</div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex justify-between items-center gap-8">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Programs</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Online</MenubarItem>
                <MenubarItem>Offline</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>About</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Team</MenubarItem>
                <MenubarItem>Story</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Stories</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Clients</MenubarItem>
                <MenubarItem>Results</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button
          onClick={() => {
              const el = document.getElementById("contact-form");
              el?.scrollIntoView({ behavior: "smooth" });

              // wait for scroll, then focus
              setTimeout(() => {
                const input = document.getElementById(
                  "contact-first-name"
                ) as HTMLInputElement | null;
                input?.focus();
              }, 1500);
            }}
            >Book a Call</Button>
        </div>

        {/* Mobile */}
        <MobileMenu />
      </div>
    </header>
  );
}
