import { ProjectsGrid } from './projects-grid';

export const metadata = {
    title: 'My Work | Hifza Khalid'
};

// Projects data structure - easy to edit and update
const projectsData = [
    {
        id: 1,
        name: 'DANK Studio - Brand Identity',
        category: 'Brand Design',
        year: 2023,
        description: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
        thumbnail: '/images/placeholder-1.jpg',
        assets: [
            {
                type: 'image',
                src: '/images/placeholder-1.jpg',
                alt: 'DANK Studio Logo Design',
                title: 'Logo Design'
            },
            {
                type: 'image',
                src: '/images/placeholder-2.jpg',
                alt: 'DANK Studio Brand Guidelines',
                title: 'Brand Guidelines'
            },
            {
                type: 'image',
                src: '/images/placeholder-3.jpg',
                alt: 'DANK Studio Color Palette',
                title: 'Color Palette & Typography'
            },
            {
                type: 'video',
                src: 'https://placeholder.com/video.mp4',
                alt: 'DANK Studio Brand Animation',
                title: 'Brand Animation'
            }
        ]
    },
    {
        id: 2,
        name: 'Website Design & Development',
        category: 'Web Design',
        year: 2023,
        description: 'User-friendly website design ensuring cohesive brand experience across all pages.',
        thumbnail: '/images/placeholder-2.jpg',
        assets: [
            {
                type: 'image',
                src: '/images/placeholder-1.jpg',
                alt: 'Website Homepage Design',
                title: 'Homepage Design'
            },
            {
                type: 'image',
                src: '/images/placeholder-2.jpg',
                alt: 'Website Interior Pages',
                title: 'Interior Pages'
            },
            {
                type: 'image',
                src: '/images/placeholder-3.jpg',
                alt: 'Website Mobile Design',
                title: 'Mobile Responsive Design'
            }
        ]
    },
    {
        id: 3,
        name: 'The Chae Club - Cultural Brand',
        category: 'Brand Design',
        year: 2021,
        description: 'Culturally-inspired brand identity targeting Sindhi youth with custom logo design.',
        thumbnail: '/images/placeholder-3.jpg',
        assets: [
            {
                type: 'image',
                src: '/images/placeholder-1.jpg',
                alt: 'The Chae Club Logo',
                title: 'Custom Logo Design'
            },
            {
                type: 'image',
                src: '/images/placeholder-2.jpg',
                alt: 'The Chae Club Brand Collateral',
                title: 'Brand Collateral'
            }
        ]
    },
    {
        id: 4,
        name: 'PrettyTings - Jewelry Brand',
        category: 'Brand Design',
        year: 2021,
        description: 'Modern brand aesthetic for minimalistic jewelry brand with market research insights.',
        thumbnail: '/images/placeholder-1.jpg',
        assets: [
            {
                type: 'image',
                src: '/images/placeholder-1.jpg',
                alt: 'PrettyTings Logo',
                title: 'Logo Design'
            },
            {
                type: 'image',
                src: '/images/placeholder-2.jpg',
                alt: 'PrettyTings Product Packaging',
                title: 'Product Packaging'
            },
            {
                type: 'image',
                src: '/images/placeholder-3.jpg',
                alt: 'PrettyTings Thank You Card',
                title: 'Custom Thank You Card'
            }
        ]
    },
    {
        id: 5,
        name: 'Motion Design & Animations',
        category: 'Motion Design',
        year: 2023,
        description: 'Dynamic motion design and animations for enhanced digital presence and storytelling.',
        thumbnail: '/images/placeholder-2.jpg',
        assets: [
            {
                type: 'video',
                src: 'https://placeholder.com/animation-1.mp4',
                alt: 'Logo Animation',
                title: 'Logo Animation'
            },
            {
                type: 'video',
                src: 'https://placeholder.com/animation-2.mp4',
                alt: 'Brand Intro Animation',
                title: 'Brand Intro Animation'
            },
            {
                type: 'image',
                src: '/images/placeholder-1.jpg',
                alt: 'Animation Storyboards',
                title: 'Animation Storyboards'
            }
        ]
    },
    {
        id: 6,
        name: 'Social Media & Content',
        category: 'Social Media Design',
        year: 2024,
        description: 'LinkedIn carousels, social media graphics, and engaging visual content for digital campaigns.',
        thumbnail: '/images/placeholder-3.jpg',
        assets: [
            {
                type: 'image',
                src: '/images/placeholder-1.jpg',
                alt: 'LinkedIn Carousel Design',
                title: 'LinkedIn Carousel'
            },
            {
                type: 'image',
                src: '/images/placeholder-2.jpg',
                alt: 'Social Media Graphics',
                title: 'Social Media Graphics'
            },
            {
                type: 'video',
                src: 'https://placeholder.com/social-video.mp4',
                alt: 'Short Form Video Content',
                title: 'Short Form Video Content'
            }
        ]
    },
    {
        id: 7,
        name: '3D Design & Visualization',
        category: '3D Design',
        year: 2023,
        description: 'Explored 3D visual creation, ideation, and tools for enhanced visual storytelling.',
        thumbnail: '/images/placeholder-1.jpg',
        assets: [
            {
                type: 'image',
                src: '/images/placeholder-1.jpg',
                alt: '3D Model Render 1',
                title: '3D Model Render'
            },
            {
                type: 'image',
                src: '/images/placeholder-2.jpg',
                alt: '3D Visualization',
                title: '3D Visualization'
            }
        ]
    },
    {
        id: 8,
        name: 'WordPress Backend Customization',
        category: 'Web Design',
        year: 2024,
        description: 'Custom WordPress backend editing and frontend design modifications for blog aesthetics.',
        thumbnail: '/images/placeholder-2.jpg',
        assets: [
            {
                type: 'image',
                src: '/images/placeholder-1.jpg',
                alt: 'Before WordPress Customization',
                title: 'Before Customization'
            },
            {
                type: 'image',
                src: '/images/placeholder-2.jpg',
                alt: 'After WordPress Customization',
                title: 'After Customization'
            },
            {
                type: 'image',
                src: '/images/placeholder-3.jpg',
                alt: 'Code Implementation',
                title: 'Code & Customizations'
            }
        ]
    }
];

export default function WorkPage() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Page Header */}
            <section className="text-center">
                <h1 className="mb-4">My Work</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    A showcase of my design projects, from brand identities to web design, motion graphics, and everything in between. Click on any project to explore the details.
                </p>
            </section>

            {/* Projects Grid Component */}
            <ProjectsGrid projectsData={projectsData} />
        </div>
    );
}
