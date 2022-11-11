import ActionCard from "../components/branding/cards/ActionCard";
import Installer from "../components/branding/cards/Installer";
import StudentPortal from "../components/branding/cards/StudentPortal";
import DistortedText from "../components/branding/DistortedText";
import FeaturedBuild from "../components/branding/FeaturedBuild";
import HeroBanner from "../components/branding/HeroBanner";
import SocialButton from "../components/buttons/SocialButton";
import TelegramButton from "../components/buttons/TelegramButton";
import { MdiGithub } from "../components/icons/FeatureCardIcons";
import bannerContent from "./(content)/banner";
import {
  ArrowDownTrayIcon,
  DocumentDuplicateIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function Index() {
  return (
    <>
      <HeroBanner title={bannerContent.heading} enabled={bannerContent.enabled}>
        {bannerContent.desc}
      </HeroBanner>
      <FeaturedBuild>
        hentaiOS TwistedScarlett, the latest version of hentaiOS, includes
        stronger protections for user privacy, improvements for developer
        productivity, and much more.
      </FeaturedBuild>
      <section
        id="actions"
        className="mb-10 flex flex-col gap-4 md:flex-row md:gap-8"
      >
        <ActionCard
          href="/downloads"
          className="flex w-full items-center justify-center bg-hosPink"
        >
          <ArrowDownTrayIcon className="h-6" />
          <span>Downloads</span>
        </ActionCard>
        <ActionCard
          href="https://blog.hentaios.com"
          className="flex w-full bg-hosPink"
        >
          <BookOpenIcon className="h-6" />
          <span>Blog</span>
        </ActionCard>
        <ActionCard
          href="https://docs.hentaios.com"
          className="flex w-full bg-hosPink"
        >
          <DocumentDuplicateIcon className="h-6" />
          <span>DocuWiki</span>
        </ActionCard>
      </section>
      <section
        id="hero"
        className="mb-40 grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1 md:gap-8"
      >
        <Installer />
        <StudentPortal />
      </section>
      <section
        id="JOINTHECULT"
        className="mx-auto mb-10 flex max-w-[90%] flex-col items-center space-y-2"
      >
        <p className="text-center text-2xl font-medium leading-normal tracking-tighter text-hosPink md:text-4xl">
          Leave your boring life, Join us in the{" "}
          <DistortedText className="font-bold !text-red-800 before:text-red-700 after:text-red-700">
            bloody
          </DistortedText>{" "}
          school.
        </p>
        <p className="max-w-full text-center text-2xl font-medium leading-normal tracking-tighter text-neutral-400 md:text-4xl">
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
        <p className="max-w-full text-center text-2xl font-medium leading-normal tracking-tighter text-neutral-400 md:text-4xl">
          Also watch Otokonoko Delivery.
        </p>
      </section>
      <section id="buttons" className="flex w-full flex-col items-center">
        <TelegramButton href="#" />
        <div className="mt-5 flex flex-col items-center justify-center gap-2 md:flex-row">
          <SocialButton href="#">
            <MdiGithub className="text-2xl" />
            &nbsp;GitHub
          </SocialButton>
          <SocialButton href="#">
            <ChatBubbleLeftRightIcon className="h-6" />
            &nbsp;Community Forum
          </SocialButton>
        </div>
      </section>
    </>
  );
}
