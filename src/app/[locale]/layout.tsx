import { cn } from "mizuhara/utils";
import type { Viewport } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { GenerateMetadata, PageParams } from "~/@types/metadata";
import type { PropsWithChildren } from "~/@types/utils";
import { Providers } from "~/components/providers";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";
import { fonts } from "~/config/fonts";
import { siteConfig } from "~/config/site";

import "~/styles/globals.css";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getTranslations();

  const description = t("pages.home.seo.description");

  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: "tools, useful",
    authors: [
      { name: "Fellipe Utaka", url: "https://fellipeutaka.vercel.app" },
    ],
    creator: "Fellipe Utaka",
    publisher: "Fellipe Utaka",
    robots: "index, follow",
    applicationName: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: "/",
      languages: {
        pt: "/pt",
        en: "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: "en",
      siteName: siteConfig.name,
      url: siteConfig.url,
      title: siteConfig.name,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description,
      creator: "@fellipeutaka",
    },
  };
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
  params,
}: PropsWithChildren<PageParams>) {
  const messages = useMessages();

  return (
    <html
      lang={params.locale}
      suppressHydrationWarning
      className="motion-safe:scroll-smooth"
    >
      <body
        className={cn(
          fonts.sans.variable,
          fonts.mono.variable,
          "grid min-h-screen grid-rows-[4rem,1fr,min-content] [scrollbar-gutter:stable]",
          "bg-background text-foreground antialiased font-sans",
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <SiteHeader />
            {children}
            <SiteFooter />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
