'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { RollText } from "./ArrowLink";

const navItems = [
  { linkText: "Home", href: "/" },
  { linkText: "My Work", href: "/work" },
  { linkText: "About", href: "/about" },
];

const resumeUrl = "https://drive.google.com/file/d/12sa4jSTahflnR5lw-pvMd7VORZPvIgHI/view?usp=sharing";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const barRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);

  // Hide on scroll down, reveal on scroll up; also drive the thin progress bar.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      if (barRef.current) {
        barRef.current.style.setProperty("--scroll-progress", max > 0 ? String(Math.min(1, y / max)) : "0");
      }

      if (y > lastY + 6 && y > 140) {
        setHidden(true);
      } else if (y < lastY - 6 || y <= 140) {
        setHidden(false);
      }

      lastY = y;
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const headerHidden = hidden && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-sm transition-transform duration-500 ease-out ${headerHidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="flex w-full items-center px-6 py-4 sm:px-10 lg:px-14">
        {/* brand */}
        <Link href="/" onClick={closeMenu} className="text-xl font-bold uppercase tracking-wide no-underline text-black">
          Hifza
        </Link>

        {/* nav links and action buttons */}
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`roll-host rounded-full px-4 py-1.5 text-sm uppercase no-underline transition-colors hover:opacity-100 ${
                  isActive(item.href) ? "bg-[#011627] text-white" : "text-black/70 hover:text-black"
                }`}
              >
                <RollText>{item.linkText}</RollText>
              </Link>
            ))}
          </nav>

          {/* action buttons */}
          <Link
            href="/#contact"
            className="roll-host inline-block text-sm font-semibold py-2 px-4 rounded-full bg-[#047AE4] text-white no-underline hover:opacity-100 hover:bg-[#0366bf] transition-colors"
          >
            <RollText>Contact</RollText>
          </Link>
          <Link
            href={resumeUrl}
            className="roll-host hidden sm:inline-block text-sm font-semibold py-2 px-4 rounded-full bg-[#047AE4] text-white no-underline hover:opacity-100 hover:bg-[#0366bf] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RollText>Resume</RollText>
          </Link>

          {/* mobile menu toggle */}
          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* scroll progress */}
      <div ref={barRef} aria-hidden="true" className="scroll-progress absolute bottom-0 left-0 h-[2px] w-full bg-[#047AE4]" />

      {menuOpen ? (
        <nav id="mobile-nav" className="md:hidden flex flex-col gap-4 border-t border-black/10 bg-white px-6 py-5 sm:px-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`text-sm uppercase no-underline ${isActive(item.href) ? "text-[#047AE4]" : "text-black/80 hover:text-black"}`}
            >
              {item.linkText}
            </Link>
          ))}
          <Link
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="sm:hidden text-sm uppercase text-black/80 hover:text-black no-underline"
          >
            Resume
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
