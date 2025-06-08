import clsx from "clsx";
import { type ComponentPropsWithRef } from "react";
import "./styles.scss";

interface DistortedTextProps extends ComponentPropsWithRef<"span"> {
  time?: number;
  color1?: string;
  color2?: string;
}

const DistortedText = (props: DistortedTextProps) => {
  const { children, className, time, color1, color2, style: propStyle, ...rest } = props;
  const timeVar = time ?? 10;
  const componentStyle = {
    "--text-glitch-time": `${timeVar}s`,
    "--text-color1": color1 ?? "var(--default-glitch-color1)",
    "--text-color2": color2 ?? "var(--default-glitch-color2)",
  } as React.CSSProperties;
  return (
    <span
      className={clsx("text-glitch", className)}
      data-text={children}
      style={{ ...componentStyle, ...propStyle }}
      {...rest}
    >
      {children}
    </span>
  );
};

export default DistortedText;
