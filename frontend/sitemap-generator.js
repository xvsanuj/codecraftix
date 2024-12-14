import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';

// Define your website base URL
const baseUrl = 'https://codecraftix.in';

// Define the routes you want to include in the sitemap
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/pricing',
];

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname: baseUrl });

  routes.forEach((route) => {
    sitemapStream.write({ url: route, changefreq: 'daily', priority: 0.7 });
  });

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);

  fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
  console.log('Sitemap generated successfully!');
};

generateSitemap().catch((err) => {
  console.error('Error generating sitemap:', err);
});