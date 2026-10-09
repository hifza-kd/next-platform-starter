import localFont from 'next/font/local';
import '../styles/globals.css';
import '../styles/interactions.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

const siteUrl = 'https://hifzakhalid.com';
const siteTitle = 'Hifza Khalid | Graphic Designer & Brand Identity Specialist';
const siteDescription =
  'Portfolio of Hifza Khalid, a graphic designer and UX/UI enthusiast from Lahore, Pakistan, specialising in brand identity, product design and motion.';

const notoSans = localFont({
  src: '../public/fonts/Noto_Sans/NotoSans-VariableFont_wdth,wght.ttf',
  variable: '--font-noto-sans',
  weight: '100 900',
  display: 'swap',
});

const alanSans = localFont({
  src: '../public/fonts/Alan_Sans/AlanSans-VariableFont_wght.ttf',
  variable: '--font-alan-sans',
  weight: '300 900',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Hifza Khalid',
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: 'summary',
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${notoSans.variable} ${alanSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>

      <body className="antialiased bg-white text-black min-h-screen">
        <div className="flex flex-col min-h-screen w-full">
          <Header />

          <main className="flex-1 w-full pt-20">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
