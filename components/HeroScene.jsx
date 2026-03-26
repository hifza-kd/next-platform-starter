import Image from 'next/image';

const staticLayers = [
    {
        id: 'books',
        alt: 'Book stack on the side table',
        src: '/images/Hero image/book stack table.svg',
        wrapperClassName: 'left-[83.2%] top-[46.6%] h-[13.1%] w-[11.8%] z-20'
    }
];

const layers = [
    {
        id: 'me',
        alt: 'Woman sitting in the chair',
        staticSrc: '/images/Hero image/me static.svg',
        hoverSrc: '/images/Hero image/me hover.svg',
        wrapperClassName: 'left-[28.6%] top-[23.8%] h-[56.2%] w-[30.4%] translate-x-[5px] -translate-y-[90px] z-30',
        imageClassName: 'object-contain',
        hoverImageClassName: 'object-contain'
    },
    {
        id: 'cat',
        alt: 'Cat sleeping on the shelf',
        staticSrc: '/images/Hero image/cat static.svg',
        hoverSrc: '/images/Hero image/cat hover.svg',
        wrapperClassName: 'left-[60.8%] top-[6.9%] h-[27%] w-[18.6%] -translate-y-[100px] z-30',
        imageClassName: 'object-contain',
        hoverImageClassName: 'object-contain translate-x-[30px] -translate-y-[60px]'
    }
];

export function HeroScene() {
    return (
        <div className="relative w-full">
            <div className="relative aspect-[519/385] w-full">
                <div className="absolute inset-0 z-10">
                    <Image
                        src="/images/Hero image/Scene.svg"
                        alt="Illustrated living room scene"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>

                {staticLayers.map((layer) => (
                    <div key={layer.id} className={`absolute ${layer.wrapperClassName}`}>
                        <div className="relative h-full w-full">
                            <Image src={layer.src} alt={layer.alt} fill className="object-contain" />
                        </div>
                    </div>
                ))}

                {layers
                    .filter((layer) => layer.id !== 'curtain')
                    .map((layer) => (
                        <div key={layer.id} className={`group absolute ${layer.wrapperClassName}`}>
                            <div className="relative h-full w-full cursor-pointer">
                                <Image
                                    src={layer.staticSrc}
                                    alt={layer.alt}
                                    fill
                                    className={`${layer.imageClassName} opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0`}
                                />
                                <Image
                                    src={layer.hoverSrc}
                                    alt={layer.alt}
                                    fill
                                    className={`${layer.hoverImageClassName ?? layer.imageClassName} opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100`}
                                />
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
