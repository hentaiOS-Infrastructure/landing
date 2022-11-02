import "./globals.css";
import RootNavbar from "./RootNavbar";

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
      <body className="min-h-screen overscroll-x-none bg-neutral-50">
        <RootNavbar />
        <main className="flex w-screen justify-center px-4">
          <div className="flex max-w-screen-xl flex-grow flex-col justify-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
