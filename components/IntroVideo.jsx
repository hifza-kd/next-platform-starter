'use client';

import { useRef, useState } from 'react';

// Poster with a big play button; once playing, native controls take over.
export function IntroVideo({ src, poster, title }) {
    const videoRef = useRef(null);
    const [started, setStarted] = useState(false);

    const start = () => {
        const video = videoRef.current;

        if (!video) {
            return;
        }

        setStarted(true);
        video.controls = true;
        video.play().catch(() => {});
    };

    return (
        <div className="group relative aspect-[16/9] w-full bg-black">
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                preload="metadata"
                playsInline
                aria-label={title}
                className="h-full w-full object-cover"
                onEnded={() => setStarted(false)}
            />

            {!started ? (
                <button
                    type="button"
                    onClick={start}
                    aria-label={`Play video: ${title}`}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-black/5 to-transparent"
                >
                    <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#011627] shadow-xl transition-transform duration-500 ease-out group-hover:scale-110 sm:h-28 sm:w-28">
                        <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-white/40 [animation-duration:2.4s]" />
                        <svg className="relative ml-1" width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M8 5.5v13a1 1 0 0 0 1.52.85l10.4-6.5a1 1 0 0 0 0-1.7L9.52 4.65A1 1 0 0 0 8 5.5Z" />
                        </svg>
                    </span>
                    <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-sm text-white backdrop-blur sm:bottom-5 sm:left-5">
                        Meet Hifza &middot; Intro video
                    </span>
                </button>
            ) : null}
        </div>
    );
}
