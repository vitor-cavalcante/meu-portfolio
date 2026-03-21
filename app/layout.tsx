import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono-alt",
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
        alt: "Vitor Cavalcante",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitor Cavalcante | IT Strategy",
    description: "Portfolio de tecnologia e desenvolvimento Full Stack.",
    images: [`${siteUrl}/opengraph-image.png`],
  },
  icons: { icon: "/icon.svg" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const nonce = headerList.get("x-nonce") || "";
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Bypass Kaspersky: Só injeta CSP se não for ambiente de dev */}
        {!isDev && <meta property="csp-nonce" content={nonce} />}
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        {/* O Wrapper resolve instantaneamente se deve mostrar a Navbar ou não */}
        <NavbarWrapper />

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
