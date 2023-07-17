import type { Metadata } from "next";

import { typography } from "~/styles/typography";

import { RandomColor } from "./random-color";

export const metadata: Metadata = {
  title: "Random color",
};

export default function Page() {
  return (
    <main className="container grid h-full place-content-center">
      <h1 className={typography.h1}>Random color</h1>
      <RandomColor />
    </main>
  );
}
