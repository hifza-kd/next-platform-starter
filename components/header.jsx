import Link from "next/link";
import Image from "next/image";
import githubLogo from "public/images/github-mark-white.svg";

const navItems = [
  { linkText: "Home", href: "/" },
  { linkText: "My Work", href: "/work" },
  { linkText: "Portfolio", href: "/#skills" },
  { linkText: "About", href: "/#experience" },
  { linkText: "UX/UI", href: "/ux" },
];

export function Header() {
  return (
    <header
      className="w-full h-[50px] bg-white text-black flex items-center"
      style={{
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)", // very light feathered shadow
      }}
    >
      <div className="h-full w-full flex items-center px-6">
  
  {/* LEFT: Brand */}
  <div className="flex items-center">
    <Link href="/" className="text-lg font-bold no-underline text-black">
      Hifza
    </Link>
  </div>

  {/* CENTER: Navigation */}
  <nav className="hidden md:flex items-center gap-8 ml-8">
    <Link href="/" className="text-sm text-black/70 hover:text-black no-underline">
      Home
    </Link>
    <Link href="/work" className="text-sm text-black/70 hover:text-black no-underline">
      My Work
    </Link>
    <Link href="/#skills" className="text-sm text-black/70 hover:text-black no-underline">
      Portfolio
    </Link>
    <Link href="/#experience" className="text-sm text-black/70 hover:text-black no-underline">
      About
    </Link>
    <Link href="/ux" className="text-sm text-black/70 hover:text-black no-underline">
      UX/UI
    </Link>
  </nav>

  {/* RIGHT: CTA */}
  <div className="ml-auto">
    <Link
      href="/#contact"
      className="
        inline-flex items-center justify-center
        h-9 px-5 rounded-full
        text-sm font-semibold
        bg-[#047AE4] text-white
        no-underline
        hover:opacity-95
      "
    >
      Let&apos;s talk
    </Link>
  </div>

</div>

        </header>)}