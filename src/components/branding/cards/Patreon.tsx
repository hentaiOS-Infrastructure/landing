import clsx from "clsx";

const Patreon = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "square group relative flex w-full flex-col rounded-xl border-2 border-hosGold bg-portalBg transition-shadow hover:shadow-lg hover:shadow-portalBg/25",
        className
      )}
    >
      <a href="https://patreon.com/hentaiOS" className="flex h-full flex-col">
        <div className="flex h-full grow flex-col justify-end rounded-lg bg-black text-white">
          <div className="mt-4 flex h-full w-full bg-[url(/patreon-blue-shapes.svg)] bg-contain bg-bottom bg-no-repeat"></div>
          <div className="flex items-center justify-between px-8 pb-8">
            <h3 className="mt-4 text-3xl font-medium tracking-tight">
              Get our builds at Patreon
            </h3>
          </div>
        </div>
        <div className="flex items-center rounded-xl bg-portalBg px-6">
          <button className="my-6 select-none max-h-fit w-fit rounded-full border-2 border-hosGold bg-transparent px-8 py-[0.35rem] text-sm font-bold tracking-tight text-hosGold transition-colors group-hover:bg-hosGold group-hover:text-white">
            Go to Patreon
          </button>
        </div>
      </a>
    </div>
  );
};

export default Patreon;
