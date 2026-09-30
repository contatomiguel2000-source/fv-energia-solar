import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "FV Energia Solar | Liderança em Soluções Renováveis desde 2012",
  description:
    "Energia solar residencial, comercial e industrial, aquecimento solar de piscina, mini-hidrelétricas e energia por assinatura. Economize até 95% na conta de luz com a FV Energia Solar.",
  openGraph: {
    title: "FV Energia Solar",
    description:
      "Economize até 95% na conta de luz. Equipe de instalação própria e suporte humanizado.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${interTight.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
