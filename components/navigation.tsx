"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/carreras", label: "Carreras" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Recruitment America</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  pathname === href
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              className="ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Toggle Menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t py-4 md:hidden">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  pathname === href
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}