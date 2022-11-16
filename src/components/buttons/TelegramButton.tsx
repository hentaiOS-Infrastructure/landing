import type { SVGProps } from "react";
import DistortedText from "../branding/DistortedText";

type TelegramButtonProps = {
  href: string;
};

const TelegramButton = (props: TelegramButtonProps) => {
  const { href } = props;
  return (
    <div className="select-none">
      <MdiTelegram className="ml-2 text-4xl text-hosPink" />
      <a href={href} className="inline-flex flex-col text-3xl font-bold">
        <span className="relative inline-block rounded-tl-xl rounded-full bg-hosPink px-4 py-2 tracking-tighter text-white hover:bg-pink-600">
          Join the <span className="text-transparent">Break</span>
          <DistortedText
            time={7}
            className="!absolute left-32 !w-fit !cursor-pointer font-bold !text-transparent before:!z-10 before:text-neutral-600/70 after:!z-10 after:!text-cyan-400"
          >
            Breaking&nbsp;Bad
          </DistortedText>
        </span>
      </a>
    </div>
  );
};

export function MdiTelegram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export default TelegramButton;
