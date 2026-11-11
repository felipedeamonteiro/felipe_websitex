/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  i18n: {
    locales: ['pt-BR', 'en', 'es', 'ja'],
    defaultLocale: 'pt-BR',
    localeDetection: false,
  },
};

export default nextConfig;
