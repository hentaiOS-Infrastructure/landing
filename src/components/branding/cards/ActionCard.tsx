import { PropsWithChildren } from "react";
import clsx from "clsx";

interface ActionCardProps extends PropsWithChildren {
  className?: string;
  href: string;
}

const ActionCard = (props: ActionCardProps) => {
  const { children, className, href } = props;
  return (
    <div
      className={clsx(
        "group flex flex-col py-4 px-4 text-xl text-white transition-shadow hover:shadow-lg",
        className
      )}
    >
      <a href={href} className="h-full w-full p-3">
        <div className="flex items-center gap-2">{children}</div>
      </a>
    </div>
  );
};

export default ActionCard;
