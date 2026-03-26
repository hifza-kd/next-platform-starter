import { ProjectsGrid } from './projects-grid';

export const metadata = {
    title: 'My Work | Hifza Khalid'
};

const projectsData = [
    {
        id: 1,
        name: 'MCB Money Map',
        category: 'Product Design',
        year: 2024,
        href: '/ux/mcb-money-map',
        description: 'A research-led financial literacy experience designed to make budgeting, saving, and investing more visual and approachable for Pakistani youth.',
        thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
        hoverMedia: {
            type: 'video',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
            poster: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80'
        },
        accent: 'radial-gradient(circle at 68% 34%, rgba(143, 29, 38, 0.85), transparent 32%), radial-gradient(circle at 24% 74%, rgba(90, 11, 21, 0.9), transparent 28%), linear-gradient(180deg, #a1a1a1 0%, #4c4c4c 100%)',
        assets: [
            {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
                alt: 'Interactive signup flow',
                title: 'Signup Experience'
            },
            {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
                alt: 'Onboarding interface details',
                title: 'Flow Details'
            }
        ]
    },
    {
        id: 2,
        name: 'Designing for Growth, Monetization & Feature Adoption',
        brand: 'BambooHR',
        category: 'UX Systems',
        year: 2024,
        description: 'Designing feature education, in-product prompts, and upgrade moments that support business goals without harming clarity.',
        thumbnail: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=80',
        hoverMedia: {
            type: 'video',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            poster: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=80'
        },
        accent: 'linear-gradient(180deg, rgba(7, 44, 20, 0.82), rgba(3, 21, 9, 0.9)), repeating-linear-gradient(90deg, rgba(124, 182, 102, 0.14) 0 18px, transparent 18px 68px)',
        assets: [
            {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1400&q=80',
                alt: 'Feature adoption campaign',
                title: 'Feature Spotlight'
            },
            {
                type: 'video',
                src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
                alt: 'Motion prototype for upgrade nudges',
                title: 'Motion Prototype'
            }
        ]
    },
    {
        id: 3,
        name: 'Founding Designer of an AI-First Business Intelligence Platform',
        brand: 'Bips',
        category: 'Product Design',
        year: 2025,
        description: 'Shaping an early product language around trust, simplicity, and signal-rich dashboards for a new AI workflow.',
        thumbnail: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
        hoverMedia: {
            type: 'video',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
            poster: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80'
        },
        accent: 'linear-gradient(180deg, rgba(240, 238, 224, 0.6), rgba(102, 120, 88, 0.78)), radial-gradient(circle at 50% 110%, rgba(90, 102, 70, 0.72), transparent 45%)',
        assets: [
            {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
                alt: 'Analytics dashboard placeholder',
                title: 'Platform Overview'
            },
            {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
                alt: 'Business intelligence views',
                title: 'Dashboard Language'
            }
        ]
    },
    {
        id: 4,
        name: 'Campaign Identity System',
        brand: 'Studio Work',
        category: 'Brand Design',
        year: 2023,
        description: 'A bold visual system built to scale across motion, social, presentation, and launch assets with one recognisable look.',
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
        hoverMedia: {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80'
        },
        accent: 'linear-gradient(180deg, rgba(22, 22, 22, 0.88), rgba(8, 8, 8, 0.95)), linear-gradient(90deg, rgba(176, 26, 36, 0.95) 0 16%, transparent 16% 34%, rgba(176, 26, 36, 0.95) 34% 50%, transparent 50% 68%, rgba(176, 26, 36, 0.95) 68% 84%, transparent 84% 100%)',
        assets: [
            {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
                alt: 'Campaign system placeholder',
                title: 'Identity Frame'
            },
            {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80',
                alt: 'Editorial composition placeholder',
                title: 'Static Hover Preview'
            }
        ]
    },
    {
        id: 5,
        name: 'Design System for Story-Driven Interfaces',
        brand: 'Product Ops',
        category: 'Motion Design',
        year: 2023,
        description: 'A modular UI library designed to support expressive interactions, onboarding flows, and animated communication patterns.',
        thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
        hoverMedia: {
            type: 'video',
            src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
            poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80'
        },
        accent: 'linear-gradient(180deg, rgba(18, 18, 21, 0.92), rgba(8, 8, 12, 0.98)), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0 1px, transparent 1px)',
        accentSize: '20px 20px',
        assets: [
            {
                type: 'video',
                src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
                alt: 'Animated interface system',
                title: 'Motion Language'
            },
            {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
                alt: 'UI system placeholder',
                title: 'Component Surface'
            }
        ]
    },
    {
        id: 6,
        name: 'Motion-Ready Social Launch Kit',
        brand: 'Campaign Design',
        category: 'Social Media Design',
        year: 2024,
        description: 'A flexible launch package built for static posts first, with an easy path to animated cutdowns and short-form video later.',
        thumbnail: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1400&q=80',
        hoverMedia: {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1400&q=80'
        },
        accent: 'linear-gradient(180deg, rgba(7, 7, 7, 0.9), rgba(0, 0, 0, 0.96))',
        assets: [
            {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1400&q=80',
                alt: 'Launch campaign placeholder',
                title: 'Campaign Card'
            },
            {
                type: 'image',
                src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
                alt: 'Static design boards',
                title: 'Static Preview That Can Become Video Later'
            }
        ]
    }
];

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
