import Image from "next/image";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { ServiceStack } from "@/components/ServiceStack";
import { ChooseUs } from "@/components/ChooseUs";
import { MissionVideo } from "@/components/MissionVideo";
import { Counter, Reveal } from "@/components/Reveal";
import { asset } from "@/lib/base-path";
import {
  aboutImages,
  benefits,
  company,
  innovation,
  missionStats,
  steps,
  testimonials,
  whatsappLink,
} from "@/lib/data";

const container = "mx-auto w-full max-w-[calc(1160px+1.875rem)] px-[0.937rem]";
const years = new Date().getFullYear() - company.since;

function StatBox({ value, decimals, mark, label }: { value: number; decimals?: number; mark: string; label: string }) {
  return (
    <div className="flex w-full max-w-[220px] flex-col items-center gap-10 rounded-[1.25rem] bg-cream px-[1.875rem] pb-6 pt-[1.875rem] max-md:gap-4 max-md:p-4">
      <div className="flex w-full items-start justify-center gap-1 border-y border-black/20 py-4">
        <Counter value={value} decimals={decimals} className="t-h1" />
        <span className="mt-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[11px] font-semibold text-sun">
          {mark}
        </span>
      </div>
      <span className="text-center text-[0.9375rem] font-medium">{label}</span>
    </div>
  );
}

function BenefitCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="group flex flex-col gap-5">
      <div className="relative aspect-[338/318] overflow-hidden rounded-[1.25rem]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 340px, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <h3 className="t-h5 m-0 text-center">{title}</h3>
    </div>
  );
}

