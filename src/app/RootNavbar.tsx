"use client";

import Logo from "../components/branding/Logo";
import NavbarLink from "../components/NavbarLink";
import { useEffect, useState } from "react";
import clsx from "clsx";

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
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 flex flex-row justify-center border-b border-transparent bg-neutral-50/70 backdrop-blur transition-[border-color]",
        scrollOffset > 72 ? "!border-neutral-200" : ""
      )}
    >
      <div className="flex w-full max-w-screen-xl flex-row space-x-4 py-6 px-8 md:space-x-8">
        <Logo className="relative top-1 mr-auto" />
        <div className="flex flex-row justify-end space-x-4 md:space-x-8">
          {navBarItems.map((item, index) => (
            <NavbarLink href={item.href} key={index}>
              {item.title}
            </NavbarLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default RootNavbar;
