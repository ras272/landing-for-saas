/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Desactivamos SWC minify para evitar conflictos con NextUI
  experimental: {
    esmExternals: false, // Desactivamos ESM externals para mejor compatibilidad
  },
  webpack: (config, { isServer }) => {
    // Configuración para resolver problemas con @swc/helpers
    config.resolve.fallback = {
      ...config.resolve.fallback,
      '@swc/helpers/_/_class_private_field_init': false,
      '@swc/helpers/_/_class_private_field_get': false,
      '@swc/helpers/_/_class_private_field_set': false,
    };

    // Configuración adicional para manejar módulos problemáticos
    config.resolve.alias = {
      ...config.resolve.alias,
      '@swc/helpers/_/_class_private_field_init': false,
      '@swc/helpers/_/_class_private_field_get': false,
      '@swc/helpers/_/_class_private_field_set': false,
    };
    
    return config;
  },
}

module.exports = nextConfig
