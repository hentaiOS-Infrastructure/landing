"use client";

import Bund from "../components/branding/Bund";
import NavbarLink from "../components/NavbarLink";
import { useEffect, useState } from "react";
import clsx from "clsx";
// Link import might not be needed if Bund is not a link and NavbarLink handles its own Link
// import Link from "next/link";

interface NavLinkItem {
  id: string;
  title: string;
  href: string;
  openInNewTab?: boolean;
  // Add other fields if necessary, e.g., for submenus
}

const RootNavbar = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [navBarItems, setNavBarItems] = useState<NavLinkItem[]>([]);
  const [loadingNav, setLoadingNav] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrollOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });

    const fetchNavItems = async () => {
      setLoadingNav(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/nav-links?where[location][equals]=navbar&sort=order&limit=10`
        );
        if (!res.ok) {
          console.error("Failed to fetch navbar items:", res.status);
          setNavBarItems([]); // Set to empty or keep defaults
          return;
        }
        const data = await res.json();
        setNavBarItems(data.docs || []);
      } catch (error) {
        console.error("Error fetching navbar items:", error);
        setNavBarItems([]); // Set to empty or keep defaults
      } finally {
        setLoadingNav(false);
      }
    };

    fetchNavItems();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 flex flex-row justify-center overflow-visible border-b border-transparent bg-neutral-50/70 backdrop-blur-lg backdrop-saturate-200 transition-[max-height,border-color] duration-500",
        scrollOffset > 0 ? "max-h-20 border-neutral-200/60!" : "max-h-60"
      )}
    >
      <div className="flex w-full max-w-(--breakpoint-xl) flex-row space-x-4 py-6 px-8 md:space-x-8">
        <div className="flex flex-row justify-end space-x-4 overflow-visible transition-all md:space-x-8">
          <Bund isClosed={scrollOffset > 0} />
        </div>
        <div className="ml-auto flex flex-row items-center flex-shrink-0 flex-grow-0 space-x-4 overflow-visible transition-all md:space-x-8">
          {loadingNav ? (
            <p className="text-sm text-neutral-500">Loading nav...</p>
          ) : (
            navBarItems.map((item) => (
              <NavbarLink key={item.id} href={item.href} target={item.openInNewTab ? "_blank" : undefined}>
                {item.title}
              </NavbarLink>
            ))
          )}
        </div>
      </div>
    </nav>
  );
};

export default RootNavbar;
