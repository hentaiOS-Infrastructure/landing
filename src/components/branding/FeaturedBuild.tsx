import Image from "next/image";

type FeaturedBuildProps = {
  svgSrc?: string;
  children: React.ReactNode;
};

const FeaturedBuild = (props: FeaturedBuildProps) => {
  const { svgSrc, children } = props;
  return (
    <div>
      <div className="group flex flex-col rounded-xl border border-neutral-300 transition-shadow hover:shadow-lg hover:shadow-portalBg/25 lg:w-1/2">
        <a href="https://blog.hentaios.com/android-14-release-highlight" className="px-10 py-10 md:px-20 md:py-16">
          <Image
            src={svgSrc ?? "/featured-logo-default.svg"}
            height={224}
            width={224}
            className="mb-4"
            alt="Ursamoon"
          />
          <p className="mb-6 font-medium tracking-tight">{children}</p>
          <button className="w-fit select-none rounded-full bg-cold px-8 py-2 text-sm font-bold tracking-tight transition-colors group-hover:bg-cold-dark">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default FeaturedBuild;
