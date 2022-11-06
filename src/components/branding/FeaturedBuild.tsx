type FeaturedBuildProps = {
  svgSrc?: string;
  children: React.ReactNode;
};

const FeaturedBuild = (props: FeaturedBuildProps) => {
  const { svgSrc, children } = props;
  return (
    <div className="mb-20">
      <a href="#" className="inline">
        <div className="border-neutral-300 inline-flex flex-col rounded-xl border px-10 py-10 transition-shadow hover:shadow-lg md:px-20 md:py-16 lg:w-1/2">
          <img
            src={svgSrc ?? "/featured-logo-default.svg"}
            className="mb-4 w-32"
          />
          <p className="mb-6 font-medium tracking-tight">{children}</p>
          <button className="w-fit rounded-full bg-cold px-8 py-2 text-xs font-bold tracking-tight">
            Learn More
          </button>
        </div>
      </a>
    </div>
  );
};

export default FeaturedBuild;
