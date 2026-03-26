import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'About Hifza | Graphic Designer & Brand Identity Specialist'
};

const aboutMedia = {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    poster: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Placeholder hero media for the About page'
};

const experiences = [
    {
        company: 'DANK Studio',
        position: 'Creative Content Manager',
        duration: '2024 - Current',
        timeframe: '2024 - Present',
        meta: 'Creative & visual production, short-form video editing, content operations',
        accent: '#9ad05d',
        details: [
            'Designed visuals aligned with brand guidelines, including website banners, carousels, blog infographics, and supporting imagery.',
            'Executed strategic brand development and built a UX/UI-friendly website. Designed a cohesive Brand Guidelines Document for future use.',
            'Edited short-form video content using CapCut, optimised for social platforms.',
            'Ensured visual hooks, pacing, and on-screen text aligned with SEO and social search behaviour.',
            'Managed end-to-end content publishing in WordPress, including formatting, scheduling, and quality checks against an editorial timetable.',
            'Implemented light HTML edits within WordPress using vibe coding to refine layouts, embeds, internal links, and on-page structure.'
        ]
    },
    {
        company: 'BFA Thesis Project',
        position: 'Financial Education App Design',
        duration: 'Jul - Oct 2025',
        timeframe: '2025',
        meta: 'Research, UX strategy, prototyping, testing, campaign design',
        accent: '#7dd3fc',
        details: [
            'Executed research and design of a financial literacy platform addressing gaps in digital financial education in Pakistan.',
            'Developed user personas, empathy maps, and audience-specific design strategies.',
            'Prototyped a mobile app in Figma, progressing from low-fidelity sketches to high-fidelity interactive wireframes.',
            'Executed user testing for refining UX/UI based on feedback.',
            'Designed marketing material including posters, brochures, standees, and social media assets.',
            'Secured 30 early sign-ups during public panel launch testing and validated product-market interest.'
        ]
    },
    {
        company: 'BarqRaftar Technologies Pvt (Ltd.)',
        position: 'Graphic Design Intern',
        duration: 'Nov - Dec 2023',
        timeframe: '2023 - 2023',
        meta: 'Brand strategy, visual identity, motion support',
        accent: '#f4b183',
        details: [
            'Collaborated with the Lead Designer, understanding the company’s branding needs.',
            'Contributed to the development of a cohesive brand strategy via ideation and execution.',
            'Engaged in brand meetings, offering insights and ideas to drive the visual identity forward.',
            'Employed motion design techniques to enhance digital presence.',
            'Managed tasks using project management tools such as Trello to keep the team updated.'
        ]
    }
];

const skills = [
    'Brand Identity Design',
    'Graphic Design',
    'UI Design',
    'Logo Design',
    'Motion Design',
    'Social Media Design',
    'Adobe Illustrator',
    'Figma'
];

