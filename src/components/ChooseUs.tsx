"use client";

import Image from "next/image";
import { useState } from "react";
import { chooseUs, whatsappLink } from "@/lib/data";
import { Button } from "./Button";
import { Reveal } from "./Reveal";

export function ChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <section className="pb-[8.125rem] pt-[8.75rem] max-md:py-20">
      <div className="mx-auto flex max-w-[calc(1160px+1.875rem)] flex-col gap-[1.875rem] px-[0.937rem] lg:flex-row lg:gap-16">
        <Reveal className="relative aspect-[650/870] w-full overflow-hidden rounded-[1.25rem] lg:flex-1">
          {chooseUs.map((c, i) => (
            <Image
              key={c.image}
              src={c.image}
              alt={c.title}
              fill
              sizes="(min-width: 1024px) 675px, 100vw"
              className={`object-cover transition-all duration-700 ${i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
            />
          ))}
        </Reveal>

        <div className="flex flex-1 flex-col justify-between gap-14">
          <Reveal className="flex max-w-[40rem] flex-col items-start">
            <span className="t-sub">Por que nos escolher</span>
            <h2 className="t-h2 mb-[1.875rem] mt-4">
              Soluções em energia limpa com confiança, experiência e suporte de ponta a ponta
            </h2>
            <Button href={whatsappLink()} external>
              Fale com a gente
            </Button>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-10">
            <ul className="flex w-full flex-col">
              {chooseUs.map((c, i) => (
                <li key={c.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`relative flex w-full items-center justify-between border-b border-black/20 pb-5 text-left ${i ? "pt-[2.3rem]" : ""}`}
                  >
                    <span className="t-h5">{c.title}</span>
                    <svg
                      viewBox="0 0 16 16"
                      className={`h-4 w-4 shrink-0 transition-transform duration-500 ${i === active ? "rotate-0" : "-rotate-45"}`}
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span
                      className={`absolute inset-x-0 bottom-0 h-px origin-left bg-black transition-transform duration-500 ${
                        i === active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
            <div className="grid items-center gap-6 sm:grid-cols-2">
              <div className="relative aspect-[315/209] overflow-hidden rounded-[1.25rem]">
                <Image src="/img/hero-solar.jpg" alt="Usina solar" fill sizes="377px" className="object-cover" />
              </div>
              <p className="t-body m-0">
                Unimos tecnologia e atendimento próximo para que casas, empresas e propriedades rurais gerem a
                própria energia com economia e o menor impacto ambiental.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
