"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface CustomCardData {
    title: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage?: { url: string; alt: string };
    logo?: { url: string; alt: string };
}

async function getCustomCardData(identifier: string): Promise<CustomCardData | null> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/content-cards?where[cardIdentifier][equals]=${identifier}&limit=1&depth=1`
        );
        if (!res.ok) {
            console.error(`Failed to fetch custom card data for ${identifier}:`, res.status, await res.text());
            return null;
        }
        const data = await res.json();
        if (data.docs && data.docs.length > 0) {
            const doc = data.docs[0];
            return {
                title: doc.title,
                buttonText: doc.buttonText,
                buttonLink: doc.buttonLink,
                backgroundImage: doc.backgroundImage, // Assuming a 'backgroundImage' field in Payload
                logo: doc.cardIcon, // Reusing cardIcon as logo
            };
        }
        return null;
    } catch (error) {
        console.error(`Error fetching custom card data for ${identifier}:`, error);
        return null;
    }
}


const CustomPatreonCard = ({ className, cardIdentifier }: { className?: string, cardIdentifier: string }) => {
    const [cardData, setCardData] = useState<CustomCardData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const data = await getCustomCardData(cardIdentifier);
            setCardData(data);
            setLoading(false);
        }
        if (cardIdentifier) {
            fetchData();
        }
    }, [cardIdentifier]);

    if (loading) {
        return (
            <div className={clsx("square group relative flex w-full flex-col rounded-xl border-2 border-hosGold bg-portalBg p-8 items-center justify-center", className)}>
                <p className="text-white">Loading Card...</p>
            </div>
        );
    }

    if (!cardData) {
        return (
            <div className={clsx("square group relative flex w-full flex-col rounded-xl border-2 border-hosGold bg-portalBg p-8 items-center justify-center", className)}>
                <p className="text-white">Card data for '{cardIdentifier}' unavailable.</p>
            </div>
        );
    }

    const backgroundStyle = cardData.backgroundImage ? { backgroundImage: `url(${cardData.backgroundImage.url})` } : { backgroundImage: 'url(/patreon-blue-shapes.svg)' };

    return (
        <div
            className={clsx(
                "square group relative flex w-full flex-col rounded-xl border-2 border-hosGold bg-portalBg transition-shadow hover:shadow-lg hover:shadow-portalBg/25",
                className
            )}
        >
            <a href={cardData.buttonLink || "#"} className="flex h-full flex-col">
                <div className="flex h-full grow flex-col justify-end rounded-lg bg-black text-white">
                    <div
                        className="mt-4 flex h-full w-full bg-contain bg-bottom bg-no-repeat"
                        style={backgroundStyle}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {cardData.logo ? (
                                <Image src={cardData.logo.url} alt={cardData.logo.alt} layout="fill" objectFit="contain" />
                            ) : (
                                <div className="w-full h-full bg-[url(/patreon-blue-shapes.svg)] bg-contain bg-bottom bg-no-repeat" />
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
