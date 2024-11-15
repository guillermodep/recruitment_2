"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

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

export function ClientLogos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 3000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {[...clients, ...clients].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="relative flex min-w-[200px] flex-[0_0_200px] items-center justify-center px-4"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={client.width}
              height={client.height}
              className="object-contain transition-all hover:grayscale-0 grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
}