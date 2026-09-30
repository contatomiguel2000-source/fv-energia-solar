"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { services, whatsappLink } from "@/lib/data";
import { Button } from "./Button";

/** Cards fixos que se empilham: o card de baixo encolhe conforme o próximo sobe. */
export function ServiceStack() {
  const cards = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      cards.current.forEach((card, i) => {
        const next = cards.current[i + 1];
        if (!card) return;
        let p = 0;
        if (next) {
          const top = card.getBoundingClientRect().top;
          const nextTop = next.getBoundingClientRect().top;
          const h = card.offsetHeight;
          p = Math.min(Math.max(1 - (nextTop - top) / h, 0), 1);
        }
        card.style.transform = `scale(${1 - p * 0.16})`;
        card.style.filter = `brightness(${1 - p * 0.35})`;
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="flex flex-col gap-10">
      {services.map((s, i) => (
        <div
          key={s.title}
          ref={(el) => {
            cards.current[i] = el;
          }}
          className="sticky top-[80px] origin-top overflow-hidden rounded-[1.25rem] will-change-transform"
        >
          <Image src={s.image} alt={s.title} fill sizes="(min-width: 1630px) 1600px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative flex flex-col items-center px-5 pb-[9rem] pt-[8.75rem] text-center text-white max-md:pb-20 max-md:pt-20">
            <div className="flex flex-col items-center gap-[0.9375rem]">
              <span className="text-lg font-medium">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="t-h2 m-0">{s.title}</h3>
            </div>
            <span className="my-8 block h-[175px] w-px bg-white/40" />
            <div className="flex max-w-[30.7rem] flex-col items-center gap-8">
              <p className="m-0 text-white">{s.text}</p>
              <Button href={whatsappLink(`Olá! Gostaria de um orçamento de ${s.title.toLowerCase()}.`)} external>
                Solicite um orçamento
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
