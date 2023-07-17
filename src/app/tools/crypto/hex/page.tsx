import type { Metadata } from "next";
import { cnBase } from "tailwind-variants";

import { typography } from "~/styles/typography";

import { Hex } from "./hex";

export const metadata: Metadata = {
  title: "Hex Code",
};

export default function Page() {
  return (
    <main className="container grid h-full place-content-center">
      <h1 className={cnBase(typography.h1, "text-center")}>Hex Code</h1>
      <Hex />
    </main>
  );
}
