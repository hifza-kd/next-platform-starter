import Link from "next/link";
export default function UXUIPage() {
    const projects = [
        {
          title: "MCB Money Map",
          description: "Financial Education App for Gen Z.",
          image: "/images/corgi.jpg",
          slug: "mcb-money-map",
        },
        {
          title: "Portfolio Dashboard",
          description: "Investment tracking experience.",
          image: "/images/corgi.jpg",
          slug: "portfolio-dashboard",
        },
        {
          title: "E-Commerce UX",
          description: "Conversion-focused product redesign.",
          image: "/images/corgi.jpg",
          slug: "ecommerce-ux",
        },
      ];
      return (
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6">UX/UI Design</h1>
      
          <p className="text-lg text-gray-300 mb-4">
            Explore our design philosophy, case studies, and creative process.
          </p>
      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={`/ux/${project.slug}`}
                className="p-4 bg-neutral-800 rounded-lg block no-underline transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                <img
     Í             src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>
      );
    }