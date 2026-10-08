'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { projectsData } from '../data/projects';

const projects = projectsData.map((project) => ({
    id: project.id,
    name: project.name,
    category: project.category,
    subtitle: project.brand ?? String(project.year),
    image: project.thumbnail,
    href: project.href ?? '/work'
}));

const AUTOPLAY_MS = 3200;
const MAX_FLING = 3;
const PERSPECTIVE = 1150;

// Distance from `index` to the (fractional) position, wrapped so the rail loops forever.
function wrappedOffset(index, position, total) {
    let offset = (index - position) % total;

    if (offset > total / 2) {
        offset -= total;
    } else if (offset < -total / 2) {
        offset += total;
    }

    return offset;
}

function cardWidth() {
    return Math.min(600, Math.max(260, window.innerWidth * 0.31));
}

// Places a card on a curved drum: the further from centre, the more it turns, shrinks, recedes and dims.
function cardStyle(offset) {
    const a = Math.max(-2.4, Math.min(2.4, offset));
    const distance = Math.abs(a);
    const x = 1.25 * a * (1 - 0.16 * distance);
    const z = -0.82 * distance * (1 - 0.2 * distance);
    const scale = 1 - 0.2 * Math.min(distance, 1.8);

    return {
        transform: `translate3d(calc(var(--cw) * ${x.toFixed(4)}), 0, calc(var(--cw) * ${z.toFixed(4)})) rotateY(${(a * 48).toFixed(2)}deg) scale(${scale.toFixed(4)})`,
        opacity: Math.max(0, Math.min(1, (3 - Math.abs(offset)) / 0.5)),
        zIndex: 200 - Math.round(distance * 20),
        filter: `brightness(${(1 - 0.17 * distance).toFixed(3)})`,
        veil: Math.min(0.4, 0.13 * distance)
    };
}

// Which card a tap landed on, worked out from the card layout rather than DOM hit-testing,
// which is unreliable for the tilted 3D side cards. `tapX` is measured from the rail's centre.
function cardAtTap(tapX, position, total) {
    const cw = cardWidth();
    let best = null;

    for (let index = 0; index < total; index++) {
        const offset = wrappedOffset(index, position, total);
        const distance = Math.min(Math.abs(offset), 2.4);

        if (Math.abs(offset) > 2.5) {
            continue;
        }

        const a = Math.sign(offset) * distance;
        const depth = PERSPECTIVE / (PERSPECTIVE + 0.82 * distance * (1 - 0.2 * distance) * cw);
        const centre = 1.25 * a * (1 - 0.16 * distance) * cw * depth;
        const halfWidth = (cw / 2) * (1 - 0.2 * Math.min(distance, 1.8)) * Math.cos((a * 48 * Math.PI) / 180) * depth;
        const gap = Math.abs(tapX - centre);

        // Nearer cards sit on top, so they win any overlap.
        if (gap <= Math.abs(halfWidth) && (best === null || distance < best.distance)) {
            best = { index, distance };
        }
    }

    return best ? best.index : null;
}

