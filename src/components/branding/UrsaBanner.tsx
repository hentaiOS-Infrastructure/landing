import Image from "next/image";

type HeroBannerProps = {
  title: string;
  children: string;
  enabled: boolean;
};

const UrsaBanner = (props: HeroBannerProps) => {
  const { title, children, enabled } = props;
  if (!enabled) {
    return null;
  }
  return (
    <section className="relative w-full h-[25.13rem] flex flex-col items-center justify-center">
      <section className="self-stretch relative rounded-[9px] bg-darkslategray h-[17.13rem] overflow-hidden shrink-0 text-left text-[1.82rem] text-burlywood">
        <section className="absolute top-[calc(50%_-_141.5px)] right-[11.3rem] h-[17.44rem] overflow-hidden flex flex-col items-start justify-center max-md:opacity-[50%] md:opacity-[50%]">
          <Image
            className="relative"
            width={476.48}
            height={460.8}
            alt=""
            src="/group.svg"
          />
        </section>
        <h1 className="m-0 absolute top-[6.75rem] left-[8.56rem] text-inherit tracking-[-0.01em] font-bold font-inherit">
          {title}
        </h1>
        <h3 className="m-0 absolute top-[8.88rem] left-[8.56rem] text-[1.25rem] tracking-[-0.05em] leading-[1.75rem] font-medium font-inherit">
          {children}
        </h3>
      </section>
    </section>
  );
};

export default UrsaBanner;
