import {
  BottomTextUpper,
  BottomTextLower,
} from "../components/svgBased/BottomText";
import ThryobriaIcon from "../components/icons/ThyrobriaIcon";
import Link from "next/link";
import clsx from "clsx"; // Added for potential conditional classes, though not used in this specific diff

interface FooterLinkItem {
  id: string;
  href: string;
  openInNewTab?: boolean;
  linkLabel?: string;
}

interface SiteSettings {
  footerColumns: {
    header: string;
    location: 'footer_col1' | 'footer_col2';
  }[];
}

async function getFooterData(): Promise<{ settings: SiteSettings | null; links: Record<string, FooterLinkItem[]> }> {
  try {
    const [settingsRes, col1Res, col2Res] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/globals/site-settings?depth=0`),
      fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/nav-links?where[location][equals]=footer_col1&sort=order&limit=10&depth=0`),
      fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/nav-links?where[location][equals]=footer_col2&sort=order&limit=10&depth=0`),
    ]);

    const settings = settingsRes.ok ? await settingsRes.json() : null;
    const col1Links = col1Res.ok ? (await col1Res.json()).docs : [];
    const col2Links = col2Res.ok ? (await col2Res.json()).docs : [];

    return { settings, links: { footer_col1: col1Links, footer_col2: col2Links } };
  } catch (error) {
    console.error(`Error fetching footer data:`, error);
    return { settings: null, links: { footer_col1: [], footer_col2: [] } };
  }
}

const RenderFooterColumn = ({ links, header }: { links: FooterLinkItem[], header: string }) => {
  return (
    <section>
      <h3 className="font-bold text-lg mb-1">{header}</h3>
      <div className="mt-1 mb-3 h-px w-full bg-neutral-400"></div>
      {links.length > 0 && (
        <ul className="space-y-1">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                target={link.openInNewTab ? "_blank" : undefined}
                rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                className="text-sm text-neutral-700 hover:text-hosPink hover:underline underline-offset-2"
              >
                {link.linkLabel}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

const RootFooter = async () => {
  const { settings, links } = await getFooterData();
  const footerCol1Links = links.footer_col1 || [];
  const footerCol2Links = links.footer_col2 || [];

  const getHeaderForLocation = (location: 'footer_col1' | 'footer_col2') => {
    return settings?.footerColumns?.find(col => col.location === location)?.header || `Link Header`;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center bg-neutral-100 pt-6">
      <BottomTextUpper className="mb-10 mt-20 h-32 max-w-[75vw]" />
      <BottomTextLower className="mb-20 h-20" />
      <div className="w-full bg-neutral-200 py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 md:px-8">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            {/* Column 1 */}
            <RenderFooterColumn links={footerCol1Links} header={getHeaderForLocation('footer_col1')} />

            {/* Column 2 */}
            <RenderFooterColumn links={footerCol2Links} header={getHeaderForLocation('footer_col2')} />

            {/* Column 3 */}
            <section className="flex flex-col items-start md:items-end">
              <ThryobriaIcon className="h-20 w-auto mb-4" />
              <div className="text-sm text-neutral-700 md:text-right">
                <p>© The helluvaOS Project</p>
                <p>Property of the Red Winter Federal Academy</p>
                <p>Proudly developed in Thryobria.</p>
              </div>
              {/* Social media links can be added here later if made dynamic */}
            </section>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-300 text-center md:text-left md:col-span-2"> {/* Positioned below first two columns */}
            <p className="text-sm text-neutral-600">
              Built by cunnies at helluvaOS Design Team and Rev{" "}
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
