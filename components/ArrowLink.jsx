import Link from 'next/link';

export function RollText({ children }) {
    return (
        <span className="roll">
            <span data-text={children}>{children}</span>
        </span>
    );
}

export function ArrowGlyph() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17L17 7M9 7h8v8" />
        </svg>
    );
}

// Pill link: label rolls on hover and the arrow chip swaps its arrow in and out.
export function ArrowLink({ href, children, variant = 'solid', external = false, className = '' }) {
    const tone =
        variant === 'solid'
            ? 'bg-[#047AE4] text-white [--arrow-ink:#047AE4]'
            : variant === 'light'
              ? 'bg-white text-[#011627] [--arrow-ink:#fff]'
              : 'border border-[#011627]/20 text-[#011627] [--arrow-ink:#fff]';

    return (
        <Link
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`roll-host group inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-base font-semibold no-underline transition-colors hover:opacity-100 ${tone} ${className}`}
        >
            <RollText>{children}</RollText>
            <span
                className="arrow-chip"
                style={{ background: variant === 'solid' ? '#fff' : variant === 'light' ? '#011627' : '#011627' }}
            >
                <ArrowGlyph />
                <ArrowGlyph />
            </span>
        </Link>
    );
}
