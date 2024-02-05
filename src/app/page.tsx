import ActionCard from "../components/branding/cards/ActionCard";
import DistortedText from "../components/branding/DistortedText";
import FeaturedBuild from "../components/branding/FeaturedBuild";
import SocialButton from "../components/buttons/SocialButton";
import TelegramButton from "../components/buttons/TelegramButton";
import { MdiGithub } from "../components/icons/FeatureCardIcons";
import bannerContent from "./(content)/banner";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import PortalLore from "../components/svgBased/PortalLore";
import Blog from "../components/branding/cards/Blog";
import { LemonSqueezyLogo, PatreonLogo } from "../components/icons/CupOfCoffees";
import ZaFrame from "../components/branding/HelpWantedBanner";
import Patreon from "../components/branding/cards/Patreon";
import KnowledgeBase from "../components/branding/cards/KnowledgeBase";

export const runtime = 'edge'
export const metadata = {
  metadataBase: new URL('https://hentaios.com'),
  title: 'The hentaiOS Project',
  openGraph: {
    title: 'The hentaiOS Project',
    description: 'Sussy Baka Impostor.',
  },
}

export default function Index() {
  return (
    <>
      <section className="mb-20">
        <ZaFrame
          title={bannerContent.heading}
          enabled={bannerContent.enabled}
        >
          {bannerContent.desc}
        </ZaFrame>
        <FeaturedBuild>
          hentaiOS Ursamoon, the latest version of hentaiOS, includes
          stronger protections for user privacy, improvements for developer
          productivity, and much more.
        </FeaturedBuild>
      </section>
      <section>
        <div
          id="actions"
          className="mb-10 flex flex-col gap-4 md:flex-row md:gap-8 "
        >
          <ActionCard
            href="https:/get.hentaios.com/enroll"
            className="flex w-full border border-neutral-300"
          >
            <PatreonLogo />
            <span>Enroll to Patreon Early Access!</span>
          </ActionCard>
          <ActionCard
            href="https://cup-of-coffee.helluvaos.com"
            className="flex w-full border border-neutral-300"
          >
            <LemonSqueezyLogo />
            <span>Cup Of Coffee</span>
          </ActionCard>
        </div>
        <div
          id="hero"
          className="mb-40 grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1 md:gap-8"
        >
          <Patreon />
          <Blog />
          <KnowledgeBase />
          {/* <StudentPortal /> */}
        </div>
      </section>
      <section
        id="JOINTHECULT"
        className="mx-auto mb-10 flex max-w-[90%] flex-col items-center space-y-2"
      >
        <p className="text-center text-3xl font-medium leading-normal tracking-tighter text-hosPink md:text-4xl">
          Leave your boring life, Join us in the{" "}
          <DistortedText className="font-bold !text-red-800 before:text-red-700 after:text-red-700">
            bloody
          </DistortedText>{" "}
          school.
        </p>
        <p className="max-w-full text-center text-3xl font-medium leading-normal tracking-tighter text-neutral-400 md:text-4xl">
          You’ll not regret it, unlike what{" "}
          <DistortedText
            time={5}
            className="font-bold !text-indigo-800 before:text-indigo-600 after:text-indigo-600"
          >
            XDA
          </DistortedText>{" "}
          or{" "}
          <DistortedText
            time={7}
            className="font-bold !text-cyan-700 before:text-cyan-600 after:text-cyan-600"
          >
            Xiaomeme
          </DistortedText>{" "}
          said.
        </p>
        <p className="max-w-full text-center text-3xl font-medium leading-normal tracking-tighter text-neutral-400 md:text-4xl">
          Also watch Otokonoko Delivery.
        </p>
      </section>
      <section id="buttons" className="flex w-full flex-col items-center">
        <TelegramButton href="https://t.me/hentaiOS" />
        <div className="mt-5 grid grid-cols-1 grid-rows-2 items-center justify-center gap-2 md:grid-cols-2 md:grid-rows-1 md:flex-row">
          <SocialButton href="https://github.com/hentaiOS">
            <MdiGithub className="text-2xl" />
            &nbsp;GitHub
          </SocialButton>
          <SocialButton href="https://chan.helluvaos.com">
            <ChatBubbleLeftRightIcon className="h-6" />
            &nbsp;Community Forum
          </SocialButton>
        </div>
      </section>
      <section className="mt-32">
        <PortalLore className="w-full" />
      </section>
    </>
  );
}
