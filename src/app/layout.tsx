import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "~/components/layout/footer";
import { Navbar } from "~/components/layout/navbar";
import { Providers } from "~/contexts/providers";

import "~/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
};

export default function RootLayout({ children }: WithChildren) {
  return (
    <html
      lang="en"
      className="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body
        className="grid min-h-screen grid-rows-[4rem,1fr,min-content] bg-background text-foreground antialiased"
        style={inter.style}
      >
        <Providers>
          <Navbar sticky border />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
