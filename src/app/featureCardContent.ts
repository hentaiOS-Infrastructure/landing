import type { SVGProps } from "react";
import { GamepadIcon } from "../components/icons/FeatureCardIcons";

/*
 * Declare feature card content here
 */
const featureCardContent: cardContent[] = [
  {
    title: "Paimon eating",
    description:
      "You’ll have the best possible mobile gaming experience on your shitty phone.",
    icon: GamepadIcon,
  },
  {
    title: "Paimon eating",
    description:
      "You’ll have the best possible mobile gaming experience on your shitty phone.",
    icon: GamepadIcon,
  },
  {
    title: "Paimon eating",
    description:
      "You’ll have the best possible mobile gaming experience on your shitty phone.",
    icon: GamepadIcon,
  },
  {
    title: "Paimon eating",
    description:
      "You’ll have the best possible mobile gaming experience on your shitty phone.",
    icon: GamepadIcon,
  },
  {
    title: "Paimon eating",
    description:
      "You’ll have the best possible mobile gaming experience on your shitty phone.",
    icon: GamepadIcon,
  },
];

interface cardContent {
  title: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export default featureCardContent;
