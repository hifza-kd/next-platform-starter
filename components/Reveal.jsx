'use client';

import { useEffect, useRef, useState } from 'react';

// Fades and lifts its children in the first time they scroll into view.
export function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null);
    const [isIn, setIsIn] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIn(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${isIn ? 'is-in' : ''} ${className}`}
            style={{ '--reveal-delay': `${delay}ms` }}
        >
            {children}
        </div>
    );
}
