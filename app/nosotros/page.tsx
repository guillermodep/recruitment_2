import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Target, Award } from "lucide-react";

const values = [
  {
    title: "Excelencia",
    description: "Buscamos la excelencia en cada proceso de reclutamiento.",
    icon: Award,
  },
  {
    title: "Especialización",
    description: "Nos enfocamos exclusivamente en perfiles tecnológicos.",
    icon: Target,
  },
  {
    title: "Compromiso",
    description: "Construimos relaciones duraderas con clientes y candidatos.",
    icon: Users,
  },
  {
    title: "Innovación",
    description: "Utilizamos tecnología avanzada en nuestros procesos.",
    icon: Building2,
  },
];

const team = [
  {
    name: "Ana García",
    role: "CEO & Fundadora",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    bio: "15 años de experiencia en reclutamiento tecnológico",
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Operaciones",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Experto en procesos de selección y desarrollo organizacional",
  },
  {
    name: "María Torres",
    role: "Tech Recruiter Senior",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    bio: "Especialista en perfiles DevOps y Cloud",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Sobre Nosotros</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Somos expertos en conectar el mejor talento tecnológico con empresas
          líderes en América Latina.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mb-20 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Nuestra Misión</h2>
          <p className="text-muted-foreground">
            Facilitar la transformación digital de las empresas en América Latina
            conectándolas con el mejor talento tecnológico, mientras creamos
            oportunidades de desarrollo profesional excepcionales.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">Nuestra Visión</h2>
          <p className="text-muted-foreground">
            Ser reconocidos como el referente en reclutamiento tecnológico en
            América Latina, destacando por nuestra especialización y excelencia
            en el servicio.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-20">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Nuestros Valores
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title}>
                <CardContent className="pt-6">
                  <Icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-center text-xl font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-center text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="mb-8 text-center text-3xl font-bold">
          Nuestro Equipo
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name}>
              <CardContent className="pt-6">
                <div className="mb-4 aspect-square overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-center text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="mb-2 text-center text-sm text-primary">
                  {member.role}
                </p>
                <p className="text-center text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}