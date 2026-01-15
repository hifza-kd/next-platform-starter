import Link from 'next/link';
import githubLogo from 'public/images/github-mark-white.svg';
import Image from 'next/image';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'My Work', href: '/work' },
    { linkText: 'Portfolio', href: '/#skills' },
    { linkText: 'About', href: '/#experience' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/" className="font-bold text-lg text-primary">
                Hifza
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href} className="inline-flex px-1.5 py-1 sm:px-3 sm:py-2 hover:text-primary transition">
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto"
            >
                <Image src={githubLogo} alt="GitHub logo" className="w-7" />
            </Link>
        </nav>
    );
}
