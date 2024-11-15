import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    id: 1,
    title: "Tendencias en DevOps para 2024",
    excerpt:
      "Descubre las principales tendencias que están transformando el panorama DevOps este año.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    date: "2024-01-15",
    author: "Carlos Rodríguez",
    category: "DevOps",
  },
  {
    id: 2,
    title: "Guía de Carrera: Cómo convertirse en Data Scientist",
    excerpt:
      "Todo lo que necesitas saber para iniciar y desarrollar una carrera exitosa en Data Science.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    date: "2024-01-10",
    author: "Ana García",
    category: "Datos",
  },
  {
    id: 3,
    title: "Mejores Prácticas en Cloud Security",
    excerpt:
      "Aprende a proteger tus aplicaciones y datos en la nube con estas prácticas recomendadas.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    date: "2024-01-05",
    author: "María Torres",
    category: "Cloud",
  },
  {
    id: 4,
    title: "El Rol del SRE en la Transformación Digital",
    excerpt:
      "Cómo los Site Reliability Engineers están impulsando la innovación empresarial.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    date: "2024-01-01",
    author: "Juan Pérez",
    category: "SRE",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Insights, tendencias y consejos sobre tecnología y desarrollo
          profesional.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto">
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {posts[0].category}
              </span>
              <h2 className="mb-4 text-2xl font-bold">{posts[0].title}</h2>
              <p className="mb-4 text-muted-foreground">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Por {posts[0].author} • {posts[0].date}
                </div>
                <Link
                  href={`/blog/${posts[0].id}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Post Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(1).map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                {post.category}
              </span>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Por {post.author}
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Leer más →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}