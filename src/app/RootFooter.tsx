import {
  BottomTextUpper,
  BottomTextLower,
} from "../components/svgBased/BottomText";
import ThryobriaIcon from "../components/icons/ThyrobriaIcon";
import Link from "next/link";
import clsx from "clsx"; // Added for potential conditional classes, though not used in this specific diff

interface FooterLinkItem {
  id: string;
  title: string;
  href: string;
  openInNewTab?: boolean;
  isColumnHeader?: boolean;
}

async function getFooterLinks(location: string): Promise<FooterLinkItem[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/nav-links?where[location][equals]=${location}&sort=order&limit=10&depth=0`
    );
    if (!res.ok) {
      console.error(`Failed to fetch footer links for location ${location}:`, res.status, await res.text());
      return [];
    }
    const data = await res.json();
    return data.docs || [];
  } catch (error) {
    console.error(`Error fetching footer links for location ${location}:`, error);
    return [];
  }
}

const RenderFooterColumn = ({ links, defaultHeader }: { links: FooterLinkItem[], defaultHeader: string }) => {
  const headerItem = links.find(link => link.isColumnHeader);
  const regularLinks = links.filter(link => !link.isColumnHeader);

  return (
    <section>
      <h3 className="font-bold text-lg mb-1">{headerItem?.title || defaultHeader}</h3>
      <div className="mt-1 mb-3 h-px w-full bg-neutral-400"></div>
      {regularLinks.length > 0 && (
        <ul className="space-y-1">
          {regularLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                target={link.openInNewTab ? "_blank" : undefined}
                rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                className="text-sm text-neutral-700 hover:text-hosPink hover:underline underline-offset-2"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

const RootFooter = async () => {
  const footerCol1Links = await getFooterLinks('footer_col1');
  const footerCol2Links = await getFooterLinks('footer_col2');
  // const socialLinks = await getFooterLinks('footer_socials'); // For dynamic social links later

  return (
    <div className="flex w-full flex-col items-center justify-center bg-neutral-100 pt-6">
      <BottomTextUpper className="mb-10 mt-20 h-32 max-w-[75vw]" />
      <BottomTextLower className="mb-20 h-20" />
      <div className="w-full bg-neutral-200 py-8">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col px-4 md:px-8">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            {/* Column 1 */}
            <RenderFooterColumn links={footerCol1Links} defaultHeader="Link Header" />

            {/* Column 2 */}
            <RenderFooterColumn links={footerCol2Links} defaultHeader="Link Header 2" />

            {/* Column 3 */}
            <section className="flex flex-col items-start md:items-end">
              <ThryobriaIcon className="h-20 w-auto mb-4" />
              <div className="text-sm text-neutral-700 md:text-right">
                <p>© The hentaiOS Project</p>
                <p>Property of the Red Winter Federal Academy</p>
                <p>Proudly developed in Thryobria.</p>
              </div>
              {/* Social media links can be added here later if made dynamic */}
            </section>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-300 text-center md:text-left md:col-span-2"> {/* Positioned below first two columns */}
            <p className="text-sm text-neutral-600">
              Built by cunnies at hentaiOS Design Team and Rev{" "}
              <span className="line-through">Says Desu</span>.
              <br />A Thryobria Tower Incubator Project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootFooter;
