import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Recruitment America</h3>
            <p className="text-sm text-muted-foreground">
              Conectando el mejor talento tecnológico con empresas líderes en
              América Latina desde 2020.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios" className="text-muted-foreground hover:text-foreground">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-foreground">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/carreras" className="text-muted-foreground hover:text-foreground">
                  Carreras
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                contacto@recruitmentamerica.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                +56 2 2345 6789
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Santiago, Chile
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Recruitment America. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}