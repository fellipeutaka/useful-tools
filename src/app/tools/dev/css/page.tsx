import type { Metadata } from "next";

import { typography } from "~/styles/typography";

import { CssMinifier } from "./css-minifier";

export const metadata: Metadata = {
  title: "CSS Minifier",
};

export default function Page() {
  return (
    <main className="container">
      <h1 className={typography.h1}>CSS Minifier</h1>
      <CssMinifier />
    </main>
  );
}
