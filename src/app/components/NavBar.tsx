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
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bookACall = () => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });

    // wait for scroll, then focus
    setTimeout(() => {
      const input = document.getElementById(
        "contact-first-name"
      ) as HTMLInputElement | null;
      input?.focus();
    }, 1200);
  };

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-5 h-[72px] flex items-center justify-between gap-20">
        <div className="flex items-center gap-4">
          <img src="/orbitnest-logo.png" alt="Logo" width={40} height={40} />
          <div className="text-xl font-bold font-heading tracking-tight">{name}</div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex justify-between items-center gap-8">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Programs</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => scrollToSection("programs")}>
                  Online
                </MenubarItem>
                <MenubarItem onClick={() => scrollToSection("programs")}>
                  Offline
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Expertise</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => scrollToSection("services")}>
                  Services
                </MenubarItem>
                <MenubarItem onClick={() => scrollToSection("qualification")}>
                  Who it's for
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Results</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => scrollToSection("how-it-works")}>
                  Our Mechanism
                </MenubarItem>
                <MenubarItem onClick={() => scrollToSection("faq")}>
                  FAQ
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button onClick={bookACall}>Book a Call</Button>
        </div>

        {/* Mobile */}
        <MobileMenu />
      </div>
    </header>
  );
}