function Avatars({ size = 55 }: { size?: number }) {
  return (
    <div className="flex">
      {testimonials.slice(0, 3).map((t, i) => (
        <span
          key={t.name}
          style={{ width: size, height: size }}
          className={`relative block overflow-hidden rounded-full border-2 border-white bg-sun ${i ? "-ml-4" : ""}`}
        >
          <Image src={t.image} alt="" fill sizes={`${size}px`} className="object-cover object-top" />
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="m-0 flex flex-col gap-[5.3125rem] rounded-[1.25rem] bg-white px-[1.875rem] pb-[1.5625rem] pt-[1.875rem] shadow-[0_19px_60px_#00000014] max-md:gap-10">
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-[0.937rem]">
          <span className="relative block h-[55px] w-[55px] shrink-0 overflow-hidden rounded-full bg-sun">
            <Image src={t.image} alt="" fill sizes="55px" className="object-cover object-top" />
          </span>
          <figcaption className="flex flex-col gap-1">
            <span className="t-h5 leading-tight">{t.name}</span>
            <span className="t-body text-[0.9375rem] leading-tight">{t.role}</span>
          </figcaption>
        </div>
        <span className="text-lg tracking-tight text-sun" aria-label="5 estrelas">
          ★★★★★
        </span>
      </div>
      <blockquote className="t-body m-0 max-w-[20.375rem]">“{t.text}”</blockquote>
    </figure>
  );
}

export default function Home() {
  const cols = [0, 1, 2].map((c) => testimonials.filter((_, i) => i % 3 === c));

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* SOBRE */}
        <section id="sobre" className="relative overflow-hidden pt-[8.125rem] max-md:pt-16">
          <div className={`${container} relative`}>
            <Reveal className="relative z-10 flex flex-col items-center gap-4 pb-[18.75rem] pt-[15.9375rem] text-center max-md:pb-10 max-md:pt-0">
              <h2 className="t-big m-0">Sobre nós</h2>
              <p className="t-body m-0 max-w-[43.125rem]">
                Desde {company.since}, a FV Energia Solar leva energia limpa e renovável para casas, empresas,
                condomínios e propriedades rurais. Projetos sob medida, equipe de instalação própria e suporte
                humanizado para reduzir a conta de luz em até 95% e proteger o planeta.
              </p>
              <div className="mt-6">
                <Button href={whatsappLink()} external>
                  Conheça nossa história
                </Button>
              </div>
            </Reveal>

            <div className="pointer-events-none absolute inset-y-0 inset-x-[0.937rem] max-md:hidden">
              {[
                { cls: "left-[3%] top-[13%] w-[9%] aspect-[127/129]", d: 0 },
                { cls: "left-0 bottom-[30%] w-[8%] aspect-[113/115]", d: 150 },
                { cls: "left-[35%] top-0 w-[10%] aspect-[141/166]", d: 80 },
                { cls: "right-[30%] bottom-0 w-[14%] aspect-[197/286]", d: 220 },
                { cls: "right-0 bottom-[30%] w-[12%] aspect-[169/124]", d: 120 },
              ].map((p, i) => (
                <Reveal key={i} delay={p.d} className={`absolute ${p.cls}`}>
                  <div className="relative h-full w-full overflow-hidden rounded-[1.25rem]">
                    <Image src={aboutImages[i].src} alt={aboutImages[i].alt} fill sizes="240px" className="object-cover" />
                  </div>
                </Reveal>
              ))}
              <Reveal delay={100} className="pointer-events-auto absolute right-0 top-[6%] w-[200px]">
                <StatBox value={years} mark="+" label="Anos de experiência" />
              </Reveal>
              <Reveal delay={200} className="pointer-events-auto absolute bottom-[8%] left-[10%] w-[200px]">
                <StatBox value={99} mark="%" label="Índice de qualidade" />
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-4 md:hidden">
              <StatBox value={years} mark="+" label="Anos de experiência" />
              <StatBox value={99} mark="%" label="Índice de qualidade" />
            </div>
          </div>
        </section>

        {/* INOVAÇÃO */}
        <section className="pt-[8.75rem] max-md:pt-16">
          <div className={`${container} flex flex-col gap-[1.875rem] lg:flex-row lg:gap-20`}>
            <Reveal className="relative aspect-[630/815] w-full overflow-hidden rounded-[1.25rem] lg:flex-1">
              <Image
                src={asset("/img/p-piscina-igarata.jpg")}
                alt="Sistema fotovoltaico instalado pela FV Energia Solar"
                fill
                sizes="(min-width: 1024px) 675px, 100vw"
                className="object-cover"
              />
            </Reveal>
            <div className="flex flex-1 flex-col justify-between gap-[3.75rem]">
              <Reveal>
                <span className="t-sub">Nossa inovação</span>
                <h2 className="t-h2 m-0 mt-4">
                  Soluções em energia limpa para construir um futuro mais inteligente, econômico e sustentável para
                  as próximas gerações
                </h2>
              </Reveal>
              <div className="flex flex-col gap-10">
                <div className="grid gap-8 sm:grid-cols-2">
                  {innovation.map((f, i) => (
                    <Reveal key={f.title} delay={i * 120} className="flex max-w-[20.625rem] flex-col gap-[0.9375rem]">
                      {f.icon === "panel" ? (
                        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                          <path d="M6 5h20l3 14H3L6 5ZM4.5 12h23M12.5 5l-1.5 14M19.5 5l1.5 14M16 19v6M10 27h12" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                          <path d="M9 14a6 6 0 0 1 14 0M7 14h18M11 14v-2m10 2v-2M16 7v3M6 27c0-5 4.5-8 10-8s10 3 10 8" strokeLinecap="round" />
                        </svg>
                      )}
                      <h3 className="t-h5 m-0">{f.title}</h3>
                      <p className="t-body m-0">{f.text}</p>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={200} className="flex flex-col">
                  <span className="t-big">
                    <Counter value={95} />%
                  </span>
                  <span className="t-h5">De economia na conta de luz</span>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* MISSÃO / NÚMEROS */}
        <section className="relative overflow-hidden pb-[8.75rem] pt-[8.125rem] max-md:py-20">
          <div className={container}>
            <Reveal>
              <h2 className="t-h2 m-0 max-w-[293px]">Os números que movem a nossa missão</h2>
            </Reveal>
            <Reveal fade={false} threshold={0.35} className="mt-20 flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-5">
              <div className="flex flex-col items-center gap-20 md:max-w-[21.875rem] md:flex-[0_0_25%] max-md:hidden">
                <span className="block h-[351px] w-px bg-black/20" />
                <div className="flex items-center justify-center gap-[0.9375rem] rounded-lg border border-black/20 px-[0.95rem] py-[1.1rem]">
                  <Avatars size={44} />
                  <span className="text-[0.9375rem] font-medium">Clientes satisfeitos</span>
                </div>
              </div>

              <div className="relative h-[30.9375rem] w-full [perspective:2000px] md:mr-auto md:w-[27%]">
                <MissionVideo src={asset("/video/VIDEO-USINA-02_1.mp4")} />
                <div className="mission-flip absolute inset-0 z-[1] rounded-[1.25rem] bg-ink max-md:hidden">
                  <div className="mission-flip-content flex h-full flex-col justify-center gap-[4.375rem] px-5 md:px-[4.5rem]">
                    {missionStats.map((s) => (
                      <div key={s.label} className="flex items-stretch gap-5">
                        <span className="w-[7px] rounded-[10px] bg-sun" />
                        <div className="flex flex-col gap-2.5 text-white">
                          <span className="text-[2.6rem] font-medium leading-none tracking-[-0.08rem]">{s.value}</span>
                          <span className="text-[0.9375rem]">{s.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 rounded-[1.25rem] bg-ink p-8 md:hidden">
                {missionStats.map((s) => (
                  <div key={s.label} className="flex items-stretch gap-5">
                    <span className="w-[7px] rounded-[10px] bg-sun" />
                    <div className="flex flex-col gap-2 text-white">
                      <span className="text-4xl font-medium leading-none">{s.value}</span>
                      <span className="text-[0.9375rem]">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-[2] flex flex-col items-start gap-[1.875rem] md:flex-[0_0_23%] md:pl-8">
                <p className="t-body m-0">
                  Resultados que refletem nossa dedicação em entregar economia real e um futuro mais limpo e
                  sustentável para todos.
                </p>
                <Button href="#servicos">Nossos serviços</Button>
              </div>
            </Reveal>
          </div>
          <svg
            viewBox="0 0 160 260"
            className="pointer-events-none absolute bottom-[8.75rem] right-0 h-[260px] text-[#f1f1f1] max-md:hidden"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M116 0h44v260H0v-44h86L30 160l31-31 55 55V0Z" />
          </svg>
        </section>

        {/* SERVIÇOS + COMO FUNCIONA (bloco creme) */}
        <div className="rounded-[3.75rem] bg-cream max-md:rounded-[2rem]">
          <section id="servicos" className="pt-[8.75rem] max-md:pt-16">
            <div className={container}>
              <p className="t-sub mb-[3.125rem] text-center">Nossos serviços</p>
              <ServiceStack />
            </div>
          </section>

          <section className="py-[8.125rem] max-md:py-20">
            <div className={container}>
              <Reveal className="relative z-[1] flex max-w-[34.6875rem] flex-col items-start">
                <span className="t-sub">Como funciona</span>
                <h2 className="t-h2 mb-[1.875rem] mt-4">
                  Do primeiro contato à energia gerada na sua casa ou empresa
                </h2>
                <Button href={whatsappLink()} external>
                  Comece agora
                </Button>
              </Reveal>
            </div>
            <Reveal
              fade={false}
              threshold={0.25}
              className="mt-16 flex w-full justify-center px-[15px] lg:-mt-[170px]"
            >
              <div className="grid w-full max-w-[1160px] grid-cols-2 gap-6 lg:flex lg:aspect-[1600/730] lg:items-stretch lg:justify-between lg:gap-0">
                {steps.map((s, i) => (
                  <div key={s.title} className="flex h-[360px] flex-col justify-end lg:h-auto lg:w-[19%]">
                    <div
                      className="relative flex flex-col gap-5"
                      style={{ height: `${[60, 70, 88, 100][i]}%` }}
                    >
                      <span className="absolute inset-y-0 left-0 flex w-px flex-col items-center">
                        <span className="block h-2.5 w-2.5 shrink-0 rotate-45 bg-[#584c34]" />
                        <span className="block flex-1 border-r border-dashed border-[#584c34]" />
                      </span>
                      <div className="flex flex-col gap-[0.9375rem] pl-[1.5625rem]">
                        <span className="t-h4 leading-tight">
                          {String(i + 1).padStart(2, "0")} · {s.title}
                        </span>
                        <span className="t-body text-[0.9375rem] leading-relaxed max-lg:hidden">{s.text}</span>
                      </div>
                      <div className="bar-fade relative flex-1">
                        <div
                          className="bar-grow bar-clip h-full bg-sun pt-[7px]"
                          style={{ transitionDelay: `${i * 150}ms` }}
                        >
                          <div className="bar-clip relative flex h-full justify-center bg-beige pr-[32%] pt-[3.75rem]">
                            <span className="flex flex-col items-center">
                              <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#584c34]">
                                <span className="h-3 w-3 rounded-full border-[3px] border-[#584c34] bg-beige" />
                              </span>
                              <span className="block w-px flex-1 border-r border-dashed border-[#584c34]" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>
        </div>

        <ChooseUs />

        {/* VANTAGENS */}
        <section className="pb-[7.5rem]">
          <div className={container}>
            <Reveal className="mx-auto flex max-w-[668px] flex-col items-center text-center">
              <span className="t-sub">Vantagens</span>
              <h2 className="t-h2 m-0 mt-4">Economia, durabilidade e energia limpa para durar por décadas</h2>
            </Reveal>
            <div className="mt-[3.125rem] grid grid-cols-2 gap-5 lg:grid-cols-4">
              <div className="max-lg:hidden" />
              <Reveal>
                <BenefitCard {...benefits.economia} />
              </Reveal>
              <Reveal delay={100}>
                <BenefitCard {...benefits.manutencao} />
              </Reveal>
              <Reveal delay={200} className="col-span-2 flex flex-col items-start justify-end gap-5 pb-[2.8125rem] lg:col-span-1">
                <p className="t-body m-0">
                  Sistemas fotovoltaicos duram de 20 a 25 anos, exigem manutenção simples e se pagam em poucos anos,
                  gerando energia limpa por décadas.
                </p>
                <Button href={whatsappLink()} external>
                  Saiba mais
                </Button>
              </Reveal>
              <Reveal>
                <BenefitCard {...benefits.sustentabilidade} />
              </Reveal>
              <Reveal delay={100} className="flex flex-col items-center justify-center gap-[1.5625rem] max-lg:order-last max-lg:col-span-2 max-lg:py-8">
                <Avatars size={64} />
                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-medium">5.0 ( nossos clientes )</span>
                  <span className="text-2xl leading-none tracking-wider text-sun">★★★★★</span>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <BenefitCard {...benefits.valorizacao} />
              </Reveal>
              <Reveal delay={300}>
                <BenefitCard {...benefits.independencia} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" className="overflow-hidden pb-[8.75rem] max-md:pb-20">
          <div className={container}>
            <h2 className="t-big big-fade m-0 text-center max-md:text-[16vw]">Depoimentos</h2>
          </div>
          <div className="marquee-wrap marquee-mask relative mx-auto -mt-[clamp(1.25rem,3.2vw,3.75rem)] h-[56rem] max-w-[calc(1160px+12.5rem)] overflow-hidden px-[0.95rem] md:px-[6.25rem] max-md:h-[40rem]">
            <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-[1.875rem] md:grid-cols-3">
              {cols.map((col, c) => (
                <div
                  key={c}
                  className={`marquee-col flex flex-col gap-[1.875rem] ${c === 1 ? "reverse" : ""} ${c ? "max-md:hidden" : ""}`}
                  style={{ animationDuration: `${34 + c * 6}s` }}
                >
                  {[...col, ...col, ...col, ...col].map((t, i) => (
                    <TestimonialCard key={`${t.name}-${i}`} t={t} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
