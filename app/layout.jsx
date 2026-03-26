import localFont from 'next/font/local';
import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

const notoSans = localFont({
  src: '../public/fonts/Noto_Sans/static/NotoSans-Regular.ttf',
  variable: '--font-noto-sans',
  display: 'swap',
});

const alanSans = localFont({
  src: '../public/fonts/Alan_Sans/static/AlanSans-Bold.ttf',
  variable: '--font-alan-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Hifza Khalid | Graphic Designer & Brand Identity Specialist',
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
