
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    'https://9000-firebase-studio-1751101850020.cluster-c3a7z3wnwzapkx3rfr5kz62dac.cloudworkstations.dev',
  ],
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.properties.emaar.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'chaouenpress.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.annaharkw.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '365adventures.me',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'alsahwa.om',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'striveme.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'okaymuk.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'c0.klipartz.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'al-barrakgroup.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.ch-aviation.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'seekvectorlogo.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'abcdlist.nl',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '1.bp.blogspot.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '1000logos.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.picodi.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tse2.mm.bing.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'slicshoes.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
