import type { Metadata } from "next";
import { cnBase } from "tailwind-variants";

import { typography } from "~/styles/typography";

import { BinaryCode } from "./binary-code";

export const metadata: Metadata = {
  title: "Binary Code",
};

export default function Page() {
  return (
    <main className="container grid h-full place-content-center">
      <h1 className={cnBase(typography.h1, "text-center")}>Binary Code</h1>
      <BinaryCode />
    </main>
  );
}
