'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function ProjectsGrid({ projectsData }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredProjectId, setHoveredProjectId] = useState(null);

    return (
        <>
            <section className="flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                    {projectsData.map((project) => {
                        const isHovered = hoveredProjectId === project.id;
                        const CardTag = project.href ? Link : 'button';
                        const cardProps = project.href
                            ? { href: project.href }
                            : {
                                  type: 'button',
                                  onClick: () => setSelectedProject(project)
                              };

                        return (
                            <CardTag
                                key={project.id}
                                {...cardProps}
                                onMouseEnter={() => setHoveredProjectId(project.id)}
                                onMouseLeave={() => setHoveredProjectId(null)}
                                onFocus={() => setHoveredProjectId(project.id)}
                                onBlur={() => setHoveredProjectId(null)}
                                className="group relative overflow-hidden rounded-[1.75rem] bg-[#0a0a0a] text-left shadow-[0_18px_45px_rgba(0,0,0,0.18)] transition-all duration-500 ease-[cubic-bezier(0.2,0.9,0.22,1.15)] hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_34px_72px_rgba(0,0,0,0.3)] focus-visible:-translate-y-2 focus-visible:scale-[1.015] focus-visible:shadow-[0_34px_72px_rgba(0,0,0,0.3)]"
                            >
                                <div
                                    className="relative aspect-[4/4.6] overflow-hidden rounded-[1.75rem]"
                                    style={{
                                        background: project.accent,
                                        backgroundSize: project.accentSize ?? 'cover'
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/72" />

                                    <div className="absolute inset-x-[4.5%] top-[28%] overflow-hidden rounded-[1rem] border border-white/15 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.22)]">
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

                                            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/8" />
                                        </div>
                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                                        <h3 className="max-w-[18ch] text-[1rem] leading-[1.15] tracking-tight text-white">
                                            {project.name}
                                        </h3>
                                        <div className="mt-[5px] flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-white/62">
                                            <span>{project.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardTag>
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
