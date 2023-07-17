import type { Metadata } from "next";
import { cnBase } from "tailwind-variants";

import { typography } from "~/styles/typography";

import { CaesarCipher } from "./caesar-cipher";

export const metadata: Metadata = {
  title: "Caesar Cipher",
};

export default function Page() {
  return (
    <main className="container grid h-full place-content-center">
      <h1 className={cnBase(typography.h1, "text-center")}>Caesar Cipher</h1>
      <CaesarCipher />
    </main>
  );
}
