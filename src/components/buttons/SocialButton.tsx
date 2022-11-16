import { PropsWithChildren } from "react";

interface SocialButtonProps extends PropsWithChildren {
  href: string;
}

const SocialButton = (props: SocialButtonProps) => {
  const { children, href } = props;
  return (
    <div className="select-none">
      <a
        href={href}
        className="flex items-center justify-center rounded-full border-2 border-hosPink bg-transparent px-6 py-2 font-bold text-hosPink transition-colors hover:bg-hosPink/10 "
      >
        {children}
      </a>
    </div>
  );
};

export default SocialButton;
