import clsx from "clsx";
import { type ComponentPropsWithRef } from "react";
import "./styles.scss";

interface DistortedTextProps extends ComponentPropsWithRef<"span"> {
  time?: number;
  color1?: string;
  color2?: string;
}

const DistortedText = (props: DistortedTextProps) => {
  const { children, className, time, color1, color2 } = props;
  const timeVar = time ?? 10;
  const style = {
    "--text-glitch-time": `${timeVar}s`,
    "--text-color1": color1 ?? "rgb(239 68 68 / 0.5)",
    "--text-color2": color2 ?? "rgb(255 68 68 / 0.75)",
  } as React.CSSProperties;
  return (
    <span
      className={clsx("text-glitch", className)}
      data-text={children}
      style={style}
    >
      {children}
    </span>
  );
};

export default DistortedText;
