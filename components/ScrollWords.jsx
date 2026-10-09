'use client';

import { useEffect, useRef } from 'react';

// Statement text whose words light up one by one as the section scrolls through the viewport.
export function ScrollWords({ text, className = '' }) {
    const rootRef = useRef(null);
    const words = text.split(' ');

    useEffect(() => {
        const root = rootRef.current;

        if (!root) {
            return undefined;
        }

        const spans = Array.from(root.querySelectorAll('[data-word]'));
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let frame = 0;

        const update = () => {
            frame = 0;
            const bounds = root.getBoundingClientRect();
            const vh = window.innerHeight;
            // 0 when the block enters at the bottom, 1 when it reaches ~35% from the top.
            const progress = reduceMotion ? 1 : Math.min(1, Math.max(0, (vh * 0.9 - bounds.top) / (vh * 0.55 + bounds.height * 0.5)));

            spans.forEach((span, index) => {
                const lit = progress * (spans.length + 1) > index;
                span.style.opacity = lit ? '1' : '0.18';
            });
        };

        const onScroll = () => {
            if (!frame) {
                frame = window.requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            window.cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <p ref={rootRef} className={className}>
            {words.map((word, index) => (
                <span key={`${word}-${index}`} data-word style={{ opacity: 0.18, transition: 'opacity 350ms ease' }}>
                    {word}{' '}
                </span>
            ))}
        </p>
    );
}
