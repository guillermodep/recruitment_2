"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  nombre: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  empresa: z.string().min(2, "La empresa es requerida"),
  tipo: z.string({
    required_error: "Por favor seleccione un tipo de consulta",
  }),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      empresa: "",
      tipo: "",
      mensaje: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Aquí iría la lógica de envío del formulario
      console.log(values);
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container py-12">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">Contáctanos</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Estamos aquí para ayudarte a encontrar el mejor talento tecnológico
          para tu empresa.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="mb-6 text-2xl font-semibold">
              Información de Contacto
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>contacto@recruitmentamerica.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>+56 2 2345 6789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-2xl font-semibold">Horario de Atención</h2>
            <div className="space-y-2">
              <p>Lunes a Viernes: 9:00 - 18:00</p>
              <p>Sábado y Domingo: Cerrado</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg border p-6">
          <h2 className="mb-6 text-2xl font-semibold">Envíanos un Mensaje</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="tu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="empresa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre de tu empresa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tipo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Consulta</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo de consulta" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="talento">Busco Talento</SelectItem>
                        <SelectItem value="trabajo">Busco Trabajo</SelectItem>
                        <SelectItem value="informacion">
                          Información General
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mensaje"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="¿En qué podemos ayudarte?"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}