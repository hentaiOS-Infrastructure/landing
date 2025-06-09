import React from "react";
import clsx from "clsx";
import Image from "next/image"; // For rendering the uploaded icon

// Interface for the populated 'cardIcon' object from Payload
interface PayloadMedia {
    id: string;
    alt: string;
    url: string;
    filename?: string;
    mimeType?: string;
    filesize?: number;
    width?: number;
    height?: number;
    // Add 'sizes' if you have imageSizes configured and want to use them
    // sizes?: { thumbnail?: { url?: string }; /* other sizes */ };
}

export interface DynamicCardData {
    cardIdentifier: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    cardIcon?: PayloadMedia | null; // Optional uploaded icon
    backgroundColorClass?: string;
    textColorClass?: string;
    borderColorClass?: string;
    buttonCustomClasses?: string;
    className?: string;
}

const DynamicContentCard: React.FC<DynamicCardData> = ({
    title,
    description,
    buttonText,
    buttonLink,
    cardIcon,
    backgroundColorClass = "bg-hosPink",
    textColorClass = "text-white",
    borderColorClass = "border-hosPink",
    buttonCustomClasses = "border-2 border-hosPink bg-transparent text-hosPink group-hover:bg-hosPink group-hover:text-white",
    className,
}) => {
    return (
        <div
            className={clsx(
                "square group relative flex w-full flex-col rounded-xl transition-shadow md:hover:shadow-lg md:hover:shadow-portalBg/25",
                borderColorClass ? `border-2 ${borderColorClass}/25 md:${borderColorClass}` : "border-2 border-hosPink/25 md:border-hosPink",
                className
            )}
        >
            <a href={buttonLink} className="flex flex-col h-full">
                <div
                    className={clsx(
                        "flex flex-col justify-start rounded-t-lg",
                        backgroundColorClass,
                        textColorClass,
                        "flex-grow p-8"
                    )}
                >
                    {cardIcon?.url && (
                        <div className="mb-4 h-[42px] w-[190px] relative"> {/* Adjust size as needed or make dynamic */}
                            <Image
                                src={`${process.env.NEXT_PUBLIC_PAYLOAD_URL || ''}${cardIcon.url}`}
                                alt={cardIcon.alt || title} // Fallback to title for alt text
                                fill // Replaces layout="fill"
                                // objectFit="contain" // Use className instead
                                className="object-contain" // Added object-contain
                            />
                        </div>
                    )}
                    <h3 className="mt-4 text-3xl font-medium tracking-tight">
                        {title}
                    </h3>
                    <p className="mt-2 tracking-tight flex-grow">
                        {description}
                    </p>
                </div>
                <div className={clsx(
                    "flex items-center px-6 py-6",
                    !backgroundColorClass && "bg-white" // Add white bg if top section has no explicit bg
                )}>
                    <button
                        className={clsx(
                            "select-none w-fit rounded-full px-8 py-[0.35rem] text-sm font-bold tracking-tight transition-colors",
                            buttonCustomClasses
                        )}
                    >
                        {buttonText}
                    </button>
                </div>
            </a>
        </div>
    );
};

export default DynamicContentCard;
