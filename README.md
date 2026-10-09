# Hifza Khalid — Portfolio

Source for [hifzakhalid.com](https://hifzakhalid.com/). Built with Next.js 16 (App Router), React 19, Tailwind CSS 4, deployed on Netlify.

## Develop

```
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Structure

- `app/` — routes: `/` (hero + featured work), `/work`, `/about`, `/ux/mcb-money-map`, plus `sitemap.js` and `robots.js`
- `components/` — header, footer, hero scene, featured-work carousel
- `data/projects.js` — project list shared by `/work` and the home carousel
- `proxy.js` — security headers
