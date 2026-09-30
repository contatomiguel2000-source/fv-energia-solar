import { company, nav, serviceLinks, whatsappLink } from "@/lib/data";
import { Logo } from "./Header";

function NE() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="currentColor" aria-hidden="true">
      <path d="M21 0h6v17.8L39.6 5.2l4.2 4.2L31.2 22H48v6H31.2l12.6 12.6-4.2 4.2L27 32.2V48h-6V32.2L8.4 44.8l-4.2-4.2L16.8 28H0v-6h16.8L4.2 9.4l4.2-4.2L21 17.8z" />
    </svg>
  );
}

export function Footer() {
  const socials = [
    { label: "Instagram", href: company.instagram },
    { label: "Facebook", href: company.facebook },
    { label: "WhatsApp", href: whatsappLink() },
  ];

  return (
    <footer id="contato" className="bg-ink text-white">
      <div className="mx-auto max-w-[calc(1160px+1.875rem)] px-[0.937rem]">
        <div className="grid gap-10 py-[8.125rem] max-md:py-20 lg:grid-cols-[0.8fr_2.2fr]">
          <div className="flex max-w-[24.0625rem] flex-col gap-[2.8125rem] lg:gap-[6.5625rem]">
            <div className="flex flex-col gap-[2.8125rem]">
              <Logo size={50} />
              <p className="m-0 text-white/90">
                Energia solar residencial, comercial, industrial e rural com equipe própria, projetos sob
                medida e suporte humanizado do primeiro contato ao pós-instalação.
              </p>
            </div>
            <div className="flex flex-col gap-1.5 text-sm font-medium">
              <span className="w-fit border-b border-white pb-0.5">{company.tagline}</span>
              <span className="w-fit border-b border-white pb-0.5">CNPJ: {company.cnpj}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-[30px]">
            <ul className="flex w-full max-w-[180px] flex-col gap-[1.875rem]">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between border-b-2 border-[#dfe6ef] text-[1.875rem] font-medium leading-tight tracking-[-0.06rem]"
                  >
                    {s.label}
                    <NE />
                    <span className="absolute inset-x-0 -bottom-[2px] h-[2px] origin-right scale-x-0 bg-sun transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-white/90 transition-colors hover:text-sun">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-white/90 transition-colors hover:text-sun">
                    {s}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex max-w-[14rem] flex-col gap-[3.75rem]">
              <div className="flex flex-col gap-3">
                <h3 className="t-h5 m-0">Contato</h3>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-sun">
                  {company.phone}
                </a>
                <span className="text-white/90 [overflow-wrap:anywhere]">{company.email}</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="t-h5 m-0">Endereço</h3>
                <p className="m-0 text-white/90">{company.address}</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-4 border-t border-white/20 py-[1.6875rem]"
        >
          <span className="t-big whitespace-nowrap text-white transition-colors group-hover:text-sun max-md:text-[15vw]">Fale conosco</span>
          <Star className="spin-slow h-[clamp(2.5rem,6vw,5.6rem)] w-[clamp(2.5rem,6vw,5.6rem)] shrink-0 text-sun" />
        </a>
      </div>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.4.7 4.6 1.8 6.5L3 29l7.1-2.1c1.8 1 3.8 1.5 5.9 1.5 7 0 12.7-5.6 12.7-12.6S23 3 16 3Zm0 23.1c-1.9 0-3.8-.5-5.4-1.5l-.4-.2-4.2 1.2 1.2-4.1-.3-.4a10.4 10.4 0 0 1-1.6-5.5C5.3 9.8 10.1 5.1 16 5.1s10.7 4.7 10.7 10.5S21.9 26.1 16 26.1Zm5.9-7.8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5 1-1.8.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.7 5.8 5.1 2.2.9 3 1 4.1.8.7-.1 2-.8 2.3-1.6.3-.8.3-1.4.2-1.6l-.5-.3Z" />
        </svg>
      </a>
    </footer>
  );
}
