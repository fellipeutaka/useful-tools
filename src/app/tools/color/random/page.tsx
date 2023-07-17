import type { Metadata } from "next";

import { typography } from "~/styles/typography";

import { RandomColor } from "./random-color";

export const metadata: Metadata = {
  title: "Random color",
};

export default function Page() {
  return (
    <main className="container grid place-content-center border-b py-8 text-center animate-in fade-in duration-really-slow">
      <h1 className={typography.h1}>Random color</h1>
      <RandomColor />
    </main>
  );
}
