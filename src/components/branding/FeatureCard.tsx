import type { SVGProps } from "react";

type FeatureCardProps = {
  title: string;
  children: React.ReactNode;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const FeatureCard = (props: FeatureCardProps) => {
  const { title, children, icon } = props;
  const Icon = icon;
  return (
    <div className="flex h-72 max-w-[20rem] flex-col justify-center rounded-xl border border-neutral-300 bg-white p-4 shadow-lg">
      <Icon className="flex w-full items-center justify-center text-[8rem] text-stone-600" />
      <h3 className="mb-1 text-lg font-bold">{title}</h3>
      <p className="text-sm text-stone-700">{children}</p>
    </div>
  );
};

export default FeatureCard;
