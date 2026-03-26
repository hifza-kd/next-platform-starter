'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const projects = [
    {
        title: 'Event Video Service',
        image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
    },
    {
        title: 'Explainer Videos',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
    },
    {
        title: 'Brand Storytelling',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
    },
    {
        title: 'Non B2B Ads',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
    },
    {
        title: 'B2B Video Ads',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
    }
];

function getOffset(index, activeIndex, total) {
    const raw = index - activeIndex;
    const half = Math.floor(total / 2);

    if (raw > half) {
        return raw - total;
    }

    if (raw < -half) {
        return raw + total;
    }

    return raw;
}

export function FeaturedProjectsCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const touchStartX = useRef(null);
    const touchDeltaX = useRef(0);

    const showNext = () => {
        setActiveIndex((current) => (current + 1) % projects.length);
    };

    const showPrevious = () => {
        setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
    };

    useEffect(() => {
        const timer = window.setInterval(() => {
            showNext();
        }, 6200);

        return () => window.clearInterval(timer);
    }, []);

    const handlePointerDown = (event) => {
        touchStartX.current = event.clientX;
        touchDeltaX.current = 0;
        setIsDragging(true);
    };

    const handlePointerMove = (event) => {
        if (touchStartX.current === null) {
            return;
        }

        touchDeltaX.current = event.clientX - touchStartX.current;
    };

    const handlePointerEnd = () => {
        if (touchStartX.current === null) {
            return;
        }

        if (touchDeltaX.current <= -50) {
            showNext();
        } else if (touchDeltaX.current >= 50) {
            showPrevious();
        }

        touchStartX.current = null;
        touchDeltaX.current = 0;
        setIsDragging(false);
    };

    const positionedProjects = useMemo(
        () =>
            projects.map((project, index) => ({
                ...project,
                offset: getOffset(index, activeIndex, projects.length)
            })),
        [activeIndex]
    );

    return (
        <section className="overflow-hidden bg-[#011627] py-20 text-white sm:py-24">
            <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center px-4 sm:px-6 lg:px-10">
                <div className="mb-10 text-center sm:mb-14">
                    <p className="text-sm uppercase tracking-[0.32em] text-white/50">Featured Projects</p>
                    <h2 className="mt-4 text-3xl sm:text-5xl">Motion-led work in rotation</h2>
                </div>

                <div
                    className={`relative h-[30rem] w-full touch-pan-y select-none sm:h-[26rem] lg:h-[27rem] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerEnd}
                    onPointerCancel={handlePointerEnd}
                    onPointerLeave={handlePointerEnd}
                >
                    {positionedProjects.map((project) => {
                        const isActive = project.offset === 0;
                        const isVisible = Math.abs(project.offset) <= 2;
                        const scale = isActive ? 1 : Math.abs(project.offset) === 1 ? 0.9 : 0.78;
                        const opacity = isActive ? 1 : Math.abs(project.offset) === 1 ? 0.76 : 0.42;

                        return (
                            <article
                                key={project.title}
                                className={`absolute left-1/2 top-1/2 w-[82vw] max-w-[23rem] overflow-hidden rounded-[2rem] border-[5px] bg-black/20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-[35rem] sm:max-w-none lg:w-[30rem] ${isActive ? 'shadow-[-26px_28px_46px_rgba(0,0,0,0.5)]' : 'shadow-[0_10px_18px_rgba(0,0,0,0.14)]'}`}
                                style={{
                                    borderColor: '#758E4F',
                                    opacity: isVisible ? opacity : 0,
                                    transform: `translate(-50%, -50%) translateX(calc(${project.offset} * clamp(10rem, 25vw, 21rem))) scale(${scale})`,
                                    zIndex: 10 - Math.abs(project.offset)
                                }}
                            >
                                <div
                                    className="relative aspect-[0.72] sm:aspect-[16/9] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                    style={{
                                        transform: isActive ? 'translateY(-0.85rem)' : 'translateY(0)'
                                    }}
                                >
                                    {isActive ? (
                                        <video
                                            className="h-full w-full object-cover"
                                            src={project.video}
                                            poster={project.image}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                        />
                                    ) : (
                                        <img
                                            className="h-full w-full object-cover"
                                            src={project.image}
                                            alt={project.title}
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]" />
                                    <div className="absolute inset-x-0 bottom-0 p-5 text-center sm:p-6">
                                        <h3 className="text-2xl text-white sm:text-[2rem]">{project.title}</h3>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10">
                    {projects.map((project, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <button
                                key={project.title}
                                type="button"
                                aria-label={`Go to ${project.title}`}
                                aria-pressed={isActive}
                                className={`h-3 rounded-full border border-white/25 transition-all duration-300 ${isActive ? 'w-10 bg-[#758E4F]' : 'w-3 bg-white/20 hover:bg-white/35'}`}
                                onClick={() => setActiveIndex(index)}
                            />
                        );
                    })}
                </div>

                <p className="mt-10 text-center text-xl text-white/70 sm:mt-12">
                    More below, don&apos;t be shy <span className="text-[#c77dff]">:)</span>
                </p>
            </div>
        </section>
    );
}
