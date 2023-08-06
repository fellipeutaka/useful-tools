import { cnBase } from "tailwind-variants";

import type { GenerateMetadata } from "~/@types/metadata";
import { getScopedI18n } from "~/lib/next-international/server";
import { typography } from "~/styles/typography";

import { BinaryCode } from "./binary-code";

export const runtime = "edge";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools.binary-code");

  return {
    title: t("title"),
    description: "The best and useful just for you",
    keywords: "tools, useful",
  };
};

export default async function Page() {
  const t = await getScopedI18n("pages.tools.binary-code");

  return (
    <main className="container grid h-full place-content-center">
      <h1 className={cnBase(typography.h1, "text-center")}>{t("title")}</h1>
      <BinaryCode />
    </main>
  );
}
