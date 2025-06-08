"use client";

import Bund from "../components/branding/Bund";
import NavbarLink from "../components/NavbarLink";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const navBarItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "https://blog.hentaios.com/",
  },
];

const RootNavbar = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 flex flex-row justify-center overflow-visible border-b border-transparent bg-neutral-50/70 backdrop-blur-lg backdrop-saturate-200 transition-[max-height,border-color] duration-500",
        scrollOffset > 0 ? "max-h-20 border-neutral-200/60!" : "max-h-60"
      )}
    >
      <div className="flex w-full max-w-(--breakpoint-xl) flex-row space-x-4 py-6 px-8 md:space-x-8"> {/* Removed justify-between */}
        <div className="flex flex-row justify-end space-x-4 overflow-visible transition-all md:space-x-8"> {/* Bund logo container */}
          <Link href="/">
            <Bund isClosed={scrollOffset > 0} />
          </Link>
        </div>
        <div className="ml-auto flex flex-row items-center flex-shrink-0 flex-grow-0 space-x-4 overflow-visible transition-all md:space-x-8"> {/* Navbar items container with items-center */}
          {/* Add navbar items here */}
          {navBarItems.map((item, index) => (
            <NavbarLink key={index} href={item.href}>
              {item.title}
            </NavbarLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default RootNavbar;
