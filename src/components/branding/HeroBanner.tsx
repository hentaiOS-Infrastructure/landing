import Image from "next/image";

type HeroBannerProps = {
  title: string;
  children: string;
  enabled: boolean;
};

const HeroBanner = (props: HeroBannerProps) => {
  const { title, children, enabled } = props;
  if (!enabled) {
    return null;
  }
  return (
    <section className="my-8 flex w-full bg-cold bg-opacity-50 bg-[url(/banner-mobile.png)] bg-contain bg-right bg-no-repeat px-10 py-10 md:px-20 xl:bg-[url(/banner-desktop.png)]">
      <div>
        <h2 className="mb-2 max-w-[15ch] text-3xl font-[546] leading-snug tracking-tight text-[#2d2d2d]">
          {title}
        </h2>
        <p className="max-w-[80ch]">{children}</p>
      </div>
    </section>
  );
};

export default HeroBanner;
