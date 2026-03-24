import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8">HI, I'M HIFZA!</h1>

      <div className="max-w-2xl mx-auto space-y-6 text-left">
        <p className="flex items-start gap-3">
          <span className="font-mono text-xl">1</span>
          From Lahore, Pakistan. A graphic designer and UX enthusiast who loves
          turning ideas into clean visual experiences.
        </p>
        <p className="flex items-start gap-3">
          <span className="font-mono text-xl">2</span>
          I believe that design should be simple, functional, and delightful –
          and that the best projects come from collaboration.
        </p>
        <p className="flex items-start gap-3">
          <span className="font-mono text-xl">3</span>
          When I’m not designing, you’ll find me sketching, drinking chai, or
          exploring new music. (Placeholder text goes here.)
        </p>
      </div>

      <div className="mt-12">
        {/* placeholder image; replace with a real photo later */}
        <Image
          src="https://via.placeholder.com/600x400"
          alt="Placeholder"
          width={600}
          height={400}
          className="rounded-lg mx-auto"
        />
      </div>
    </section>
  );
}
