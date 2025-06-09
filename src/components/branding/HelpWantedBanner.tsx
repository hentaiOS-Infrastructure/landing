import type { PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for clickable banner
import clsx from "clsx";

// Interface for the populated 'bannerImage' object from Payload
interface PayloadMedia {
    id: string;
    alt: string;
    url: string;
    width?: number;
    height?: number;
    // Add 'sizes' if you have imageSizes configured and want to use them
    // sizes?: { banner?: { url?: string; width?: number; height?: number; } };
}

export interface HelpWantedBannerProps {
    enabled?: boolean;
    heading?: string; // Corresponds to 'title' in old props if used for text overlay
    description?: string; // Corresponds to 'children' in old props if used for text overlay
    bannerImage?: PayloadMedia | null;
    linkURL?: string | null;
    className?: string;
}

const ZaFrame = (props: HelpWantedBannerProps) => {
    const { enabled, bannerImage, linkURL, className } = props;

    if (!enabled || !bannerImage?.url) {
        return null; // Don't render if not enabled or no image URL
    }

    const imageElement = (
        <Image
            // className="relative object-cover object-right max-w-full" // object-cover will be applied directly
            height={bannerImage.height || 520} // Use actual height or default
            width={bannerImage.width || 1280}   // Use actual width or default
            alt={bannerImage.alt || props.heading || "Banner image"}
            priority={true}
            src={`${process.env.NEXT_PUBLIC_PAYLOAD_URL || ''}${bannerImage.url}`}
            className="object-cover object-right max-w-full" // Added object-cover, kept relative positioning if needed by parent
        />
    );

    return (
        <section className={clsx("my-8 w-full relative flex flex-col items-center justify-center", className)}>
            {linkURL ? (
                <Link href={linkURL} target="_blank" rel="noopener noreferrer" className="block w-full"> {/* Apply block and w-full if needed for layout */}
                    {/* passHref and legacyBehavior removed, <a> tag removed */}
                    {imageElement}
                </Link>
            ) : (
                imageElement
            )}
            {/*
        If you want to overlay heading/description on the image, you'd add them here,
        likely within a positioned div. For example:
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          {props.heading && <h2 className="text-4xl font-bold">{props.heading}</h2>}
          {props.description && <p className="text-lg">{props.description}</p>}
        </div>
      */}
        </section>
    );
};

export default ZaFrame;
