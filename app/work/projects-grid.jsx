'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowGlyph, RollText } from '../../components/ArrowLink';
import { Reveal } from '../../components/Reveal';

// Tilt the card towards the cursor and move the spotlight with it (mouse only).
function handleTilt(event) {
    if (event.pointerType && event.pointerType !== 'mouse') {
        return;
    }

    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    card.style.setProperty('--rx', `${(-y * 8).toFixed(2)}deg`);
    card.style.setProperty('--ry', `${(x * 10).toFixed(2)}deg`);
    card.style.setProperty('--mx', `${((x + 0.5) * 100).toFixed(1)}%`);
    card.style.setProperty('--my', `${((y + 0.5) * 100).toFixed(1)}%`);
}

function resetTilt(event) {
    const card = event.currentTarget;

    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
}

export function ProjectsGrid({ projectsData }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredProjectId, setHoveredProjectId] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(projectsData.map((project) => project.category))];
    const visibleProjects =
        activeCategory === 'All' ? projectsData : projectsData.filter((project) => project.category === activeCategory);

    return (
        <>
            <section className="flex flex-col gap-8">
                <div className="flex flex-wrap justify-center gap-2.5" role="group" aria-label="Filter projects by category">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            aria-pressed={activeCategory === category}
                            onClick={() => setActiveCategory(category)}
                            className={`roll-host rounded-full border px-5 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                                activeCategory === category
                                    ? 'border-[#011627] bg-[#011627] text-white'
                                    : 'border-[#011627]/15 text-[#011627]/70 hover:border-[#047AE4] hover:text-[#047AE4]'
                            }`}
                        >
                            <RollText>{category}</RollText>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {visibleProjects.map((project, position) => {
                        const isHovered = hoveredProjectId === project.id;
                        const CardTag = project.href ? Link : 'button';
                        const cardProps = project.href
                            ? { href: project.href }
                            : {
                                  type: 'button',
                                  onClick: () => setSelectedProject(project)
                              };

                        return (
                            <Reveal key={project.id} delay={(position % 3) * 110}>
                            <CardTag
                                {...cardProps}
                                onMouseEnter={() => setHoveredProjectId(project.id)}
                                onMouseLeave={() => setHoveredProjectId(null)}
                                onFocus={() => setHoveredProjectId(project.id)}
                                onBlur={() => setHoveredProjectId(null)}
                                onPointerMove={handleTilt}
                                onPointerLeave={resetTilt}
                                className="tilt-card roll-host group relative block w-full text-left text-[#011627] no-underline hover:opacity-100"
                            >
                                <div className="relative overflow-hidden rounded-[1.5rem] bg-[#ece9e2] shadow-[0_14px_36px_rgba(1,22,39,0.12)] transition-shadow duration-500 group-hover:shadow-[0_30px_60px_rgba(1,22,39,0.24)]">
                                    <div className="relative aspect-[16/10]">
                                            <Image
                                                src={project.thumbnail}
                                                alt={project.name}
                                                fill
                                                className={`object-cover transition-all duration-500 ease-[cubic-bezier(0.2,0.9,0.22,1.05)] ${isHovered ? 'scale-[1.045] opacity-0' : 'scale-100 opacity-100'}`}
                                            />

                                            {project.hoverMedia?.type === 'video' ? (
                                                <video
                                                    src={project.hoverMedia.src}
                                                    poster={project.hoverMedia.poster ?? project.thumbnail}
                                                    muted
                                                    loop
                                                    playsInline
                                                    autoPlay={isHovered}
                                                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-[cubic-bezier(0.2,0.9,0.22,1.05)] ${isHovered ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0'}`}
                                                />
                                            ) : project.hoverMedia?.src ? (
                                                <Image
                                                    src={project.hoverMedia.src}
                                                    alt={`${project.name} hover preview`}
                                                    fill
                                                    className={`object-cover transition-all duration-500 ease-[cubic-bezier(0.2,0.9,0.22,1.05)] ${isHovered ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0'}`}
                                                />
                                            ) : null}

                                    </div>

                                    <span className="absolute left-4 top-4 rounded-full bg-white/85 px-2.5 py-1 text-xs tabular-nums tracking-[0.18em] text-[#011627] backdrop-blur">
                                        {String(projectsData.indexOf(project) + 1).padStart(2, '0')}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="absolute right-3 top-3 scale-50 text-[#011627] opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 sm:right-4 sm:top-4"
                                        style={{ '--arrow-ink': '#fff' }}
                                    >
                                        <span className="arrow-chip">
                                            <ArrowGlyph />
                                            <ArrowGlyph />
                                        </span>
                                    </span>

                                    <span aria-hidden="true" className="tilt-spot pointer-events-none absolute inset-0" />
                                </div>

                                <div className="px-1 pt-5">
                                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-[#011627]/55">
                                        {project.category} &middot; {project.year}
                                    </p>
                                    <h3 className="mt-2 text-xl leading-snug tracking-tight transition-colors duration-300 group-hover:text-[#047AE4]">
                                        {project.name}
                                    </h3>
                                </div>
                            </CardTag>
                            </Reveal>
                        );
                    })}
                </div>
            </section>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </>
    );
}

function ProjectModal({ project, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-primary/20 bg-neutral-900">
                <div className="sticky top-0 flex items-start justify-between border-b border-primary/20 bg-neutral-900 p-6">
                    <div className="flex-1">
                        <h2 className="mb-2 text-2xl font-bold">{project.name}</h2>
                        <p className="text-gray-400">{project.description}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="ml-4 flex-shrink-0 text-2xl leading-none text-gray-400 transition hover:text-primary"
                    >
                        x
                    </button>
                </div>

                <div className="p-6">
                    <div className="mb-8 flex items-center gap-4">
                        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold">
                            {project.category}
                        </span>
                        <span className="text-gray-400">{project.year}</span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {project.assets.map((asset, index) => (
                            <div key={index} className="flex flex-col gap-3">
                                <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-800">
                                    {asset.type === 'image' ? (
                                        <Image
                                            src={asset.src}
                                            alt={asset.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <video
                                            src={asset.src}
                                            controls
                                            className="h-full w-full object-cover"
                                        />
                                    )}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-100">{asset.title}</p>
                                    <p className="text-sm text-gray-400">{asset.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
                        <h3 className="mb-3 font-bold">Project Overview</h3>
                        <p className="leading-relaxed text-gray-300">{project.description}</p>
                    </div>
                </div>

                <div className="sticky bottom-0 flex gap-4 border-t border-primary/20 bg-neutral-900 p-6">
                    <button
                        onClick={onClose}
                        className="btn flex-1 bg-neutral-800 text-white hover:bg-neutral-700"
                    >
                        Close
                    </button>
                    <a
                        href="mailto:hifza.kd@gmail.com?subject=Interested in your work"
                        className="btn btn-lg flex-1"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}
