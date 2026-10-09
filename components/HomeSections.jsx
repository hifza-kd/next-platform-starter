import Image from 'next/image';
import { ArrowLink } from './ArrowLink';
import { Reveal } from './Reveal';
import { ScrollWords } from './ScrollWords';

const services = [
    {
        number: '01',
        title: 'Brand Identity',
        copy: 'Logos, colour, type and guidelines that hold together from a business card to a billboard.'
    },
    {
        number: '02',
        title: 'UI & UX Design',
        copy: 'Research-led flows and prototypes in Figma, tested with real people before anything ships.'
    },
    {
        number: '03',
        title: 'Social & Campaign',
        copy: 'Launch kits, carousels and posters built to scale across every channel without losing the look.'
    },
    {
        number: '04',
        title: 'Motion & Video',
        copy: 'Short-form edits and motion touches that give a static brand some rhythm.'
    }
];

const stats = [
    { value: '175', label: 'survey responses shaped one thesis project' },
    { value: '10', label: 'usability testers put the prototype through its paces' },
    { value: '30', label: 'early sign-ups at its public panel launch' }
];

const steps = [
    { title: 'Listen', copy: 'Start with the people who will use the thing. Surveys, interviews, a lot of questions.' },
    { title: 'Explore', copy: 'Personas, sketches and rough concepts. Many ideas on the table, most of them wrong.' },
    { title: 'Build', copy: 'Turn the right idea into a system: type, colour, components, high-fidelity screens.' },
    { title: 'Test & refine', copy: 'Put it in front of people, watch where it wobbles, then make it better.' }
];

const tools = ['Figma', 'Adobe Illustrator', 'Photoshop', 'CapCut', 'WordPress', 'Trello'];

export function IntroStatement() {
    return (
        <section className="bg-white px-6 py-24 text-[#011627] sm:px-10 sm:py-32 lg:px-16 xl:px-20">
            <p className="mb-6 text-xs uppercase tracking-[0.28em] text-[#011627]/50">What I do</p>
            <ScrollWords
                className="max-w-[26ch] text-[clamp(2rem,5vw,4.75rem)] leading-[1.08] tracking-tight sm:max-w-[30ch]"
                text="I design brands and interfaces that feel clear, strategic and human, starting with the person on the other end and following the idea all the way to the final file."
            />
        </section>
    );
}

