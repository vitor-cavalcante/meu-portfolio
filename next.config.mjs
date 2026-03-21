/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Otimização de Imagens para SEO e Performance
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Segurança de Frame e Conteúdo
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

          // Privacidade: Desabilita APIs de sensores não utilizados
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },

          // Proteção contra XSS Legado
          { key: "X-XSS-Protection", value: "1; mode=block" },

          // HSTS: Força HTTPS por 1 ano
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
