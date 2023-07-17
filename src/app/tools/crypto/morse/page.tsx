import type { Metadata } from "next";
import { cnBase } from "tailwind-variants";

import { typography } from "~/styles/typography";

import { Morse } from "./morse";

export const metadata: Metadata = {
  title: "Morse code",
};

export default function Page() {
  return (
    <main className="container grid h-full place-content-center">
      <h1 className={cnBase(typography.h1, "text-center")}>Morse code</h1>
      <Morse />
    </main>
  );
}
