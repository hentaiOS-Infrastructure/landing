"use client";

import Bund from "../components/branding/Bund";
import NavbarLink from "../components/NavbarLink";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const navBarItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Downloads",
    href: "/downloads",
  },
  {
    title: "Blog",
    href: "https://blog.hentaios.com/",
  },
];

const RootNavbar = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 flex flex-row justify-center overflow-visible border-b border-transparent bg-neutral-50/70 backdrop-blur-lg backdrop-saturate-200 transition-[max-height,border-color] duration-500",
        scrollOffset > 0 ? "max-h-20 !border-neutral-200/60" : "max-h-60"
      )}
    >
      <div className="flex w-full max-w-screen-xl flex-row space-x-4 py-6 px-8 md:space-x-8">
        <div className="flex flex-row justify-end space-x-4 overflow-visible transition-all md:space-x-8">
          <Link href="/">
            <Bund isClosed={scrollOffset > 0} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default RootNavbar;
