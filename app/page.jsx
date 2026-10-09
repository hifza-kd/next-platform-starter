import { FeaturedProjectsCarousel } from '../components/FeaturedProjectsCarousel';
import {
    AboutTeaser,
    ContactCta,
    IntroStatement,
    Process,
    Services,
    Stats,
    ToolsMarquee
} from '../components/HomeSections';
import { InteractiveHero } from '../components/InteractiveHero';

export const metadata = {
    title: 'Hifza Khalid | Graphic Designer & Brand Identity Specialist'
};

export default function Page() {
    return (
        <>
            <InteractiveHero />
            <FeaturedProjectsCarousel />
            <IntroStatement />
            <Services />
            <Stats />
            <Process />
            <ToolsMarquee />
            <AboutTeaser />
            <ContactCta />
        </>
    );
}
