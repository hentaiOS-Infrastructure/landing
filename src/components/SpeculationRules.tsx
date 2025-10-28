import Script from 'next/script';

interface SpeculationRulesProps {
    prefetchPathsOnHover?: string[];
    prerenderPathsOnHover?: string[];
}

export function SpeculationRules({
    prefetchPathsOnHover,
    prerenderPathsOnHover,
}: SpeculationRulesProps) {
    const speculationRules: { prefetch?: any[]; prerender?: any[] } = {};

    if (prefetchPathsOnHover && prefetchPathsOnHover.length > 0) {
        speculationRules.prefetch = [
            {
                urls: prefetchPathsOnHover,
                eagerness: 'moderate',
            },
        ];
    }

    if (prerenderPathsOnHover && prerenderPathsOnHover.length > 0) {
        speculationRules.prerender = [
            {
                urls: prerenderPathsOnHover,
                eagerness: 'conservative',
            },
        ];
    }

    // Add a more generic rule for prerendering all internal links, excluding specific paths.
    // This is based on the first example in the Vercel guide.
    if (!prerenderPathsOnHover || prerenderPathsOnHover.length === 0) {
        speculationRules.prerender = [
            ...(speculationRules.prerender || []),
            {
                where: {
                    and: [
                        { href_matches: "/*" },
                        { not: { href_matches: "/logout" } }, // Example: exclude logout
                        { not: { href_matches: "/*\\?*(^|&)add-to-cart=*" } }, // Example: exclude add-to-cart
                        { not: { selector_matches: ".no-prerender" } },
                        { not: { selector_matches: "[rel~=nofollow]" } },
                        // Add project-specific exclusions if needed
                        { not: { href_matches: "/admin/*" } },
                        { not: { href_matches: "/api/*" } },
                    ]
                },
                eagerness: 'conservative', // Or 'moderate' based on desired aggressiveness
            }
        ];
    }


    if (Object.keys(speculationRules).length === 0) {
        return null;
    }

    return (
        <Script
            id="speculation-rules"
            type="speculationrules"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(speculationRules),
            }}
        />
    );
}
