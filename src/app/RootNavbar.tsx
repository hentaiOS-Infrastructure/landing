import Logo from "../components/branding/Logo";
import NavbarLink from "../components/NavbarLink";

const navBarItems = [
  {
    title: "Home of sorrow",
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

const RootNavbar = () => (
  <nav className="sticky top-0 flex flex-row justify-center">
    <div className="flex w-full max-w-screen-xl flex-row space-x-4 bg-neutral-50 py-6 px-4 md:space-x-8">
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

export default RootNavbar;