export default function Page() {
    return (
        <main className="min-h-screen bg-[#f8f6f1] text-[#011627]">
            <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
                <section className="space-y-6">
                    <div className="flex items-end gap-2">
                        <h1 className="text-5xl leading-none tracking-tight text-[#011627] sm:text-6xl lg:text-7xl">
                            About Me
                        </h1>
                    </div>

                    <div className="overflow-hidden rounded-[1.6rem] border border-[#011627]/10 bg-white shadow-[0_18px_70px_rgba(1,22,39,0.12)]">
                        <div className="relative aspect-[16/9] w-full bg-black">
                            {aboutMedia.type === 'video' ? (
                                <video
                                    src={aboutMedia.src}
                                    poster={aboutMedia.poster}
                                    controls
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <Image
                                    src={aboutMedia.poster}
                                    alt={aboutMedia.alt}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-sm text-white/78 sm:p-5">
                                <div className="rounded-full border border-white/14 bg-black/35 px-3 py-1.5 backdrop-blur">
                                    Video placeholder ready
                                </div>
                                <div className="rounded-full border border-white/14 bg-black/35 px-3 py-1.5 backdrop-blur">
                                    Replace with your intro reel later
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
                    <div className="rounded-[1.5rem] border border-[#011627]/10 bg-white p-3 shadow-[0_12px_40px_rgba(1,22,39,0.06)] sm:p-4">
                        <div className="space-y-2">
                            {experiences.map((exp) => (
                                <details
                                    key={`${exp.company}-${exp.position}`}
                                    className="group rounded-[1.1rem] border border-transparent px-3 py-3 transition-colors hover:border-[#011627]/8 hover:bg-[#011627]/[0.02] open:border-[#011627]/10 open:bg-[#011627]/[0.02] sm:px-4"
                                >
                                    <summary className="grid cursor-pointer list-none items-start gap-4 sm:grid-cols-[minmax(0,1fr)_auto]">
                                        <div className="flex items-start gap-4">
                                            <span
                                                className="mt-1 h-10 w-10 flex-shrink-0 rounded-xl border border-[#011627]/10"
                                                style={{ backgroundColor: exp.accent }}
                                            />
                                            <div className="min-w-0">
                                                <h2 className="text-base font-semibold text-[#011627] sm:text-lg">
                                                    {exp.company}
                                                </h2>
                                                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-[#011627]/58 sm:text-xs">
                                                    {exp.position}
                                                </p>
                                                <p className="mt-1 text-sm text-[#011627]/58">{exp.meta}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 justify-self-start sm:justify-self-end">
                                            <span className="inline-flex rounded-full border border-[#011627]/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-[#011627]/62">
                                                {exp.timeframe}
                                            </span>
                                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#011627]/10 text-[#011627]/70 transition-transform group-open:rotate-180">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                    </summary>
                                    <div className="ml-14 mt-4 border-l border-[#011627]/10 pl-5">
                                        <p className="mb-3 text-sm font-medium text-[#011627]/70">{exp.duration}</p>
                                        <ul className="space-y-2 text-sm leading-7 text-[#011627]/72">
                                            {exp.details.map((detail) => (
                                                <li key={detail} className="relative pl-4">
                                                    <span className="absolute left-0 top-[0.72rem] h-1.5 w-1.5 rounded-full bg-[#011627]/35" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>

                    <aside className="space-y-4">
                        <div className="rounded-[1.5rem] border border-[#011627]/10 bg-white p-6 shadow-[0_12px_40px_rgba(1,22,39,0.06)]">
                            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#011627]/45">Intro</p>
                            <p className="mt-4 text-lg leading-8 text-[#011627]/82">
                                I&apos;m Hifza Khalid, a graphic designer based in Lahore, Pakistan. I build thoughtful visual systems, websites,
                                and brand experiences that feel clear, strategic, and human.
                            </p>
                            <p className="mt-4 text-sm leading-7 text-[#011627]/58">
                                Reliable, collaborative, and curious. I enjoy turning research, ideas, and messy concepts into visuals people can
                                immediately connect with.
                            </p>
                        </div>

                        <div className="rounded-[1.5rem] border border-[#011627]/10 bg-white p-6 shadow-[0_12px_40px_rgba(1,22,39,0.06)]">
                            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#011627]/45">Education</p>
                            <div className="mt-4 space-y-2">
                                <h3 className="text-lg font-semibold text-[#011627]">Bachelor of Fine Arts (BFA)</h3>
                                <p className="text-sm text-[#011627]/68">Design and Visual Communications</p>
                                <p className="text-sm text-[#011627]/58">University of the Punjab, Lahore</p>
                                <p className="text-sm text-[#011627]/45">2022 - 2025</p>
                            </div>
                        </div>

                        <div className="rounded-[1.5rem] border border-[#011627]/10 bg-white p-6 shadow-[0_12px_40px_rgba(1,22,39,0.06)]">
                            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#011627]/45">Selected Skills</p>
                            <div className="mt-4 flex flex-wrap gap-2.5">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-[#011627]/10 px-3 py-1.5 text-sm text-[#011627]/72"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[1.5rem] border border-[#011627]/10 bg-white p-6 shadow-[0_12px_40px_rgba(1,22,39,0.06)]">
                            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-[#011627]/45">Contact</p>
                            <div className="mt-4 space-y-4 text-sm text-[#011627]/68">
                                <a
                                    href="mailto:hifzakhalid03@gmail.com"
                                    className="flex items-center gap-3 no-underline transition-opacity hover:opacity-75"
                                >
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#011627] text-white">
                                        @
                                    </span>
                                    <span>hifzakhalid03@gmail.com</span>
                                </a>
                                <Link
                                    href="https://www.linkedin.com/in/hifzakd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 no-underline transition-opacity hover:opacity-75"
                                >
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0a66c2] text-white">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                            <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 0 0 3.3 4.97c0 1.08.86 1.96 1.92 1.96h.03A1.96 1.96 0 1 0 5.25 3ZM20.44 12.73c0-3.48-1.86-5.1-4.34-5.1-2 0-2.89 1.1-3.39 1.87V8.5H9.33c.05.66 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.89-1.39 1.93-1.39 1.36 0 1.9 1.04 1.9 2.56V20H20V13.4c0-.35.44-.67.44-.67Z" />
                                        </svg>
                                    </span>
                                    <span>LinkedIn</span>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </section>
            </div>
        </main>
    );
}
