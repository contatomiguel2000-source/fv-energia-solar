"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides, testimonials, whatsappLink } from "@/lib/data";
import { Button } from "./Button";

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(id);
  }, [active]);

  return (
    <section id="inicio" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-black">
      {heroSlides.map((s, i) => (
        <div key={s.image} className={`hero-slide absolute inset-0 ${i === active ? "is-active" : ""}`}>
          <Image src={s.image} alt="" fill priority={i === 0} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />
        </div>
      ))}

      <div className="relative mx-auto flex h-full max-w-[calc(1160px+1.875rem)] items-center px-[0.937rem]">
        <div className="relative w-full">
          {heroSlides.map((s, i) => (
            <div
              key={s.title}
              className={`hero-copy flex max-w-[33.125rem] flex-col items-start gap-[1.875rem] ${
                i === 0 ? "relative" : "absolute inset-x-0 top-0"
              } ${i === active ? "is-active" : ""}`}
              aria-hidden={i !== active}
            >
              <h1 className="t-h1 m-0 text-white">{s.title}</h1>
              <Button href={whatsappLink()} external>
                Simule sua economia
              </Button>
            </div>
          ))}

          <div className="mt-24 flex items-center gap-[0.9375rem]">
            <div className="flex">
              {testimonials.slice(0, 3).map((t, i) => (
                <span
                  key={t.name}
                  className={`relative block h-[55px] w-[55px] overflow-hidden rounded-full border-2 border-white/80 bg-sun ${i ? "-ml-4" : ""}`}
                >
                  <Image src={t.image} alt="" fill sizes="55px" className="object-cover object-top" />
                </span>
              ))}
            </div>
            <p className="flex items-center gap-1.5 text-base font-medium text-white">
              <span className="text-sun">★</span> 5.0 ( avaliações dos nossos clientes )
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 flex h-[30px] w-20 -translate-x-1/2 translate-y-1 scale-[1.3] items-start justify-center gap-1.5 rounded-t-[60px] bg-white pt-2 shadow-[0_10px_100px_#00000080]">
        {heroSlides.map((s, i) => (
          <button
            key={s.image}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-colors ${i === active ? "bg-ink" : "bg-[#9a9a9a]"}`}
          />
        ))}
      </div>
    </section>
  );
}
