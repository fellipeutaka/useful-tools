import type { Metadata } from "next";
import { cnBase } from "tailwind-variants";

import { typography } from "~/styles/typography";

import { Hex } from "./hex";

export const metadata: Metadata = {
  title: "Hex Code",
};

export default function Page() {
  return (
    <main className="container grid place-content-center border-b py-8 animate-in fade-in duration-really-slow">
      <h1 className={cnBase(typography.h1, "text-center")}>Hex Code</h1>
      <Hex />
    </main>
  );
}
