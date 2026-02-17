import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
  title: {
    template: '%s | Hifza',
    default: 'Hifza - UX/UI & Graphic Designer',
  },
  description:
    'Portfolio of Hifza - UX/UI Designer, Graphic Designer, and Creative Storyteller',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>

      <body className="antialiased bg-white text-black min-h-screen">
        <div className="flex flex-col min-h-screen w-full">
          <Header />

          {/* FULL WIDTH main (backgrounds can still be full-bleed) */}
          <main className="flex-1 w-full">
            {/* GLOBAL content margin/width */}
            <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
