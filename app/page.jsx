export const metadata = {
    title: 'Hifza Khalid | Graphic Designer & Brand Identity Specialist'
};

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#011627] text-center">
            {/* Hero Section */}
            <section className="flex flex-col items-center gap-6">
                <h1 className="text-4xl sm:text-6xl font-bold">
                    I design websites that attract the right clients before you say a single word.
                </h1>
                <p className="text-lg sm:text-xl text-[#011627] max-w-2xl">
                    Custom portfolio websites for service providers, built around who you are, not just what you do. Brand-first. No templates. No nonsense.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-full hover:bg-blue-600 transition">
                    See How It Works
                </button>
            </section>
        </div>
    );
}
