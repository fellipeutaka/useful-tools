import type { Metadata } from "next";

import { typography } from "~/styles/typography";

import { TextConverter } from "./text-converter";

export const metadata: Metadata = {
  title: "Text Converter",
};

export default function Page() {
  return (
    <main className="container">
      <h1 className={typography.h1}>Text Converter</h1>
      <TextConverter />
    </main>
  );
}
