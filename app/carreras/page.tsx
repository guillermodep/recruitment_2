import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const jobs = [
  {
    id: 1,
    title: "Senior Data Engineer",
    location: "Santiago, Chile",
    type: "Full-time",
    category: "Datos",
    description:
      "Buscamos un Data Engineer Senior para liderar proyectos de big data y analytics en una importante institución financiera.",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    location: "Buenos Aires, Argentina",
    type: "Full-time",
    category: "DevOps",
    description:
      "Únete a nuestro equipo de DevOps para implementar y mantener infraestructura cloud en una de las empresas de e-commerce más grandes de Latinoamérica.",
  },
  {
    id: 3,
    title: "Cloud Architect",
    location: "Santiago, Chile",
    type: "Full-time",
    category: "Cloud",
    description:
      "Diseña y lidera la implementación de soluciones cloud empresariales para una importante institución bancaria.",
  },
  {
    id: 4,
    title: "Site Reliability Engineer",
    location: "São Paulo, Brasil",
    type: "Full-time",
    category: "SRE",
    description:
      "Únete a nuestro equipo de SRE para mejorar la confiabilidad de sistemas en una reconocida institución financiera multinacional.",
  },
  {
    id: 5,
    title: "Senior Cloud Architect",
    location: "Quito, Ecuador",
    type: "Remoto",
    category: "Cloud",
    description:
      "Lidera la transformación digital y la estrategia cloud de una de las instituciones financieras más importantes de Ecuador.",
  },
  {
    id: 6,
    title: "Cloud Security Engineer",
    location: "Guayaquil, Ecuador",
    type: "Remoto",
    category: "Cloud",
    description:
      "Implementa y gestiona soluciones de seguridad en entornos cloud para el grupo retail más grande de Ecuador.",
  },
  {
    id: 7,
    title: "AWS Solutions Architect",
    location: "Quito, Ecuador",
    type: "Remoto",
    category: "Cloud",
    description:
      "Diseña e implementa arquitecturas cloud nativas en AWS para una importante institución financiera ecuatoriana.",
  },
  {
    id: 8,
    title: "Multi-Cloud Engineer",
    location: "Cuenca, Ecuador",
    type: "Remoto",
    category: "Cloud",
    description:
      "Gestiona y optimiza infraestructura en múltiples proveedores cloud (AWS, Azure, GCP) para una empresa líder en innovación tecnológica.",
  },
  {
    id: 9,
    title: "Cloud Infrastructure Engineer",
    location: "Quito, Ecuador",
    type: "Remoto",
    category: "Cloud",
    description:
      "Desarrolla y mantiene la infraestructura cloud para aplicaciones bancarias críticas en una reconocida institución financiera.",
  }
];

export default function CareersPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Oportunidades Laborales</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Explora las mejores oportunidades en tecnología con empresas líderes
          en América Latina.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="datos">Datos</SelectItem>
            <SelectItem value="devops">DevOps</SelectItem>
            <SelectItem value="cloud">Cloud</SelectItem>
            <SelectItem value="sre">SRE</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Ubicación" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="ecuador">Ecuador</SelectItem>
            <SelectItem value="chile">Chile</SelectItem>
            <SelectItem value="argentina">Argentina</SelectItem>
            <SelectItem value="brasil">Brasil</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="fulltime">Full-time</SelectItem>
            <SelectItem value="remoto">Remoto</SelectItem>
            <SelectItem value="hibrido">Híbrido</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Job Listings */}
      <div className="grid gap-6">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {job.location}
                  </CardDescription>
                </div>
                <Button asChild>
                  <a 
                    href="https://www.linkedin.com/company/the-uk-recruitment-co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Postular
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{job.description}</p>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {job.category}
                </span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {job.type}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}