import { FeaturedProjectsCarousel } from '../components/FeaturedProjectsCarousel';
import { InteractiveHero } from '../components/InteractiveHero';

export const metadata = {
    title: 'Hifza Khalid | Graphic Designer & Brand Identity Specialist'
};

export default function Page() {
    return (
        <>
            <InteractiveHero />
            <FeaturedProjectsCarousel />
        </>
    );
}
