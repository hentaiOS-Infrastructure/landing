import FeatureCard from "../components/branding/FeatureCard";
import HeroButton from "../components/buttons/HeroButton";
import TelegramButton from "../components/buttons/TelegramButton";
import featureCardContent from "./featureCardContent";

export default function Index() {
  return (
    <>
      <section
        id="hero"
        className="mt-16 mb-16 flex w-full flex-col items-center"
      >
        <h1 className="mb-2 text-4xl font-extrabold tracking-tighter text-black md:text-5xl">
          Pixel, made in&nbsp;
          <span className="bg-gradient-to-tr from-red-900 via-amber-800 to-red-700 bg-clip-text text-transparent">
            Hell
          </span>
        </h1>
        <h3 className="mb-8 mt-2 text-center text-lg font-medium text-stone-800 md:mt-4 md:text-2xl">
          Meet{" "}
          <span className=" font-bold tracking-tight text-black">
            helluvaOS
          </span>
          &nbsp;–&nbsp;an actually usable Android custom ROM
        </h3>
        <HeroButton />
      </section>
      <section>
        <h3 className="mb-4 text-center font-medium uppercase tracking-widest text-neutral-600">
          Features
        </h3>
        <div className="flex w-full justify-center">
          <div className="grid w-fit grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureCardContent.map((item, index) => (
              <FeatureCard key={index} title={item.title} icon={item.icon}>
                {item.description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>
      <section>
        <h3 className="mb-4 mt-8 text-center font-medium uppercase tracking-widest text-neutral-600">
          FAQ
        </h3>
        <div className="flex w-full justify-center">
          <div className="grid w-fit grid-cols-1 justify-center gap-4 md:grid-cols-3">
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
