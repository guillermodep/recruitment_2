import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Database,
  Cloud,
  Server,
  LineChart,
} from "lucide-react";

const specialties = [
  {
    title: "Datos",
    description: "Expertos en Big Data, Analytics y Ciencia de Datos",
    icon: Database,
  },
  {
    title: "DevOps",
    description: "Especialistas en automatización y entrega continua",
    icon: Server,
  },
  {
    title: "Cloud",
    description: "Profesionales en AWS, Azure y Google Cloud",
    icon: Cloud,
  },
  {
    title: "SRE",
    description: "Site Reliability Engineering y operaciones",
    icon: LineChart,
  },
];

const clients = [
  { 
    name: "Banco Santander", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Banco_Santander_Logotipo.svg/2560px-Banco_Santander_Logotipo.svg.png",
    width: 200,
    height: 50
  },
  { 
    name: "Itaú", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banco_Ita%C3%BA_logo.svg",
    width: 150,
    height: 50
  },
  { 
    name: "Banco de Chile", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Banco_de_Chile_Logo.png/1200px-Banco_de_Chile_Logo.png",
    width: 200,
    height: 50
  },
  { 
    name: "Assist Card", 
    logo: "https://www.todoriesgo.com.ar/wp-content/uploads/2022/10/assist-card-1.png",
    width: 150,
    height: 50
  },
  { 
    name: "MercadoLibre", 
    logo: "https://cdn.worldvectorlogo.com/logos/mercadolibre.svg",
    width: 200,
    height: 50
  },
  { 
    name: "Banco Macro", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Logo_Banco_Macro.svg/2560px-Logo_Banco_Macro.svg.png",
    width: 180,
    height: 50
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1511497584788-876760111969"
          alt="Bosque verde"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-[80vh] w-full">
          <div className="container flex min-h-[80vh] items-center">
            <div className="max-w-2xl text-white">
              <div className="mb-2">
                <h1 className="mb-1 font-light tracking-tight text-6xl">
                  Recruitment America
                </h1>
                <p className="text-sm tracking-widest uppercase text-gray-300">
                  a Smart Company
                </p>
              </div>
              <p className="mb-8 text-xl">
                Especialistas en reclutamiento de profesionales en Datos, DevOps,
                Cloud y SRE para empresas líderes en América Latina.
              </p>
              <div className="flex space-x-4">
                <Button asChild size="lg" variant="default">
                  <Link href="/contacto">Encuentra Talento</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/carreras">Postúlate</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties Section */}
        <section className="bg-background py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Nuestras Especialidades
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {specialties.map((specialty) => {
                const Icon = specialty.icon;
                return (
                  <Card
                    key={specialty.title}
                    className="p-6 transition-transform hover:scale-105"
                  >
                    <Icon className="mb-4 h-12 w-12 text-primary" />
                    <h3 className="mb-2 text-xl font-semibold">
                      {specialty.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {specialty.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="border-y bg-muted py-20 overflow-hidden">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Empresas que Confían en Nosotros
            </h2>
            <div className="relative">
              <div className="flex animate-[slide_20s_linear_infinite] space-x-12">
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`${client.name}-${index}`}
                    className="relative flex h-20 w-[200px] shrink-0 items-center justify-center"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      className="object-contain filter grayscale transition-all hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-background py-20">
          <div className="container text-center">
            <h2 className="mb-6 text-3xl font-bold">
              ¿Listo para dar el siguiente paso?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Ya sea que estés buscando talento para tu empresa o tu próxima
              oportunidad profesional, estamos aquí para ayudarte.
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild size="lg">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/carreras">Ver Oportunidades</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}