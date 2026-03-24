import Link from 'next/link';

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="mt-auto bg-gray-900 text-gray-400 py-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
                <p className="text-sm">&copy; {year} Hifza Khalid. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <Link href="mailto:hifza.kd@gmail.com" className="hover:text-white">
                        Email
                    </Link>
                    <Link href="https://www.linkedin.com/in/hifzakd" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        LinkedIn
                    </Link>
                    <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                        Twitter
                    </Link>
                </div>
            </div>
            <p className="text-center text-xs mt-6">
                You could have been anywhere on the internet, yet you're here. Thanks for visiting!
            </p>
        </footer>
    );
}
