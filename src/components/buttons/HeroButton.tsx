import Link from "next/link";

type HeroButtonProps = {
  children: React.ReactNode;
};

const HeroButton = (props: HeroButtonProps) => {
  const { children } = props;
  return <Link href="/downloads">{children}</Link>;
};

export default HeroButton;
