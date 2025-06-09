import ActionCard from "../../components/branding/cards/ActionCard";
import DistortedText from "../../components/branding/DistortedText";
import FeaturedBuild from "../../components/branding/FeaturedBuild";
import SocialButton from "../../components/buttons/SocialButton";
import TelegramButton from "../../components/buttons/TelegramButton";
import { MdiGithub } from "../../components/icons/FeatureCardIcons";
// import bannerContent from "../(content)/banner"; // To be replaced by dynamic fetch
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import PortalLore from "../../components/svgBased/PortalLore";
import DynamicContentCard, { DynamicCardData as PageContentCardData } from "../../components/branding/cards/DynamicContentCard"; // Renamed import for clarity
import FeaturedBuildHighlight from "../../components/branding/FeaturedBuildHighlight"; // Import the new component
import { LemonSqueezyLogo, PatreonLogo } from "../../components/icons/CupOfCoffees";
import clsx from "clsx"; // Added clsx import
import ZaFrame from "../../components/branding/HelpWantedBanner";
import Patreon from "../../components/branding/cards/Patreon";


export const runtime = 'edge'
export const metadata = {
  metadataBase: new URL('https://hentaios.com'),
  title: 'The hentaiOS Project',
  openGraph: {
    title: 'The hentaiOS Project',
    description: 'Sussy Baka Impostor.',
  },
}

// Define a type for the fetched featured build data
// Define a type for the populated image object from Payload
interface PayloadMediaData {
  id: string;
  alt: string;
  url: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  // Add 'sizes' if you use them:
  // sizes?: { thumbnail?: { url?: string }; card?: { url?: string }; tablet?: { url?: string } };
}

interface FeaturedBuildData {
  id: string;
  title?: string;
  image?: PayloadMediaData; // Changed from imageSrc and altText
  description?: any; // Using 'any' as per previous step for rich text, made optional
  buttonLink: string;
  buttonText?: string; // Made optional
  isFullImageHighlight?: boolean; // Changed from displayMode to match payload.config.ts
  // Add other fields from your collection if needed
}

// Updated ContentCardData to include cardIcon and remove iconType
// Updated ContentCardData to include cardIcon and remove iconType
// Updated ContentCardData to include cardIcon and remove iconType
interface ContentCardData extends Omit<PageContentCardData, 'className' | 'cardIcon'> {
  id: string; // Added id field
  cardIcon?: PayloadMediaData | null;
  sortOrder?: number; // Added sortOrder field
}

interface BannerData {
  id: string;
  identifier: string;
  enabled?: boolean;
  heading?: string;
  description?: string;
  bannerImage?: PayloadMediaData | null;
  linkURL?: string | null;
}

async function getFeaturedBuilds(): Promise<FeaturedBuildData[]> { // Renamed and changed return type
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/featured-builds?limit=2&sort=-createdAt&depth=1`, { // Fetch limit 2
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      console.error('Failed to fetch featured builds:', res.status, await res.text());
      return []; // Return empty array on failure
    }
    const data = await res.json();
    return data.docs || []; // Return the array of docs
  } catch (error) {
    console.error('Error fetching featured builds:', error);
    return []; // Return empty array on error
  }
}

async function getContentCards(): Promise<ContentCardData[]> {
  try {
    // Fetch with depth=1 to populate cardIcon and sort by sortOrder
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/content-cards?limit=10&depth=1&sort=sortOrder`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      console.error('Failed to fetch content cards:', res.status, await res.text());
      return [];
    }
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error('Error fetching content cards:', error);
    return [];
  }
}

