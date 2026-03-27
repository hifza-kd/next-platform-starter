'use client';

import { useState } from 'react';

const SCENE_WIDTH = 519;
const SCENE_HEIGHT = 385;
const SHOW_DEBUG_FRAMES = false;

const staticLayers = [
    {
        id: 'books',
        href: '/images/Hero image/book stack table.svg',
        alt: 'Book stack on the wall shelf',
        x: 445,
        y: 166,
        width: 72,
        height: 64,
        hotspot: {
            x: 445,
            y: 166,
            width: 72,
            height: 64
        },
        preserveAspectRatio: 'xMidYMid meet'
    }
];

const interactiveLayers = [
    {
        id: 'me',
        alt: 'Woman sitting in the chair',
        staticHref: '/images/Hero image/me static.svg',
        hoverHref: '/images/Hero image/me hover.svg',
        x: 149,
        y: 52,
        width: 157.8,
        height: 216.4,
        hotspot: {
            x: 149,
            y: 52,
            width: 122,
            height: 216.4
        },
        hoverOffsetX: 0,
        hoverOffsetY: 0,
        preserveAspectRatio: 'xMidYMid meet'
    },
    {
        id: 'cat',
        alt: 'Cat sleeping on the shelf',
        staticHref: '/images/Hero image/cat static.svg',
        hoverHref: '/images/Hero image/cat hover.svg',
        x: 334,
        y: 0,
        width: 80,
        height: 70,
        hotspot: {
            x: 334,
            y: 0,
            width: 80,
            height: 70
        },
        hoverOffsetX: 0,
        hoverOffsetY: 0,
        preserveAspectRatio: 'xMidYMid meet'
    }
];

export function HeroScene({ forcedActive = false }) {
    const [activeLayer, setActiveLayer] = useState(null);

    return (
        <div className="relative w-full">
            <svg
                viewBox={`0 0 ${SCENE_WIDTH} ${SCENE_HEIGHT}`}
                className="h-auto w-full"
                role="img"
                aria-label="Illustrated living room scene"
            >
                <image
                    href="/images/Hero image/scene bg.svg"
                    x="0"
                    y="0"
                    width={SCENE_WIDTH}
                    height={SCENE_HEIGHT}
                    preserveAspectRatio="xMidYMid meet"
                />

                {staticLayers.map((layer) => (
                    <g key={layer.id}>
                        <image
                            href={layer.href}
                            x={layer.x}
                            y={layer.y}
                            width={layer.width}
                            height={layer.height}
                            preserveAspectRatio={layer.preserveAspectRatio ?? 'xMidYMid meet'}
                        >
                            <title>{layer.alt}</title>
                        </image>

                        {layer.hotspot && (
                            <rect
                                x={layer.hotspot.x}
                                y={layer.hotspot.y}
                                width={layer.hotspot.width}
                                height={layer.hotspot.height}
                                fill="transparent"
                                pointerEvents="all"
                                tabIndex="0"
                                role="button"
                                aria-label={layer.alt}
                                style={{ cursor: 'pointer' }}
                            />
                        )}

                        {SHOW_DEBUG_FRAMES && (
                            <rect
                                x={layer.x}
                                y={layer.y}
                                width={layer.width}
                                height={layer.height}
                                fill="rgba(59, 130, 246, 0.08)"
                                stroke="#2563eb"
                                strokeWidth="1.5"
                                strokeDasharray="6 4"
                                pointerEvents="none"
                            />
                        )}
                    </g>
                ))}

                {interactiveLayers.map((layer) => {
                    const isActive = forcedActive || activeLayer === layer.id;

                    return (
                        <g
                            key={layer.id}
                            onMouseEnter={() => setActiveLayer(layer.id)}
                            onMouseLeave={() => setActiveLayer(null)}
                            onFocus={() => setActiveLayer(layer.id)}
                            onBlur={() => setActiveLayer(null)}
                        >
                            <image
                                href={layer.staticHref}
                                x={layer.x}
                                y={layer.y}
                                width={layer.width}
                                height={layer.height}
                                preserveAspectRatio={layer.preserveAspectRatio ?? 'xMidYMid meet'}
                                style={{
                                    opacity: isActive ? 0 : 1,
                                    transition: 'opacity 0.3s ease'
                                }}
                            >
                                <title>{layer.alt}</title>
                            </image>

                            <image
                                href={layer.hoverHref}
                                x={layer.x + layer.hoverOffsetX}
                                y={layer.y + layer.hoverOffsetY}
                                width={layer.width}
                                height={layer.height}
                                preserveAspectRatio={layer.preserveAspectRatio ?? 'xMidYMid meet'}
                                style={{
                                    opacity: isActive ? 1 : 0,
                                    transition: 'opacity 0.3s ease'
                                }}
                            />

                            <rect
                                x={layer.hotspot.x}
                                y={layer.hotspot.y}
                                width={layer.hotspot.width}
                                height={layer.hotspot.height}
                                fill="transparent"
                                pointerEvents="all"
                                tabIndex="0"
                                role="button"
                                aria-label={layer.alt}
                                style={{ cursor: 'pointer' }}
                            />

                            {SHOW_DEBUG_FRAMES && (
                                <rect
                                    x={layer.x}
                                    y={layer.y}
                                    width={layer.width}
                                    height={layer.height}
                                    fill="rgba(234, 88, 12, 0.08)"
                                    stroke="#ea580c"
                                    strokeWidth="1.5"
                                    strokeDasharray="6 4"
                                    pointerEvents="none"
                                />
                            )}
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
