import { projectsData } from '../../data/projects';
import { ProjectsGrid } from './projects-grid';

export const metadata = {
    title: 'My Work | Hifza Khalid'
};

export default function WorkPage() {
    return (
        <div className="page-shell flex flex-col gap-12 pb-20 sm:gap-16 sm:pb-28">
            <section className="text-center">
                <h1 className="mb-4">My Work</h1>
                <p className="mx-auto max-w-2xl text-xl text-[#011627]/70">
                    A selection of product, brand, and motion work presented as featured case-study cards. Hover previews are built to support either still imagery now or video later without changing the layout.
                </p>
            </section>

            <ProjectsGrid projectsData={projectsData} />
        </div>
    );
}
