import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Cloud, Server, LineChart, Users, Search, Clock, Award } from "lucide-react";

const services = [
  {
    title: "Reclutamiento en Datos",
    description: "Identificamos y seleccionamos expertos en Data Science, Analytics y Big Data.",
    icon: Database,
    features: [
      "Data Scientists",
      "Data Engineers",
      "Analytics Managers",
      "BI Specialists"
    ]
  },
  {
    title: "Talento DevOps",
    description: "Conectamos especialistas en automatización y entrega continua.",
    icon: Server,
    features: [
      "DevOps Engineers",
      "Platform Engineers",
      "Release Managers",
      "Automation Specialists"
    ]
  },
  {
    title: "Expertos Cloud",
    description: "Reclutamos profesionales certificados en las principales plataformas cloud.",
    icon: Cloud,
    features: [
      "Cloud Architects",
      "AWS/Azure/GCP Engineers",
      "Cloud Security Engineers",
      "Cloud Operations"
    ]
  },
  {
    title: "Especialistas SRE",
    description: "Seleccionamos ingenieros enfocados en confiabilidad y operaciones.",
    icon: LineChart,
    features: [
      "Site Reliability Engineers",
      "Systems Engineers",
      "Performance Engineers",
      "Reliability Architects"
    ]
  }
];

const benefits = [
  {
    title: "Búsqueda Especializada",
    description: "Proceso de selección enfocado exclusivamente en perfiles tecnológicos.",
    icon: Search
  },
  {
    title: "Red de Talentos",
    description: "Acceso a una amplia red de profesionales pre-evaluados.",
    icon: Users
  },
  {
    title: "Proceso Ágil",
    description: "Metodología optimizada para reducir tiempos de contratación.",
    icon: Clock
  },
  {
    title: "Garantía de Calidad",
    description: "Evaluación técnica exhaustiva de cada candidato.",
    icon: Award
  }
];

export default function ServicesPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Nuestros Servicios</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Especializados en la búsqueda y selección de talento tecnológico para
          impulsar la transformación digital de tu empresa.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mb-20 grid gap-8 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="transition-all hover:shadow-lg">
              <CardHeader>
                <Icon className="mb-4 h-12 w-12 text-primary" />
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Benefits Section */}
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold">¿Por qué elegirnos?</h2>
        <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
          Nuestro enfoque especializado nos permite encontrar el talento adecuado
          de manera eficiente y efectiva.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card key={benefit.title} className="text-center">
                <CardContent className="pt-6">
                  <Icon className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}