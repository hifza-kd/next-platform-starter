import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Hifza Khalid | Graphic Designer & Brand Identity Specialist'
};

const topSkills = [
    'Brand Identity Design',
    'Graphic Design',
    'UI Design',
    'Logo Design',
    'Concept Art',
    'Advertising Design',
    'Video Editing',
    'WordPress Design',
    'Motion Design',
    'Social Media Design'
];

const softwareTools = [
    'Adobe Illustrator',
    'Figma',
    'Canva',
    'Adobe Photoshop',
    'Adobe InDesign',
];

const services = [
    'Brand Identity Design',
    'Logo Design',
    'User Interface Design',
    'Short Form Video Editing',
    'LinkedIn Carousels',
    'WordPress Backend Customization',
];

const experiences = [
    {
        company: 'DANK Studio',
        position: 'Graphic Designer',
        duration: 'June 2024 - Present',
        location: 'Pakistan',
        description: 'Creating innovative visual identities and design solutions for diverse client base.',
        highlights: []
    },
    {
        company: 'BarqRaftar Technologies Pvt (Ltd.)',
        position: 'Graphic Design Intern',
        duration: 'November 2023 - December 2023',
        location: 'Pakistan',
        description: 'Collaborated with lead designer on brand strategy and visual identity development.',
        highlights: [
            'Contributed to cohesive brand strategy development',
            'Engaged in brand meetings with strategic insights',
            'Applied motion design techniques for digital presence',
            'Managed tasks using project management tools',
            'Learned 3D visual creation and ideation'
        ]
    },
    {
        company: 'DANK Studios',
        position: 'Graphic Design Intern',
        duration: 'July 2023 - September 2023',
        location: 'Pakistan',
        description: 'Led brand identity creation and designed cohesive, user-friendly website.',
        highlights: [
            'Led creation of Dank Studios\' brand identity',
            'Focused on strategic brand development',
            'Designed cohesive, user-friendly website',
            'Enhanced communication and client collaboration skills'
        ]
    },
    {
        company: 'TecHayal',
        position: 'Business Development Intern',
        duration: 'November 2021 - December 2021',
        location: 'Lahore, Punjab, Pakistan',
        description: 'Managed graphic design resources and social media strategy.',
        highlights: [
            'Managed graphic design resources during projects',
            'Drafted creative ideas and developed mood boards',
            'Leveraged freelance experience in social media management',
            'Balanced design with digital marketing responsibilities'
        ]
    },
    {
        company: 'The Chae Club',
        position: 'Brand Identity Designer',
        duration: 'September 2021',
        location: 'Sindh, Pakistan',
        description: 'Designed culturally-inspired brand identity targeting Sindhi youth.',
        highlights: [
            'Conducted thorough research on Sindhi culture',
            'Designed custom logo for target demographic',
            'Demonstrated cultural sensitivity and authenticity'
        ]
    },
    {
        company: 'PrettyTings',
        position: 'Brand Identity Designer',
        duration: 'July 2021',
        location: 'Lahore, Pakistan',
        description: 'Created modern brand aesthetic for minimalistic jewelry brand.',
        highlights: [
            'Conducted market research on target audience',
            'Analyzed competitor positioning',
            'Designed custom thank-you card with hand-written aesthetic'
        ]
    },
    {
        company: 'Rabt Media',
        position: 'Content Writer',
        duration: 'October 2018 - August 2019',
        location: 'Pakistan',
        description: 'Produced engaging content for digital platforms.',
        highlights: []
    }
];

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Hero Section */}
            <section className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start sm:items-center">
                {/* Profile Picture */}
                <div className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56">
                    <div className="relative w-full h-full rounded-lg overflow-hidden ring-2 ring-primary">
                        <Image
                            src="/images/profile-picture.jpeg"
                            alt="Hifza Khalid - Graphic Designer"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Introduction & Contact */}
                <div className="flex flex-col gap-6 flex-1">
                    <div>
                        <h1 className="mb-1">Hifza Khalid</h1>
                        <p className="text-xl text-primary font-semibold mb-4">Graphic Designer</p>
                        <p className="text-gray-300 mb-2">Lahore, Punjab, Pakistan</p>
                    </div>

                    <div className="text-gray-300">
                        <p className="mb-4 leading-relaxed">
                            I am a graphic designer based in Pakistan. I aim to make thoughtful designs that bring the client's vision into reality. I describe myself as reliable and dedicated.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-3 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="text-primary">📱</span>
                            <a href="tel:+923312300732" className="hover:text-primary transition">
                                +92 331 2300732
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-primary">✉️</span>
                            <a href="mailto:hifza.kd@gmail.com" className="hover:text-primary transition">
                                hifza.kd@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-primary">💼</span>
                            <a href="https://www.linkedin.com/in/hifzakd" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                                LinkedIn
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-primary">🎨</span>
                            <a href="https://bento.me/hifzakhalid" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                                Portfolio Website
                            </a>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                        <a href="mailto:hifza.kd@gmail.com" className="btn btn-lg inline-block">
                            Let's Work Together ☕
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="flex flex-col gap-6">
                <h2>Services I Provide</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    {services.map((service) => (
                        <div
                            key={service}
                            className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-all"
                        >
                            <p className="font-semibold text-gray-100">✨ {service}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Top Skills Section */}
            <section className="flex flex-col gap-6">
                <h2>Top Skills</h2>
                <div className="flex flex-wrap gap-3">
                    {topSkills.map((skill) => (
                        <div
                            key={skill}
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-gray-100 font-medium hover:border-primary/60 hover:from-primary/30 hover:to-secondary/30 transition-all"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </section>

            {/* Software Tools Section */}
            <section className="flex flex-col gap-6">
                <h2>Software I Use</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                    {softwareTools.map((tool) => (
                        <div
                            key={tool}
                            className="px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-gray-100 hover:border-primary/40 transition-all flex items-center gap-2"
                        >
                            <span className="text-primary">⚙️</span>
                            {tool}
                        </div>
                    ))}
                </div>
            </section>

            {/* Languages Section */}
            <section className="flex flex-col gap-6">
                <h2>Languages</h2>
                <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                        <p className="font-semibold text-gray-100">English</p>
                        <p className="text-sm text-gray-400">Full Professional Proficiency</p>
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                        <p className="font-semibold text-gray-100">Urdu</p>
                        <p className="text-sm text-gray-400">Native</p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="flex flex-col gap-6">
                <h2>Professional Experience</h2>
                <div className="flex flex-col gap-6">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="border-l-4 border-primary pl-6 py-2 hover:border-secondary transition-colors"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-100">{exp.position}</h3>
                                    <p className="text-primary font-medium">{exp.company}</p>
                                </div>
                                <p className="text-sm text-gray-400 whitespace-nowrap">{exp.duration}</p>
                            </div>
                            <p className="text-sm text-gray-400 mb-3">{exp.location}</p>
                            <p className="text-gray-300 mb-3">{exp.description}</p>
                            {exp.highlights.length > 0 && (
                                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                                    {exp.highlights.map((highlight, idx) => (
                                        <li key={idx} className="list-disc">
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section className="flex flex-col gap-6">
                <h2>Education</h2>
                <div className="border-l-4 border-secondary pl-6 py-2">
                    <h3 className="text-lg font-semibold mb-1 text-gray-100">Bachelor of Fine Arts (BFA)</h3>
                    <p className="text-primary font-medium mb-2">Design and Visual Communications</p>
                    <p className="text-gray-400">University of the Punjab, Lahore</p>
                    <p className="text-gray-400 text-sm mt-2">2022 - 2025</p>
                </div>
            </section>

            {/* Interests Section */}
            <section className="flex flex-col gap-6">
                <h2>When I'm Not Designing</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                        <p className="text-center text-gray-100">📚 Reading</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                        <p className="text-center text-gray-100">🍽️ Searching for the next food place to visit</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                        <p className="text-center text-gray-100">💭 Overthinking</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 text-center">
                <h2 className="mb-4">Let's Connect & Collaborate</h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    I am always available to discuss things and excited to talk about design. Leave a message and let's connect! ☕
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="mailto:hifza.kd@gmail.com" className="btn btn-lg">
                        Send Me a Message
                    </a>
                    <a href="https://bento.me/hifzakhalid" target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ backgroundColor: 'var(--color-secondary)' }}>
                        View Full Portfolio
                    </a>
                </div>
            </section>
        </div>
    );
}
