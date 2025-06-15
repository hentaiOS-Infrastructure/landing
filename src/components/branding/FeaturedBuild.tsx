import Image from "next/image";
import React from "react";
import clsx from "clsx"; // Import clsx for conditional classes

// Define a type for the image object from Payload
interface PayloadMedia {
  id: string;
  alt: string;
  url: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  // Add other fields like 'sizes' if you have imageSizes configured
  // For example: sizes?: { thumbnail?: { url?: string } }
}

type FeaturedBuildProps = {
  image?: PayloadMedia;
  description: any; // Effectively required for this component
  buttonLink: string;
  buttonText: string; // Effectively required for this component
  layoutMode?: "single" | "default";
  // Removed displayMode, this component is now only for 'standard' display
};

const FeaturedBuild = (props: FeaturedBuildProps) => {
  const {
    image,
    description,
    buttonLink,
    buttonText = "Learn More", // Default still useful if prop somehow undefined
    layoutMode = "default",
  } = props;

  const isSingleMode = layoutMode === "single";

  // Standard layout (with icon, description, button)
  return (
    <div className={clsx("flex-1 w-full")}>
      <div
        className={clsx(
          "group rounded-xl border border-neutral-300 transition-shadow hover:shadow-lg hover:shadow-portalBg/25",
          isSingleMode ? "flex flex-col md:flex-row md:items-center" : "flex flex-col"
        )}
      >
        <a
          href={buttonLink}
          className={clsx(
            "px-10 py-10 md:px-12 md:py-10 flex",
            isSingleMode ? "flex-col md:flex-row md:items-center gap-6 md:gap-8" : "flex-col"
          )}
        >
          {/* Image Container */}
          <div className={clsx(
            isSingleMode ? "w-full md:w-1/3 lg:w-1/4 flex-shrink-0" : "w-full",
            "relative"
          )}>
            <Image
              src={image?.url ? `${process.env.NEXT_PUBLIC_PAYLOAD_URL || ''}${image.url}` : "/featured-logo-default.svg"}
              height={isSingleMode ? (image?.height || 150) : (image?.height || 100)}
              width={isSingleMode ? (image?.width || 150) : (image?.width || 224)}
              // style={{ objectFit: "contain" }} // objectFit is better applied via className for Next.js 13+
              className={clsx(isSingleMode ? "mb-4 md:mb-0" : "mb-4", "object-contain")}
              alt={image?.alt ?? "Featured Build Image"} // alt is already required and handled
            />
          </div>

          {/* Content Container (Description + Button) */}
          <div className={clsx(
            "flex flex-col",
            isSingleMode ? "w-full md:w-2/3 lg:w-3/4 md:items-start" : "w-full",
            isSingleMode ? "justify-center" : ""
          )}>
            {/* Description is now expected to be present for this component */}
            <div className={clsx("mb-6 font-medium tracking-tight", isSingleMode ? "md:text-left" : "")}>
              <div>{description}</div>
            </div>
            {/* ButtonText is now expected to be present for this component */}
            <button className={clsx(
              "w-fit select-none rounded-full bg-cold px-8 py-2 text-sm font-bold tracking-tight transition-colors group-hover:bg-cold-dark",
              isSingleMode ? "md:self-start" : ""
            )}>
              {buttonText}
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FeaturedBuild;
