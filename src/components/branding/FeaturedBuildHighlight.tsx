import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface PayloadMedia {
    id: string;
    alt: string;
    url: string;
    width?: number;
    height?: number;
}

export interface FeaturedBuildHighlightProps {
    image: PayloadMedia; // Image is required for this component
    linkURL: string;
    className?: string;
}

const FeaturedBuildHighlight: React.FC<FeaturedBuildHighlightProps> = ({
    image,
    linkURL,
    className,
}) => {
    if (!image?.url) return null;

    const imageUrl = `${process.env.NEXT_PUBLIC_PAYLOAD_URL || ''}${image.url}`;

    return (
        <div className={clsx("flex-1 w-full", className)}>
            <Link
                href={linkURL}
                className="group block w-full rounded-xl border border-neutral-300 transition-shadow hover:shadow-lg hover:shadow-portalBg/25 overflow-hidden relative aspect-[3/1]" // Changed to 3:1 aspect ratio
            // passHref is not needed if Link renders the <a> tag itself or if the child is a simple element
            // legacyBehavior removed
            >
                <Image
                    src={imageUrl}
                    alt={image.alt ?? "Highlight image"}
                    fill
                    priority
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </Link>
        </div>
    );
};

export default FeaturedBuildHighlight;
