import FeatureCard from "../components/branding/FeatureCard";
import HeroButton from "../components/buttons/HeroButton";
import TelegramButton from "../components/buttons/TelegramButton";
import featureCardContent from "./featureCardContent";

export default function Index() {
  return (
    <>
      <section
        id="hero"
        className="mt-8 mb-16 flex w-full flex-col items-center md:space-y-2"
      >
        <h1 className="mb-2 text-3xl font-bold tracking-tighter text-black md:text-5xl">
          Pixel, made in&nbsp;
          <span className="bg-gradient-to-tr from-red-900 via-amber-800 to-red-700 bg-clip-text text-transparent">
            Hell
          </span>
        </h1>
        <h3 className="text-center text-lg text-stone-800 md:text-2xl">
          Meet{" "}
          <span className=" font-bold italic tracking-tight text-black">
            helluvaOS
          </span>
          &nbsp;–&nbsp;an actually usable custom ROM.
        </h3>
      </section>
      <section>
        <HeroButton>Get it</HeroButton>
        {/* <TelegramButton href="https://t.me/hentaiOS">Newsroom</TelegramButton> */}
      </section>
      <section>
        <div className="flex w-full justify-center">
          <div className="grid w-fit grid-cols-3 justify-center gap-4">
            {featureCardContent.map((item, index) => (
              <FeatureCard key={index} title={item.title} icon={item.icon}>
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
