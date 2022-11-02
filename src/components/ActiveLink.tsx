"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pathToRegexp } from "path-to-regexp";
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
  const isActive = pathToRegexp(as || href, [], {
    sensitive: true,
    end: !!exact,
  }).test(pathname);

  const classToAdd = isActive ? activeClassName : "";

  return (
    <Link
      href={href}
      as={as}
      {...props}
      className={clsx(classToAdd, className)}
    >
      {children}
    </Link>
  );
}
