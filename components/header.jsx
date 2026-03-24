import Link from "next/link";

const navItems = [
  { linkText: "Home", href: "/" },
  { linkText: "My Work", href: "/work" },
  { linkText: "Portfolio", href: "/#skills" },
  { linkText: "About", href: "/about" },
  { linkText: "UX/UI", href: "/ux" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center py-4 px-6">
        {/* brand */}
        <Link href="/" className="text-xl font-bold uppercase tracking-wide no-underline text-black">
          Hifza
        </Link>

        {/* nav links and action buttons */}
        <div className="ml-auto flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase text-black/70 hover:text-black no-underline"
              >
                {item.linkText}
              </Link>
            ))}
          </nav>

          {/* action buttons */}
          <Link
            href="/#contact"
            className="inline-block text-sm font-semibold py-2 px-4 rounded-full bg-[#047AE4] text-white no-underline hover:opacity-95"
          >
            Contact
          </Link>
          <Link
            href="https://drive.google.com/file/d/12sa4jSTahflnR5lw-pvMd7VORZPvIgHI/view?usp=sharing"
            className="inline-block text-sm font-semibold py-2 px-4 rounded-full bg-[#047AE4] text-white no-underline hover:opacity-95"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </div>
      </div>
    </header>
  );
}