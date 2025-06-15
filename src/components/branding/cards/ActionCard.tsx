import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

interface ActionCardData {
  id: string;
  title: string;
  href: string;
  icon?: {
    url: string;
    alt: string;
  };
}

async function getActionCards(): Promise<ActionCardData[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/action-cards?sort=order&depth=1`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) {
      console.error("Failed to fetch action cards:", res.status, await res.text());
      return [];
    }
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error("Error fetching action cards:", error);
    return [];
  }
}

const ActionCard = async ({ className }: { className?: string }) => {
  const cards = await getActionCards();

  if (!cards || cards.length === 0) {
    return null;
  }

  return (
    <>
      {cards.map((card) => {
        const isExternal = card.href.includes("https");
        const cardContent = (
          <div className="flex items-center gap-3">
            {card.icon && <Image src={card.icon.url} alt={card.icon.alt} width={24} height={24} />}
            <span>{card.title}</span>
          </div>
        );

        return (
          <div
            key={card.id}
            className={clsx(
              "group flex flex-col text-l font-medium tracking-tight rounded-full text-gray-900 transition-shadow hover:shadow-lg hover:shadow-portalBg/40",
              "w-full border border-neutral-300", // Added default styling from page.tsx
              className
            )}
          >
            {isExternal ? (
              <a href={card.href} className="h-full w-full py-6 px-5">
                {cardContent}
              </a>
            ) : (
              <Link href={card.href} className="h-full w-full py-6 px-5">
                {cardContent}
              </Link>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ActionCard;
