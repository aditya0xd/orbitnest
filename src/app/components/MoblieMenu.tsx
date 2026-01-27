import { useState } from "react";
import { Menu } from "lucide-react";
import { Drawer } from "vaul";
import { Button } from "./ui/button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setOpen(false); // Close menu first
    // Small delay to allow the drawer close animation to start before scrolling
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const bookACall = () => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById("contact");
      el?.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        const input = document.getElementById(
          "contact-first-name"
        ) as HTMLInputElement | null;
        input?.focus();
      }, 1000);
    }, 300);
  };

  return (
    <div className="md:hidden">
      <Drawer.Root open={open} onOpenChange={setOpen} direction="left">
        <Drawer.Trigger asChild>
          <button className="p-2">
            <Menu size={28} />
          </button>
        </Drawer.Trigger>

        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-3xl z-40" />

          <Drawer.Content className="fixed inset-y-0 left-0 w-[80%] max-w-[300px] bg-background p-6 z-50">
            <nav className="flex flex-col gap-6 mt-10 text-lg font-semibold">
              <button
                onClick={() => scrollToSection("programs")}
                className="text-left"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left"
              >
                Mechanism
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left"
              >
                FAQ
              </button>
              <Button className="w-full mt-4" onClick={bookACall}>
                Book a Call
              </Button>
            </nav>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}