async function getBannerData(identifier: string): Promise<BannerData | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/banners?where[identifier][equals]=${identifier}&limit=1&depth=1`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    if (!res.ok) {
      console.error(`Failed to fetch banner (${identifier}):`, res.status, await res.text());
      return null;
    }
    const data = await res.json();
    return data.docs && data.docs.length > 0 ? data.docs[0] : null;
  } catch (error) {
    console.error(`Error fetching banner (${identifier}):`, error);
    return null;
  }
}


export default async function Index() {
  const featuredBuildsData = await getFeaturedBuilds(); // Call new function
  const allContentCards = await getContentCards();
  const mainBannerData = await getBannerData("main-landing-banner"); // Fetch banner by identifier

  return (
    <>
      <section className="mb-20">
        {mainBannerData && mainBannerData.enabled && (
          <ZaFrame
            enabled={mainBannerData.enabled}
            heading={mainBannerData.heading}
            description={mainBannerData.description}
            bannerImage={mainBannerData.bannerImage}
            linkURL={mainBannerData.linkURL}
          />
        )}
        {/* No fallback message for banner */}

        {featuredBuildsData && featuredBuildsData.length > 0 && (
          <div className={clsx(
            "flex flex-col md:flex-row gap-4 md:gap-8 w-full",
            featuredBuildsData.length === 1 ? "md:justify-center" : "" // Center if only one item on md+
          )}>
            {featuredBuildsData.map((build) => {
              if (build.isFullImageHighlight) {
                if (!build.image) return null; // Skip if no image for highlight
                return (
                  <FeaturedBuildHighlight
                    key={build.id}
                    image={build.image}
                    linkURL={build.buttonLink} // Use buttonLink for the whole card link
                  />
                );
              } else {
                // For standard FeaturedBuild, ensure description and buttonText are present
                if (!build.description || !build.buttonText) return null;
                return (
                  <FeaturedBuild
                    key={build.id}
                    image={build.image}
                    description={build.description}
                    buttonLink={build.buttonLink}
                    buttonText={build.buttonText}
                    layoutMode={featuredBuildsData.filter(b => !b.isFullImageHighlight).length === 1 ? "single" : "default"}
                  />
                );
              }
            })}
          </div>
        )}
        {/* No fallback message for featured build */}
      </section>
      <section>
        <div
          id="actions"
          className="mb-10 flex flex-col gap-4 md:flex-row md:gap-8 "
        >
          <ActionCard
            href="https:/get.hentaios.com/enroll"
            className="flex w-full border border-neutral-300"
          >
            <PatreonLogo />
            <span>Enroll to Patreon Early Access!</span>
          </ActionCard>
          <ActionCard
            href="https://cup-of-coffee.helluvaos.com"
            className="flex w-full border border-neutral-300"
          >
            <LemonSqueezyLogo />
            <span>Cup Of Coffee</span>
          </ActionCard>
        </div>
        <div
          id="hero"
          className="mb-40 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8" // Adjusted grid for dynamic cards
        >
          <Patreon />
          {allContentCards && allContentCards.length > 0 ? (
            allContentCards.map((card) => (
              <DynamicContentCard
                key={card.id} // Use a unique key for list items
                cardIdentifier={card.cardIdentifier}
                title={card.title}
                description={card.description}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
                cardIcon={card.cardIcon}
                backgroundColorClass={card.backgroundColorClass}
                textColorClass={card.textColorClass}
                borderColorClass={card.borderColorClass}
                buttonCustomClasses={card.buttonCustomClasses}
              />
            ))
          ) : null}
          {/* No fallback message for content cards, renders nothing if array is empty or null */}
          {/* <StudentPortal /> */}
        </div>
      </section>
      <section
        id="JOINTHECULT"
        className="mx-auto mb-10 flex max-w-[90%] flex-col items-center space-y-[-10px]"
      >
        <p className="text-center text-3xl font-medium leading-normal tracking-tighter text-(--color-hosPink) md:text-4xl">
          Leave your boring life, Join us in the{" "}
          <DistortedText
            className="font-bold text-(--color-hosPink)"
            color1="var(--hosPink-glitch1)"
            color2="var(--hosPink-glitch2)"
          >
            bloody
          </DistortedText>{" "}
          school.
        </p>
        <p className="max-w-full text-center text-3xl font-medium leading-normal tracking-tighter text-neutral-400 md:text-4xl">
          You’ll not regret it, unlike what{" "}
          <DistortedText
            time={5}
            className="font-bold text-(--color-darkslategray)"
            color1="var(--darkslategray-glitch1)"
            color2="var(--darkslategray-glitch2)"
          >
            XDA
          </DistortedText>{" "}
          or{" "}
          <DistortedText
            time={7}
            className="font-bold text-(--color-cold-dark)"
            color1="var(--cold-dark-glitch1)"
            color2="var(--cold-dark-glitch2)"
          >
            Xiaomeme
          </DistortedText>{" "}
          said.
        </p>
        <p className="max-w-full text-center text-3xl font-medium leading-normal tracking-tighter text-neutral-400 md:text-4xl">
          Also watch Otokonoko Delivery.
        </p>
      </section>
      <section id="buttons" className="flex w-full flex-col items-center">
        <TelegramButton href="https://t.me/hentaiOS" />
        <div className="mt-5 grid grid-cols-1 grid-rows-2 items-center justify-center gap-2 md:grid-cols-2 md:grid-rows-1 md:flex-row">
          <SocialButton href="https://github.com/hentaiOS">
            <MdiGithub className="text-2xl" />
            &nbsp;GitHub
          </SocialButton>
          <SocialButton href="https://chan.helluvaos.com">
            <ChatBubbleLeftRightIcon className="h-6" />
            &nbsp;Community Forum
          </SocialButton>
        </div>
      </section>
      <section className="mt-32">
        <PortalLore className="w-full" />
      </section>
    </>
  );
}
