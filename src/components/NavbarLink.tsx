import clsx from "clsx";
import ActiveLink from "./ActiveLink";

type NavbarLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const NavbarLink = (props: NavbarLinkProps) => {
  const { href, className, children } = props;
  const linkClasses =
    "inline-flex items-center self-center justify-center px-4 py-2 rounded-full transition-colors duration-150 ease-in-out hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-(--color-hosPink)";
  // Using px-4 py-2 for a slightly larger, more button-like pill. Adjust as needed.

  if (href.includes("http")) {
    return (
      // External links still need a default text color
      <a href={href} className={clsx(linkClasses, "text-neutral-700 hover:text-(--color-hosPink)", className)}>
        {children}
      </a>
    );
  }
  return (
    // ActiveLink now handles default and active text colors
    <ActiveLink
      activeClassName="navbar-item-active"
      className={clsx(linkClasses, className)} // Pass only structural/hover/focus classes
      href={href}
      exact
    >
      {children}
    </ActiveLink>
  );
};

export default NavbarLink;
