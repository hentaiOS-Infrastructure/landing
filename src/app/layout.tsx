import "./globals.css";
import RootNavbar from "./RootNavbar";
import { Inter } from "next/font/google";
import clsx from "clsx";
import RootFooter from "./RootFooter";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>helluvaOS</title>
        <meta name="viewport" content="width=device-width" />
        {/* <meta charSet="utf-8" /> */}
      </head>
      <body
        className={clsx(
          "min-h-screen overscroll-x-none bg-neutral-50",
          inter.className
        )}
        style={{
          textRendering: "optimizeLegibility",
        }}
      >
        <RootNavbar />
        <main className="mt-36 mb-20 flex w-full justify-center overflow-x-auto px-4 md:px-8">
          <div className="flex max-w-screen-xl flex-grow flex-col justify-center">
            {children}
          </div>
        </main>
        <RootFooter />
      </body>
    </html>
  );
}
