import { PropsWithChildren } from "react";
import clsx from "clsx";
import Link from "next/link";

interface ActionCardProps extends PropsWithChildren {
  className?: string;
  href: string;
}

const ActionCard = (props: ActionCardProps) => {
  const { children, className, href } = props;
  const isExternal = href.includes("https");
  return (
    <div
      className={clsx(
        "group flex flex-col  text-xl text-white transition-shadow hover:shadow-lg hover:shadow-portalBg/40",
        className
      )}
    >
      {isExternal ? (
        <a href={href} className="h-full w-full py-6 px-4">
          <div className="flex items-center gap-2">{children}</div>
        </a>
      ) : (
        <Link href={href} className="h-full w-full py-6 px-4">
          <div className="flex items-center gap-2">{children}</div>
        </Link>
      )}
    </div>
  );
};

export default ActionCard;
