"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";

// Assuming ContentCardData interface is similar to the one in page.tsx
// If not, define or import it appropriately.
// For simplicity, defining a minimal version here.
interface PatreonCardData {
  title: string;
  buttonText: string;
  buttonLink: string;
}

async function getPatreonCardData(): Promise<PatreonCardData | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/content-cards?where[cardIdentifier][equals]=patreon&limit=1&depth=0`
    );
    if (!res.ok) {
      console.error("Failed to fetch Patreon card data:", res.status, await res.text());
      return null;
    }
    const data = await res.json();
    return data.docs && data.docs.length > 0 ? data.docs[0] : null;
  } catch (error) {
    console.error("Error fetching Patreon card data:", error);
    return null;
  }
}


const Patreon = ({ className }: { className?: string }) => {
  const [cardData, setCardData] = useState<PatreonCardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getPatreonCardData();
      setCardData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={clsx("square group relative flex w-full flex-col rounded-xl border-2 border-hosGold bg-portalBg p-8 items-center justify-center", className)}>
        <p className="text-white">Loading Patreon Card...</p>
      </div>
    );
  }

  if (!cardData) {
    return (
      <div className={clsx("square group relative flex w-full flex-col rounded-xl border-2 border-hosGold bg-portalBg p-8 items-center justify-center", className)}>
        <p className="text-white">Patreon card data unavailable.</p>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "square group relative flex w-full flex-col rounded-xl border-2 border-hosGold bg-portalBg transition-shadow hover:shadow-lg hover:shadow-portalBg/25",
        className
      )}
    >
      <a href={cardData.buttonLink || "#"} className="flex h-full flex-col">
        <div className="flex h-full grow flex-col justify-end rounded-lg bg-black text-white">
          <div className="mt-4 flex h-full w-full bg-[url(/patreon-blue-shapes.svg)] bg-contain bg-bottom bg-no-repeat"></div>
          <div className="flex items-center justify-between px-8 pb-8">
            <h3 className="mt-4 text-3xl font-medium tracking-tight">
              {cardData.title || "Support us on Patreon"}
            </h3>
          </div>
        </div>
        <div className="flex items-center rounded-xl bg-portalBg px-6">
          <button className="my-6 select-none max-h-fit w-fit rounded-full border-2 border-hosGold bg-transparent px-8 py-[0.35rem] text-sm font-bold tracking-tight text-hosGold transition-colors group-hover:bg-hosGold group-hover:text-white">
            {cardData.buttonText || "Go to Patreon"}
          </button>
        </div>
      </a>
    </div>
  );
};

export default Patreon;
