"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { company, nav, whatsappLink } from "@/lib/data";
import { Button } from "./Button";

export function Logo({ size = 46 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex shrink-0 items-center justify-center rounded-full bg-white" style={{ width: size, height: size }}>
        <Image src="/img/logo.png" alt="" width={size - 6} height={size - 6} priority />
      </span>
      <span className="text-[1.6rem] font-semibold leading-none tracking-[-0.05em] text-white">
        FV <span className="font-medium text-sun">Energia Solar</span>
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-ink" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[calc(1160px+1.875rem)] items-center justify-between gap-5 px-[0.937rem] py-4">
        <a href="#inicio" aria-label={company.name}>
          <Logo />
        </a>

        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <ul className="flex items-center">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-5 py-1.5 text-[0.9375rem] font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={whatsappLink()} external>
            Solicite um orçamento
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="flex h-11 w-11 flex-col items-start justify-center gap-1 rounded-full bg-white pl-3 lg:hidden"
        >
          <span className={`block h-0.5 w-5 rounded bg-ink transition ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-0.5 rounded bg-ink transition-all ${open ? "w-5 -translate-y-[3px] -rotate-45" : "w-3.5"}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-[0.937rem] pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-4 text-xl font-medium text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href={whatsappLink()} external>
              Solicite um orçamento
            </Button>
          </div>
          <div className="mt-8 text-white/70">
            <p>{company.phone}</p>
            <p>{company.email}</p>
          </div>
        </div>
      )}
    </header>
  );
}
