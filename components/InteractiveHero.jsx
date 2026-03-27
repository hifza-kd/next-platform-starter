'use client';

import { useEffect, useRef, useState } from 'react';
import { HeroScene } from './HeroScene';

export function InteractiveHero() {
    const heroRef = useRef(null);
    const sceneRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [mobileSceneActive, setMobileSceneActive] = useState(false);
    const [pointer, setPointer] = useState({ x: 50, y: 50 });

    useEffect(() => {
        if (!heroRef.current) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(heroRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1023px)');

        const updateMobileState = () => {
            setIsMobile(mediaQuery.matches);
        };

        updateMobileState();
        mediaQuery.addEventListener('change', updateMobileState);

        return () => mediaQuery.removeEventListener('change', updateMobileState);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setMobileSceneActive(false);
            return undefined;
        }

        const updateMobileSceneState = () => {
            if (!sceneRef.current) {
                return;
            }

            const bounds = sceneRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const activationStart = viewportHeight * 0.72;
            const activationEnd = viewportHeight * 0.28;
            const isInActivationBand =
                bounds.top <= activationStart && bounds.top >= activationEnd;

            setMobileSceneActive(isInActivationBand);
        };

        updateMobileSceneState();
        window.addEventListener('scroll', updateMobileSceneState, { passive: true });
        window.addEventListener('resize', updateMobileSceneState);

        return () => {
            window.removeEventListener('scroll', updateMobileSceneState);
            window.removeEventListener('resize', updateMobileSceneState);
        };
    }, [isMobile]);

    const handlePointerMove = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;

        setPointer({
            x: Math.max(0, Math.min(100, x)),
            y: Math.max(0, Math.min(100, y))
        });
    };

    return (
        <section
            ref={heroRef}
            className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-white text-[#011627]"
            onPointerMove={handlePointerMove}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-80 transition-transform duration-300 ease-out"
                style={{
                    background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(4, 122, 228, 0.14), transparent 24%),
                    radial-gradient(circle at 20% 18%, rgba(43, 220, 210, 0.12), transparent 22%),
                    linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)`
                }}
            />

            <div className="relative flex min-h-[calc(100vh-5rem)] w-full items-center px-6 py-12 sm:px-10 sm:py-16 lg:px-16 xl:px-20">
                <section
                    className={`hero-section w-full transition-all duration-700 ${isVisible ? 'animate translate-y-0 scale-100 opacity-100' : 'translate-y-12 scale-95 opacity-0'}`}
                >
                    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:grid-cols-[1fr_1fr]">
                        <div
                            ref={sceneRef}
                            className="order-2 mx-auto w-full max-w-[44rem] lg:order-1 lg:mx-0 lg:max-w-[40rem] lg:-ml-8 xl:-ml-12"
                        >
                            <HeroScene forcedActive={mobileSceneActive} />
                        </div>

                        <div className="order-1 mx-auto w-full max-w-[22rem] px-4 text-center sm:max-w-[28rem] lg:order-2 lg:mx-0 lg:max-w-none lg:justify-self-start lg:-ml-10 lg:px-0 lg:pl-[200px] lg:text-left">
                            <h1 className="headline mx-auto max-w-[12ch] text-5xl font-bold sm:max-w-[13ch] sm:text-6xl lg:mx-0 lg:max-w-[10.5ch] lg:text-[4.35rem] xl:text-[4.65rem]">
                                I design websites that attract the right clients before you say a single word.
                            </h1>
                            <button className="cta mt-6 rounded-full bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-600">
                                See How It Works
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}
