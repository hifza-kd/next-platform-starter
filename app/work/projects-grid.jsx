'use client';

import { useState } from 'react';
import Image from 'next/image';

export function ProjectsGrid({ projectsData }) {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            {/* Projects Grid */}
            <section className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-lg mb-4 bg-neutral-900 aspect-video">
                                <Image
                                    src={project.thumbnail}
                                    alt={project.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-primary font-semibold">View Details →</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="font-bold text-lg text-gray-100 group-hover:text-primary transition-colors">
                                        {project.name}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
                                        {project.category}
                                    </span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </>
    );
}

function ProjectModal({ project, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-neutral-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary/20">
                {/* Modal Header */}
                <div className="sticky top-0 bg-neutral-900 border-b border-primary/20 p-6 flex items-start justify-between">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                        <p className="text-gray-400">{project.description}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-primary transition text-2xl leading-none ml-4 flex-shrink-0"
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-semibold">
                            {project.category}
                        </span>
                        <span className="text-gray-400">{project.year}</span>
                    </div>

                    {/* Assets Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.assets.map((asset, index) => (
                            <div key={index} className="flex flex-col gap-3">
                                <div className="relative bg-neutral-800 rounded-lg overflow-hidden aspect-video">
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
                                            className="w-full h-full object-cover"
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

                    {/* Project Details */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg">
                        <h3 className="font-bold mb-3">Project Overview</h3>
                        <p className="text-gray-300 leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="sticky bottom-0 bg-neutral-900 border-t border-primary/20 p-6 flex gap-4">
                    <button
                        onClick={onClose}
                        className="flex-1 btn bg-neutral-800 text-white hover:bg-neutral-700"
                    >
                        Close
                    </button>
                    <a
                        href="mailto:hifza.kd@gmail.com?subject=Interested in your work"
                        className="flex-1 btn btn-lg"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>
        </div>
    );
}
