import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "helluvaOS",
  description: "The hentaiOS Project", // You can refine this
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body
        className={`min-h-screen overscroll-x-none bg-neutral-50 ${inter.className}`}
        style={{
          textRendering: "optimizeLegibility",
        }}
      >
        {children}
      </body>
    </html>
  );
}
