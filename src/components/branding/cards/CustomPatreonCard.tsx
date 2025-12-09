"use client";

import clsx from "clsx";
import Image from "next/image";

// Define the shape of the card data expected as a prop
export interface CustomCardData {
    title: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage?: { url: string; alt: string };
    cardIcon?: { url: string; alt: string; sizes?: { icon?: { url?: string; } } };
}

const CustomPatreonCard = ({ className, cardData }: { className?: string, cardData: CustomCardData }) => {
    if (!cardData) {
        return null;
    }

    // Use the provided background image or a default fallback
    const backgroundStyle = cardData.backgroundImage
        ? { backgroundImage: `url(${process.env.NEXT_PUBLIC_PAYLOAD_URL || ''}${cardData.backgroundImage.url})` }
        : { backgroundImage: 'url(/patreon-blue-shapes.svg)' };

    return (
        <div
            className={clsx(
                "square group relative flex w-full flex-col rounded-xl border-2 border-hosGold bg-portalBg transition-shadow hover:shadow-lg hover:shadow-portalBg/25 overflow-hidden",
                className
            )}
        >
            <a href={cardData.buttonLink || "#"} className="flex h-full flex-col">
                <div className="flex h-full grow flex-col justify-end rounded-lg bg-black text-white">
                    <div
                        className="mt-4 flex grow w-full bg-contain bg-bottom bg-no-repeat"
                        style={backgroundStyle}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {cardData.cardIcon?.url ? (
                                <div className="relative w-[194px] h-[47px]">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_PAYLOAD_URL || ''}${cardData.cardIcon.sizes?.icon?.url || cardData.cardIcon.url}`}
                                        alt={cardData.cardIcon.alt}
                                        className="object-contain"
                                        fill
                                        sizes="100vw" />
                                </div>
                            ) : (
                                (<div className="w-full h-full bg-[url(/patreon-blue-shapes.svg)] bg-contain bg-bottom bg-no-repeat" />)
                            )}
                        </div>
                    </div>
                    <div className="flex items-center justify-between px-8 pb-8">
                        <h3 className="mt-4 text-3xl font-medium tracking-tight">
                            {cardData.title || "Support Us"}
                        </h3>
                    </div>
                </div>
                <div className="flex items-center rounded-xl bg-portalBg px-6">
                    <button className="my-6 select-none max-h-fit w-fit rounded-full border-2 border-hosGold bg-transparent px-8 py-[0.35rem] text-sm font-bold tracking-tight text-hosGold transition-colors group-hover:bg-hosGold group-hover:text-white">
                        {cardData.buttonText || "Learn More"}
                    </button>
                </div>
            </a>
        </div>
    );
};

export default CustomPatreonCard;
