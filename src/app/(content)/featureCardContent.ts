import type { SVGProps } from "react";
import { GamepadIcon } from "../../components/icons/FeatureCardIcons";

/*
 * Declare feature card content here
 */
const featureCardContent: cardContent[] = [
  {
    title: "Paimon eating",
    description:
      "You’ll have the best possible mobile Genshin Impact experience on your shitty phone.",
    icon: GamepadIcon,
  },
  {
    title: "The Google way",
    description:
      "We deliver actual Pixel features, down to the smallest of details.",
    icon: GamepadIcon,
  },
  {
    title: "No gore",
    description:
      "This ROM doesn't include a shitton of customization. You can’t change your stupid battery icon shape to circle.",
    icon: GamepadIcon,
  },
  {
    title: "Great UI performance",
    description:
      "We use various techniques to make the UI smooth and minimize jitter. We use SkiaVK (Vulkan) UI Renderer by default.",
    icon: GamepadIcon,
  },
  {
    title: "Sensible thermals",
    description:
      "We won't let your phone overheat and explode, unlike certain phone manufacturers do.",
    icon: GamepadIcon,
  },
];

interface cardContent {
  title: string;
  description: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export default featureCardContent;
