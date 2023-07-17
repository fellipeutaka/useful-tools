import type { Metadata } from "next";
import { cnBase } from "tailwind-variants";

import { typography } from "~/styles/typography";

import { Morse } from "./morse";

export const metadata: Metadata = {
  title: "Morse code",
};

export default function Page() {
  return (
    <main className="container grid place-content-center border-b py-8 animate-in fade-in duration-really-slow">
      <h1 className={cnBase(typography.h1, "text-center")}>Morse code</h1>
      <Morse />
    </main>
  );
}
