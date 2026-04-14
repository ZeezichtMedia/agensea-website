// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://agensea.nl',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/api/') &&
        !page.includes('/admin') &&
        !page.endsWith('/demo-success') &&
        !page.endsWith('/offerte-success'),
      serialize(item) {
        const url = item.url;
        if (url === 'https://agensea.nl/' || url === 'https://agensea.nl') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (url.includes('/diensten/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (url.includes('/kennisbank/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (url.endsWith('/over-ons') || url.endsWith('/over-ons/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else if (url.endsWith('/contact') || url.endsWith('/contact/')) {
          item.priority = 0.7;
          item.changefreq = 'yearly';
        } else if (url.includes('/privacy') || url.includes('/algemene-voorwaarden')) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});