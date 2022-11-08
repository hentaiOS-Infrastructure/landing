import ActionCard from "../components/branding/cards/ActionCard";
import Installer from "../components/branding/cards/Installer";
import StudentPortal from "../components/branding/cards/StudentPortal";
import FeaturedBuild from "../components/branding/FeaturedBuild";
import HeroBanner from "../components/branding/HeroBanner";
import StudentPortalSvg from "../components/branding/StudentPortalSvg";
import {
  MaterialSymbolsDocs,
  MaterialSymbolsDownloadRounded,
} from "../components/icons/FeatureCardIcons";
import bannerContent from "./(content)/banner";

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
        <ActionCard href="#" className="flex w-full bg-hosPink">
          <MaterialSymbolsDownloadRounded className="text-[2rem]" />
          <span>Downloads</span>
        </ActionCard>
        <ActionCard href="#" className="flex w-full bg-hosPink">
          <MaterialSymbolsDocs className="text-[2rem]" />
          <span>Blog</span>
        </ActionCard>
      </section>
      <section
        id="hero"
        className="mb-20 grid grid-rows-2 gap-4 md:grid-cols-2 md:grid-rows-1 md:gap-8"
      >
        <Installer />
        <StudentPortal />
      </section>
      {/* <div className=" md:mb-20 md:flex">
        <Installer className="mb-6 max-w-[50%] md:mr-8" />

        <section className="grid grid-cols-1 grid-rows-2 gap-4 md:h-fit md:grid-cols-2">
          <GenericCard className="col-span-2  bg-black ">
            <div className="hś-full w-full border border-hosGold bg-portalBg"></div>
            <div className="group relative flex h-full w-full items-center justify-center">
              <StudentPortalSvg className="text-hosGold transition-colors group-hover:text-neutral-50" />
              <span className="absolute left-16 bottom-10 max-w-[4rem] text-2xl font-medium leading-tight text-hosGold transition-colors group-hover:text-neutral-50">
                Student Portal
              </span>
            </div>
          </GenericCard>
          <GenericCard className=" col-span-1 bg-hosPink">
            fgdghdfhfg
          </GenericCard>
          <GenericCard className=" bg-hosPink">dsadas</GenericCard>
        </section>
      </div> */}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil
      ratione sit repellendus, tenetur, blanditiis ducimus numquam, quam
      accusantium asperiores omnis quos expedita laudantium at sequi adipisci
      corrupti vel facere vero a consectetur. Fugit officia animi necessitatibus
      expedita eligendi excepturi similique doloremque! Rem incidunt quidem
      voluptates nemo aliquam totam iusto vitae ut, voluptatum odio possimus
      assumenda nam illum hic quaerat asperiores voluptatem exercitationem
      provident. Voluptatem impedit voluptatibus adipisci dolore quae sapiente
      obcaecati, fuga eligendi vel. Adipisci veritatis dicta ullam eligendi
      consectetur vero molestias consequuntur est cupiditate? Fuga officiis, eos
      laborum unde omnis pariatur alias doloremque, cumque, dolore sit dolor
      tempora? Obcaecati ullam quod accusantium enim iste sequi id sed maxime
      suscipit quas illum, explicabo rerum inventore pariatur temporibus minus
      rem! Quidem, corrupti non minima placeat nesciunt, eligendi eum porro
      earum a hic iste eos distinctio ex necessitatibus repudiandae delectus
      explicabo illo nobis soluta ullam cupiditate adipisci! Sequi optio tempore
      odit facere odio incidunt amet magni architecto nobis vero! Culpa laborum
      ab veniam totam quos rerum assumenda. Vitae corporis, a quisquam inventore
      qui sapiente culpa blanditiis ab quo eum nobis magni, ratione fugit
      exercitationem delectus in consequuntur iusto consequatur ut quibusdam
      autem obcaecati laboriosam quas aliquid? Suscipit labore assumenda ea
      porro omnis ratione blanditiis nulla quasi repudiandae exercitationem
      expedita consequatur, hic quod, quisquam animi quae ex iure consectetur
      ullam esse, autem facilis nam. Incidunt porro blanditiis molestias ex
      facilis delectus beatae rem, expedita tempore veritatis corrupti cumque
      voluptates ipsum dolores eius eos odio fugiat totam ullam id eum, nihil
      facere labore! Nulla minus mollitia quos iure, ut nesciunt eligendi non ex
      ipsa repellat quam dicta dignissimos quo labore porro alias, autem
      tempore, voluptas perferendis impedit beatae! Neque, cum accusamus
      deserunt consequatur dolor consectetur! Ratione explicabo inventore
      voluptates veniam alias repellendus amet repudiandae id nostrum reiciendis
      qui numquam nihil, deserunt excepturi et omnis velit adipisci aspernatur
      iure quibusdam rem ducimus? Nulla sequi nesciunt sunt, et corporis atque
      aspernatur suscipit, eos quod at aperiam delectus? Illo temporibus nostrum
      adipisci, ipsum dolorum et dignissimos voluptatibus, incidunt vero facere
      a sint veniam omnis sapiente beatae. Quasi excepturi obcaecati perferendis
      explicabo facilis doloremque expedita, exercitationem placeat amet,
      quisquam quia veritatis! Quod dolorum velit adipisci dolore, excepturi
      dolor nulla quidem non debitis amet cum? Veritatis nemo ipsam quidem hic?
      Beatae, itaque commodi laborum natus omnis accusamus unde voluptatum
      dolorum cumque nulla quibusdam, in est earum distinctio consequuntur
      suscipit! Nobis a voluptates culpa veniam nemo iusto dolor, omnis fugit
      cum? In est magnam nostrum nulla? Doloribus perferendis ad, quos a et quas
      enim at tempore fugit praesentium quae quibusdam dolore, neque adipisci
      itaque facilis quis? Ipsa, dolorem repellendus delectus nostrum corrupti
      iusto eos voluptatibus sit minima provident vero sapiente voluptatum
      libero dolorum cum iure quibusdam odio sint commodi quia quisquam ipsum
      dicta. Quia molestiae voluptates sed error. Minima corrupti quia quisquam
      necessitatibus tenetur deserunt omnis sequi fuga voluptatum totam aliquid,
      beatae, id ut accusantium dicta esse eveniet labore praesentium fugit
      iusto facere quaerat porro nihil animi! A sint quod, repellendus, et
      voluptatum inventore pariatur esse dolorum laborum blanditiis quaerat
      suscipit, ut eveniet aliquam amet provident animi. Provident eligendi in
      ad harum, amet, praesentium officiis recusandae saepe libero molestiae
      doloribus quo, veniam architecto accusamus nisi? Nisi velit aliquam animi
      placeat! Voluptates numquam suscipit esse accusantium ea ipsa, nam odio
      corporis ab vitae necessitatibus omnis neque facere error eos dignissimos
      nulla harum? Possimus nisi vitae blanditiis quia ut nesciunt repellat
      magni veritatis. Nesciunt sunt hic reprehenderit odio iste mollitia
      corporis debitis quasi expedita repellendus cum assumenda animi ut quidem
      aperiam id molestias, tempore quod omnis, quibusdam dolore facilis, beatae
      quas magni! Itaque, molestiae ut. Possimus tenetur unde magni labore
      aliquid ratione quo nihil facilis corporis numquam reiciendis perferendis
      placeat ab delectus maxime eum modi, itaque atque, fugiat voluptas
      accusantium suscipit. Nulla obcaecati facere sunt ad distinctio dolor
      possimus aperiam veritatis? Repudiandae, blanditiis officiis aspernatur
      molestiae ipsa tenetur ut nobis minima eum aliquam neque qui! Nostrum
      veritatis sint nemo incidunt, eaque debitis molestias quae consequuntur,
      tenetur quaerat quod voluptates, est similique dolorem repellendus
      cupiditate inventore numquam voluptate totam maxime velit repudiandae!
      Autem in quidem, magni mollitia fugit id alias odio delectus? Nam, rem
      nulla. Pariatur impedit veniam non facere molestiae, temporibus suscipit
      est sapiente optio recusandae, rem deleniti quod, culpa consectetur
      asperiores animi sint! Reiciendis ducimus dolor totam maiores tenetur
      error dolorum laudantium explicabo eius odio. Quos dolores, esse commodi
      provident quae libero incidunt voluptate velit corporis fugiat, similique
      expedita dignissimos. Veritatis iusto quibusdam iste vitae. Necessitatibus
      itaque dolorem non officiis, voluptates error, voluptatem illo facere
      quaerat illum cum amet quidem explicabo possimus cumque eius architecto
      culpa facilis quos fuga quis deleniti libero cupiditate. Rem iusto placeat
      dignissimos doloribus magnam necessitatibus. Illo officiis explicabo
      laboriosam, ullam tempora perferendis laudantium aperiam at consequuntur
      iure natus deleniti corrupti voluptatibus itaque et voluptate, blanditiis
      sit dicta. Tempora, magnam aperiam officia molestias dolorem similique
      doloremque laboriosam reprehenderit alias ad amet. Dolores quis soluta
      praesentium nobis recusandae quia eos aliquam, voluptate, perferendis,
      cupiditate perspiciatis. Officia praesentium dolor expedita enim, repellat
      commodi mollitia molestias rem consequuntur. Voluptatum, harum ex tempore
      nostrum explicabo corrupti assumenda. Et obcaecati labore eos, at corrupti
      vero. Et minima eum laborum quae inventore totam, fugit eaque nulla harum.
      Minus dolore fuga fugiat labore cupiditate? Quae, quo quod? Distinctio
      possimus dolore repellat sunt dignissimos sint quaerat minima asperiores,
      obcaecati, culpa illum nam ab. Beatae magni corporis tenetur voluptatum.
      Fugiat, obcaecati mollitia fugit aliquam voluptate dolorem culpa, quo
      ducimus ipsam accusantium quod quibusdam dolore, deleniti quidem? Dolor,
      rerum eius ab aut exercitationem molestias fuga eum praesentium nesciunt
      quia labore nihil quas. At laborum ipsum saepe deleniti dignissimos
      consectetur perferendis itaque consequatur non pariatur totam voluptatum,
      illum odit earum. Quam omnis, magni ducimus sunt fugiat modi amet aut enim
      blanditiis sed, dignissimos iusto tempore deserunt ea illo eveniet
      voluptatem laborum rerum suscipit odio minus similique asperiores totam.
      Adipisci magnam quis quas nihil autem itaque porro, iste odio aperiam
      natus, molestiae deserunt sint ut impedit id. Voluptate quisquam et,
      temporibus fuga veritatis inventore necessitatibus suscipit enim neque
      sunt aut molestiae numquam optio beatae ipsa, veroccusantium quod
      quibusdam dolore, deleniti quidem? Dolor, rerum eius ab aut exercitationem
      molestias fuga eum praesentium nesciunt quia labore nihil quas. At laborum
      ipsum saepe deleniti dignissimos consectetur perferendis itaque
      consequatur non pariatur totam voluptatum, illum odit earum. Quam omnis,
      magni ducimus sunt fugiat modi amet aut enim blanditiis sed, dignissimos
      iusto tempore deserunt ea illo eveniet voluptatem laborum rerum suscipit
      odio minus similique asperiores totam. Adipisci magnam quis quas nihil
      autem itaque porro, iste odio aperiam natus, molestiae deserunt sint ut
      impedit id. Voluptate quisquam et, temporibus fuga veritatis inventore
      necessitatibus suscipit enim neque sunt aut molestiae numquam optio beatae
      ipsa, veroccusantium quod quibusdam dolore, deleniti quidem? Dolor, rerum
      eius ab aut exercitationem molestias fuga eum praesentium nesciunt quia
      labore nihil quas. At laborum ipsum saepe deleniti dignissimos consectetur
      perferendis itaque consequatur non pariatur totam voluptatum, illum odit
      earum. Quam omnis, magni ducimus sunt fugiat modi amet aut enim blanditiis
      sed, dignissimos iusto tempore deserunt ea illo eveniet voluptatem laborum
      rerum suscipit odio minus similique asperiores totam. Adipisci magnam quis
      quas nihil autem itaque porro, iste odio aperiam natus, molestiae deserunt
      sint ut impedit id. Voluptate quisquam et, temporibus fuga veritatis
      inventore necessitatibus suscipit enim neque sunt aut molestiae numquam
      optio beatae ipsa, vero explicabo doloremque.
    </>
  );
}