export function Services() {
    return (
        <section className="bg-[#f8f6f1] px-6 py-20 text-[#011627] sm:px-10 sm:py-28 lg:px-16 xl:px-20">
            <Reveal>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <h2 className="text-[clamp(2.25rem,4.5vw,4.5rem)] leading-none tracking-tight">How I can help</h2>
                    <p className="max-w-md text-lg text-[#011627]/65">
                        One designer, a few ways in. Pick one, or bring the whole messy brief.
                    </p>
                </div>
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {services.map((service, index) => (
                    <Reveal key={service.title} delay={index * 90}>
                        <article className="lift group flex h-full min-h-[16rem] flex-col justify-between rounded-[1.5rem] border border-[#011627]/10 bg-white p-7">
                            <span className="text-sm text-[#047AE4]">{service.number}</span>
                            <div>
                                <h3 className="text-2xl transition-colors group-hover:text-[#047AE4]">{service.title}</h3>
                                <p className="mt-3 text-base leading-7 text-[#011627]/65">{service.copy}</p>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

export function Stats() {
    return (
        <section className="bg-[#011627] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 xl:px-20">
            <Reveal>
                <p className="max-w-2xl text-xl leading-8 text-white/70 sm:text-2xl sm:leading-9">
                    Good design is easier to trust when it is tested. Numbers from my MCB Money Map case study:
                </p>
            </Reveal>

            <div className="mt-12 grid gap-10 sm:grid-cols-3">
                {stats.map((stat, index) => (
                    <Reveal key={stat.value} delay={index * 120}>
                        <p className="text-[clamp(4rem,9vw,8rem)] leading-none tracking-tight text-[#2bdcd2]">{stat.value}</p>
                        <p className="mt-3 max-w-[18rem] text-base leading-7 text-white/65">{stat.label}</p>
                    </Reveal>
                ))}
            </div>

            <Reveal delay={150} className="mt-12">
                <ArrowLink href="/ux/mcb-money-map" variant="light">
                    Read the case study
                </ArrowLink>
            </Reveal>
        </section>
    );
}

export function Process() {
    return (
        <section className="bg-white px-6 py-20 text-[#011627] sm:px-10 sm:py-28 lg:px-16 xl:px-20">
            <Reveal>
                <h2 className="text-[clamp(2.25rem,4.5vw,4.5rem)] leading-none tracking-tight">How I work</h2>
            </Reveal>

            <ol className="mt-12 border-t border-[#011627]/15">
                {steps.map((step, index) => (
                    <Reveal key={step.title} delay={index * 80}>
                        <li className="group grid items-baseline gap-2 border-b border-[#011627]/15 py-7 transition-colors hover:bg-[#047AE4]/[0.04] sm:grid-cols-[6rem_1fr_1.4fr] sm:gap-8 sm:px-2">
                            <span className="text-sm text-[#011627]/45">0{index + 1}</span>
                            <h3 className="text-3xl transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">{step.title}</h3>
                            <p className="text-base leading-7 text-[#011627]/65 sm:text-lg">{step.copy}</p>
                        </li>
                    </Reveal>
                ))}
            </ol>
        </section>
    );
}

export function ToolsMarquee() {
    const loop = [...tools, ...tools];

    return (
        <section aria-label="Tools I use" className="marquee overflow-hidden border-y border-[#011627]/10 bg-[#f8f6f1] py-8 text-[#011627]">
            <div className="marquee-track" aria-hidden="true">
                {loop.map((tool, index) => (
                    <span key={`${tool}-${index}`} className="flex items-center whitespace-nowrap text-3xl sm:text-5xl">
                        <span className="px-8 sm:px-12">{tool}</span>
                        <span className="text-[#E76F2E]">&#10038;</span>
                    </span>
                ))}
            </div>
            <p className="sr-only">Tools: {tools.join(', ')}</p>
        </section>
    );
}

export function AboutTeaser() {
    return (
        <section className="bg-white px-6 py-20 text-[#011627] sm:px-10 sm:py-28 lg:px-16 xl:px-20">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <Reveal>
                    <div className="group relative mx-auto aspect-[4/5] w-full max-w-[26rem] overflow-hidden rounded-[2rem] bg-[#f8f6f1] lg:mx-0">
                        <Image
                            src="/images/profile-picture.jpeg"
                            alt="Portrait of Hifza Khalid"
                            fill
                            sizes="(min-width: 1024px) 26rem, 90vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>
                </Reveal>

                <Reveal delay={120}>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#011627]/50">About</p>
                    <h2 className="mt-4 text-[clamp(2.25rem,4.5vw,4.5rem)] leading-none tracking-tight">Hi, I&apos;m Hifza.</h2>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-[#011627]/70">
                        A graphic designer from Lahore who loves turning research, ideas and messy concepts into visuals people connect
                        with straight away. I believe the best work comes from collaboration, and from enough chai.
                    </p>
                    <p className="mt-4 max-w-xl text-base leading-7 text-[#011627]/55">
                        Currently shaping content and brand at DANK Studio. Previously a BFA thesis on financial literacy, and a design
                        internship in brand strategy and motion.
                    </p>
                    <div className="mt-8">
                        <ArrowLink href="/about" variant="outline">
                            More about me
                        </ArrowLink>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export function ContactCta() {
    return (
        <section className="bg-[#047AE4] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16 xl:px-20">
            <Reveal>
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">Let&apos;s talk</p>
                <h2 className="mt-5 max-w-[16ch] text-[clamp(2.75rem,7vw,7rem)] leading-[0.98] tracking-tight">
                    Got an idea? Let&apos;s make it unforgettable.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                    Open to brand, product and campaign projects. A rough brief is fine, I would rather start the conversation early.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                    <ArrowLink href="mailto:hifzakhalid03@gmail.com" variant="light">
                        Say hello
                    </ArrowLink>
                    <ArrowLink href="/work" variant="light" className="!bg-transparent !text-white ring-1 ring-white/50">
                        See my work
                    </ArrowLink>
                </div>
            </Reveal>
        </section>
    );
}
