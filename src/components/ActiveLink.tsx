"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  as?: string;
  exact?: boolean;
  activeClassName: string;
  className: string;
  children: React.ReactNode;
}

export default function ActiveLink({
  href,
  as,
  exact,
  activeClassName,
  children,
  className,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const pathPattern = as || href;
  const matchFunction = match(pathPattern, {
    sensitive: true,
    end: !!exact,
  });
  const isActive = !!matchFunction(pathname ?? "");

  const finalClassName = clsx(
    className, // Base classes from NavbarLink (shape, hover, focus, but no default text color initially)
    isActive ? activeClassName : "text-neutral-700" // Active class OR default text color
  );

  return (
    <Link
      href={href}
      as={as}
      {...props}
      className={finalClassName}
    >
      {children}
    </Link>
  );
}
