import { SVGProps } from "react";
import clsx from "clsx";

const Installer = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "square group relative flex w-full flex-col rounded-xl border-2 border-hosPink/25 transition-shadow md:border-hosPink md:hover:shadow-lg md:hover:shadow-portalBg/25",
        className
      )}
    >
      <a href="#">
        <div className=" flex flex-col justify-end rounded-lg bg-hosPink text-white">
          <div className="mt-40 px-8 pb-8">
            <FlashIcon />
            <h3 className="mt-4 text-3xl font-medium tracking-tight">
              Flash Tool
            </h3>
            <p>Update or install hentaiOS onto your phone.</p>
          </div>
        </div>
        <div className="flex items-center px-6">
          <button className="select-none my-6 w-fit rounded-full border-2 border-hosPink bg-transparent px-8 py-[0.35rem] text-sm font-bold tracking-tight text-hosPink transition-colors md:group-hover:bg-hosPink md:group-hover:text-white">
            Open Flash Tool
          </button>
        </div>
      </a>
      <div className="absolute h-full w-full rounded-lg bg-white/50 p-4 md:hidden">
        <span className="w-fit rounded-lg bg-white py-1 px-4 font-medium uppercase text-hosPink ">
          Requires PC
        </span>
      </div>
    </div>
  );
};

const FlashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={73}
    height={46}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={47.386}
      y={0.807}
      width={24.285}
      height={44.209}
      rx={2.418}
      stroke="#fff"
      strokeWidth={1.612}
    />
    <path
      d="M.633 24.958h36.275m0 0-8.784-8.784m8.784 8.784-8.784 8.784"
      stroke="#fff"
      strokeWidth={1.612}
    />
    <circle cx={59.528} cy={5.255} r={1.135} fill="#fff" />
  </svg>
);

export default Installer;
