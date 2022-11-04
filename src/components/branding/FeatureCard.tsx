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
    <div className="flex h-72 max-w-[20rem] flex-col rounded-xl p-6 ">
      <Icon className="flex w-full items-center justify-center text-[8rem] text-stone-700" />
      <h3 className="mb-2 text-center text-lg font-bold leading-6 tracking-tight">
        {title}
      </h3>
      <p className="text-center text-sm text-stone-700">{children}</p>
    </div>
  );
};

export default FeatureCard;
