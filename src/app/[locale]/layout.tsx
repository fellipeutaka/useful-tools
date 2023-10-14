import { Inter } from "next/font/google";

import type { GenerateMetadata } from "~/@types/metadata";
import { Footer } from "~/components/layout/footer";
import { Navbar } from "~/components/layout/navbar";
import { Providers } from "~/contexts/providers";
import { defaultLocale, localeList } from "~/locales";

import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata: GenerateMetadata = () => {
  return {
    title: {
      default: "Useful Tools",
      template: "%s | Useful Tools",
    },
    description: "The best and useful just for you",
    keywords: "tools, useful",
    viewport: "width=device-width, initial-scale=1",
    creator: "Fellipe Utaka",
    publisher: "Fellipe Utaka",
    authors: [{ name: "Fellipe Utaka" }],
    robots: "index, follow",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    applicationName: "Useful Tools",
    metadataBase: new URL("https://usefultools.vercel.app"),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: defaultLocale,
      alternateLocale: localeList.filter((locale) => locale !== defaultLocale),
      siteName: "Useful Tools",
      url: "https://usefultools.vercel.app",
      title: "Useful Tools",
      description: "The best and useful just for you",
      images: [
        {
          url: "/og-image.png",
          width: 1280,
          height: 640,
          alt: "Useful Tools",
        },
      ],
    },
  };
};

export default function RootLayout({
  children,
  params,
}: PropsWithChildren<PageParams>) {
  return (
    <html
      lang={params.locale}
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body
        className="grid min-h-screen grid-rows-[4rem,1fr,min-content] bg-background text-foreground antialiased"
        style={inter.style}
      >
        <Providers locale={params.locale}>
          <Navbar sticky border />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
