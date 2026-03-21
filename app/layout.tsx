import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://vitor-cavalcante.vercel.app";

export const metadata: Metadata = {
  title: "Vitor Cavalcante | IT Strategy & Full Stack Development",
  description:
    "IT Coordinator e Desenvolvedor com background híbrido em Sistemas e Biologia. Foco em estratégia digital, SEO e infraestrutura.",
  keywords: [
    "IT Coordinator",
    "Full Stack Developer",
    "SEO",
    "Next.js",
    "Guará IT",
    "Vitor Cavalcante",
  ],
  authors: [{ name: "Vitor Cavalcante" }],

  // Configurações de Open Graph (LinkedIn, WhatsApp, Facebook)
  openGraph: {
    title: "Vitor Cavalcante | Portfolio",
    description:
      "Estratégia tecnológica e desenvolvimento de software. Híbrido por natureza.",
    url: siteUrl,
    siteName: "Vitor Cavalcante Portfolio",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Vitor Cavalcante - IT Strategy & Development",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Configurações para Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Vitor Cavalcante | IT Strategy",
    description: "Portfolio de tecnologia e desenvolvimento Full Stack.",
    images: [`${siteUrl}/opengraph-image.png`],
  },

  // Ícones
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
