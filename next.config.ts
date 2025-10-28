import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Para minhas imagens funcionarem caso venham de um link externo 
  // preciso colocar aqui nas configurações
  images: {
    remotePatterns: [
      {
        protocol:'https',
        hostname: 'github.com'
      }
    ],
    qualities: [100, 75]
  }
};

export default nextConfig;
