import type { Metadata } from "next";
import { cnBase } from "tailwind-variants";

import { typography } from "~/styles/typography";

import { BinaryCode } from "./binary-code";

export const metadata: Metadata = {
  title: "Binary Code",
};

export default function Page() {
  return (
    <main className="container grid place-content-center border-b py-8 animate-in fade-in duration-really-slow">
      <h1 className={cnBase(typography.h1, "text-center")}>Binary Code</h1>
      <BinaryCode />
    </main>
  );
}
