import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";

// import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

interface NavbarProps {
  name: string;
}

export function Navbar({ name }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  //   const router = useNavigate();
  //   const pathname = useLocation();
  //   const searchParams = useSearchParams();

  const handleOpenBooking = () => {};

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Programs", to: "" },
    { name: "Transformation", to: "" },
    { name: "About", to: "" },
    { name: "Stories", to: "" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm"
            : "bg-background",
        )}
      >
        <div className="container mx-auto px-5 md:px-12 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold text-foreground">{name}</div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-primary font-semibold hover:text-primary/70 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={handleOpenBooking}
              className="hidden md:inline-flex"
            >
              Apply for Coaching
            </Button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-primary/60 z-[50] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 w-[80%] max-w-[300px] bg-background z-[60] p-8 flex flex-col gap-6 shadow-xl transition-transform duration-300 ease-out md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="text-xl font-bold text-foreground mb-4">{name}</div>
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Button
          onClick={() => {
            handleOpenBooking();
            setIsOpen(false);
          }}
          className="mt-4 w-full"
        >
          Apply for Coaching
        </Button>
      </div>
    </>
  );
}
