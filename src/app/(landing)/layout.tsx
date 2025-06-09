import RootNavbar from "../RootNavbar";
import RootFooter from "../RootFooter";

// Removed Inter, clsx, and globals.css as they are handled by the root layout

export default function LandingLayout({ // Renamed for clarity, was RootLayout
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <RootNavbar />
            <main className="mt-36 mb-20 flex w-full justify-center overflow-x-auto px-4 md:px-8">
                <div className="flex max-w-(--breakpoint-xl) grow flex-col justify-center">
                    {children}
                </div>
            </main>
            <RootFooter />
        </>
    );
}
