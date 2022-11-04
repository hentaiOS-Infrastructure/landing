import Link from "next/link";
import RightArrow from "../icons/RightArrow";

const HeroButton = () => {
  return (
    <Link
      href="/downloads"
      className="flex h-10 items-center justify-center rounded-full bg-gradient-to-tr from-red-900 via-amber-800 to-red-700 px-6 text-xl font-bold tracking-tight text-neutral-100 ring-1 ring-black/10 transition-shadow ease-in hover:shadow-hero hover:shadow-red-900/40"
    >
      <span>Get it</span> <RightArrow className="ml-1 text-sm" />
    </Link>
  );
};

export default HeroButton;