export function FeaturedProjectsCarousel() {
    const router = useRouter();
    const sectionRef = useRef(null);
    const positionRef = useRef(0);
    const targetRef = useRef(0);
    const dragRef = useRef(null);
    const pausedRef = useRef(false);
    const visibleRef = useRef(false);
    const [position, setPosition] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const total = projects.length;
    const nearest = Math.round(position);
    const activeIndex = ((nearest % total) + total) % total;
    const active = projects[activeIndex];
    // Caption fades out while the rail is between cards and back in as it settles.
    const captionOpacity = Math.max(0, 1 - Math.abs(position - nearest) * 3);

    // Ease towards the target card every frame, unless the user is dragging.
    useEffect(() => {
        let frame;

        const tick = () => {
            if (!dragRef.current) {
                const diff = targetRef.current - positionRef.current;

                if (Math.abs(diff) > 0.0005) {
                    positionRef.current += diff * 0.1;
                    setPosition(positionRef.current);
                } else if (positionRef.current !== targetRef.current) {
                    positionRef.current = targetRef.current;
                    setPosition(positionRef.current);
                }
            }

            frame = window.requestAnimationFrame(tick);
        };

        frame = window.requestAnimationFrame(tick);

        return () => window.cancelAnimationFrame(frame);
    }, []);

    // Auto-advance while the section is on screen and nobody is interacting with it.
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                visibleRef.current = entry.isIntersecting;
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        const timer = window.setInterval(() => {
            if (visibleRef.current && !pausedRef.current && !dragRef.current && !document.hidden) {
                targetRef.current = Math.round(targetRef.current) + 1;
            }
        }, AUTOPLAY_MS);

        return () => {
            observer.disconnect();
            window.clearInterval(timer);
        };
    }, []);

    const goTo = (target) => {
        targetRef.current = target;
    };

    const openProject = (project) => {
        router.push(project.href);
    };

    const handlePointerDown = (event) => {
        if (event.button !== undefined && event.button !== 0) {
            return;
        }

        const bounds = event.currentTarget.getBoundingClientRect();
        event.currentTarget.setPointerCapture(event.pointerId);
        dragRef.current = {
            tapX: event.clientX - (bounds.left + bounds.width / 2),
            startX: event.clientX,
            startPosition: positionRef.current,
            lastX: event.clientX,
            lastTime: performance.now(),
            velocity: 0,
            moved: false,
            step: cardWidth() * 0.9
        };
        setIsDragging(true);
    };

    const handlePointerMove = (event) => {
        const drag = dragRef.current;

        if (!drag) {
            return;
        }

        const dx = event.clientX - drag.startX;

        if (Math.abs(dx) > 6) {
            drag.moved = true;
        }

        const now = performance.now();
        const elapsed = Math.max(1, now - drag.lastTime);
        drag.velocity = (-(event.clientX - drag.lastX) / drag.step / elapsed) * 0.8 + drag.velocity * 0.2;
        drag.lastX = event.clientX;
        drag.lastTime = now;

        positionRef.current = drag.startPosition - dx / drag.step;
        setPosition(positionRef.current);
    };

    const handlePointerUp = () => {
        const drag = dragRef.current;

        if (!drag) {
            return;
        }

        dragRef.current = null;
        setIsDragging(false);

        if (drag.moved) {
            const fling = Math.max(-MAX_FLING, Math.min(MAX_FLING, drag.velocity * 220));
            goTo(Math.round(positionRef.current + fling));
            return;
        }

        // A tap: open the centre card, or bring a side card to the centre.
        const index = cardAtTap(drag.tapX, positionRef.current, total);

        if (index === null) {
            return;
        }

        const offset = wrappedOffset(index, positionRef.current, total);

        if (Math.abs(offset) < 0.5) {
            openProject(projects[index]);
        } else {
            goTo(Math.round(positionRef.current + offset));
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            goTo(Math.round(targetRef.current) + 1);
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            goTo(Math.round(targetRef.current) - 1);
        } else if (event.key === 'Enter') {
            openProject(active);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="featured"
            className="relative isolate overflow-hidden bg-[#047AE4] pt-14 pb-12 text-white sm:pt-20 sm:pb-16"
            onMouseEnter={() => {
                pausedRef.current = true;
            }}
            onMouseLeave={() => {
                pausedRef.current = false;
            }}
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                    backgroundImage:
                        'radial-gradient(120% 78% at 50% 8%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0) 62%), radial-gradient(120% 70% at 50% 94%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 55%)'
                }}
            />

            <h2 className="text-center text-[clamp(2.5rem,5.2vw,6.25rem)] leading-none tracking-tight">Featured Work</h2>
            <p className="mt-3 mb-8 text-center text-[clamp(0.625rem,0.78vw,0.95rem)] uppercase tracking-[0.14em] text-white/70 sm:mb-12">
                Drag to browse, click a card to open it
            </p>

            <div
                role="region"
                aria-roledescription="carousel"
                aria-label="Featured projects"
                tabIndex={0}
                className={`relative w-full touch-pan-y select-none overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{
                    '--cw': 'clamp(260px, 31vw, 600px)',
                    height: 'clamp(250px, 26vw, 470px)',
                    perspective: `${PERSPECTIVE}px`,
                    maskImage: 'linear-gradient(to right, transparent 0%, #000 13%, #000 87%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 13%, #000 87%, transparent 100%)'
                }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onKeyDown={handleKeyDown}
            >
                {projects.map((project, index) => {
                    const offset = wrappedOffset(index, position, total);
                    const { veil, ...style } = cardStyle(offset);

                    return (
                        <div
                            key={project.id}
                            data-index={index}
                            aria-hidden={index !== activeIndex}
                            className="absolute top-1/2 left-1/2 aspect-[3/2] overflow-hidden rounded-xl bg-white/20 will-change-transform"
                            style={{
                                ...style,
                                width: 'var(--cw)',
                                marginLeft: 'calc(var(--cw) * -0.5)',
                                marginTop: 'calc(var(--cw) * -0.3335)',
                                cursor: Math.abs(offset) < 0.5 && !isDragging ? 'pointer' : undefined,
                                pointerEvents: style.opacity === 0 ? 'none' : 'auto',
                                boxShadow: '0 18px 40px -12px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.18)'
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                draggable={false}
                                className="block h-full w-full object-cover"
                            />
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 bg-[rgba(214,232,252,0.92)]"
                                style={{ opacity: veil }}
                            />
                        </div>
                    );
                })}
            </div>

            <div
                aria-live="polite"
                className="mx-auto mt-6 flex min-h-[6.5rem] max-w-[min(90vw,44rem)] flex-col items-center gap-2 px-4 text-center sm:mt-10"
                style={{ opacity: captionOpacity }}
            >
                <span className="text-xs uppercase tracking-[0.14em] text-white/70">{active.category}</span>
                <h3 className="text-[clamp(1.5rem,2.6vw,3rem)] leading-tight text-white">{active.name}</h3>
                <span className="text-base text-white/75 sm:text-lg">{active.subtitle}</span>
            </div>
        </section>
    );
}
