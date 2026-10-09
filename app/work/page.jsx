import { projectsData } from '../../data/projects';
import { ProjectsGrid } from './projects-grid';

export const metadata = {
    title: 'My Work | Hifza Khalid'
};

const headline = ['Selected', 'work'];

export default function WorkPage() {
    return (
        <div className="page-shell flex flex-col gap-12 pb-20 sm:gap-16 sm:pb-28">
            <section className="pt-6 text-center sm:pt-10">
                <h1 className="mb-5 text-[clamp(3rem,8vw,7rem)] leading-none">
                    {headline.map((word, index) => (
                        <span key={word} className="word-rise mr-[0.25em] last:mr-0" style={{ '--i': index }}>
                            {word}
                        </span>
                    ))}
                </h1>
                <p
                    className="word-rise mx-auto max-w-2xl text-lg text-[#011627]/70 sm:text-xl"
                    style={{ '--i': 4 }}
                >
                    Brand identities, product interfaces and campaign systems. Hover a card to preview it, click to dive in.
                </p>
            </section>

            <ProjectsGrid projectsData={projectsData} />
        </div>
    );
}
