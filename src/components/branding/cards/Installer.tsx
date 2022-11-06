import { SVGProps } from "react";

const Installer = () => {
  return (
    <div className="mb-20">
      <a href="#" className="inline">
        <div className=" inline-flex max-w-[18rem] flex-col rounded-xl border-2 border-hosPink transition-shadow hover:shadow-lg lg:w-1/2">
          <div className="flex h-96 flex-col justify-end rounded-xl bg-hosPink px-8 pb-8 text-white">
            <FlashIcon />
            <h3 className="mt-4 text-2xl font-medium tracking-tight">
              Flash Tool
            </h3>
            <p>Update or install hentaiOS onto your phone.</p>
          </div>
          <div className="flex items-center px-6">
            <button className="my-6 w-fit rounded-full border-2 border-hosPink bg-transparent px-8 py-[0.35rem] text-xs font-bold tracking-tight text-hosPink">
              Open Flash Tool
            </button>
          </div>
        </div>
      </a>
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
  </svg>
);

export default Installer;
