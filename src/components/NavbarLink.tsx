import clsx from "clsx";
import ActiveLink from "./ActiveLink";

type NavbarLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const classNames = "active:font-bold";

const NavbarLink = (props: NavbarLinkProps) => {
  const { href, className, children } = props;
  if (href.includes("http")) {
    return <a href={href}>{children}</a>;
  }
  return (
    <ActiveLink
      activeClassName="navbar-item-active"
      className={clsx(classNames, className)}
      href={href}
      exact
    >
      {children}
    </ActiveLink>
  );
};

export default NavbarLink;
