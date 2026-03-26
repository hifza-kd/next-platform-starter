'use client';

import Link from 'next/link';
import { useState } from 'react';

const email = 'hifzakhalid03@gmail.com';

export function Footer() {
    const year = new Date().getFullYear();
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            setCopied(false);
        }
    };

    return (
        <footer className="mt-auto bg-[#E76F2E] py-[58px] text-[#011627] sm:py-[74px]">
            <div className="grid w-full gap-10 px-6 sm:px-10 lg:grid-cols-3 lg:gap-12 lg:px-14">
                <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#011627]/70">Email</p>
                    <div className="flex items-center gap-3">
                        <a
                            href={`mailto:${email}`}
                            className="text-lg tracking-tight text-[#011627] no-underline transition-opacity hover:opacity-75"
                        >
                            {email}
                        </a>
                        <button
                            type="button"
                            onClick={handleCopy}
                            aria-label="Copy email address"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#011627]/12 bg-white/70 text-[#6f63ff] transition hover:bg-white"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path
                                    d="M9 9.75A2.25 2.25 0 0 1 11.25 7.5h7.5A2.25 2.25 0 0 1 21 9.75v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 9 17.25v-7.5Z"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                />
                                <path
                                    d="M15 7.5V6.75A2.25 2.25 0 0 0 12.75 4.5h-7.5A2.25 2.25 0 0 0 3 6.75v7.5a2.25 2.25 0 0 0 2.25 2.25H6"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                />
                            </svg>
                        </button>
                    </div>
                    {copied ? <p className="text-sm text-[#011627]/65">Copied to clipboard</p> : null}
                </div>

                <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.28em] text-[#011627]/70">Socials</p>
                    <div className="flex flex-col gap-3 text-base">
                        <Link href="https://www.linkedin.com/in/hifzakd" target="_blank" rel="noopener noreferrer" className="w-fit no-underline transition-opacity hover:opacity-75">
                            LinkedIn
                        </Link>
                        <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="w-fit no-underline transition-opacity hover:opacity-75">
                            Twitter
                        </Link>
                        <Link href="mailto:hifzakhalid03@gmail.com" className="w-fit no-underline transition-opacity hover:opacity-75">
                            Email
                        </Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-base tracking-tight">Copyright &copy; {year} Hifza Khalid.</p>
                    <p className="max-w-md text-base leading-8 text-[#011627]/82">
                        Made with lots of love, head scratching and vibe coding heart emoji.
                    </p>
                </div>
            </div>
        </footer>
    );
}
