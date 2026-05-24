import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vipesportes.com.br"),
  title: {
    default: "VIP Esportes | Beach Tennis, Vôlei e Vôlei de Praia no Rio de Janeiro",
    template: "%s | VIP Esportes",
  },
  description:
    "Escola de esportes no Rio de Janeiro. Aulas de Beach Tennis, Vôlei e Vôlei de Praia para crianças, adolescentes e adultos. Agende sua aula experimental!",
  keywords: [
    "beach tennis rio de janeiro",
    "vôlei recreio",
    "escola de esportes",
    "aula experimental",
    "vôlei de praia",
    "escola de vôlei paula pequeno",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "VIP Esportes",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/hero-vip-esportes-UzqCEuHU9cAi6xaQyYPHkq.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${oswald.variable} ${sourceSans3.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
