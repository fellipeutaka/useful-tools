import type { GenerateMetadata } from "~/@types/metadata";
import { getScopedI18n } from "~/lib/next-international/server";
import { typography } from "~/styles/typography";

import { RandomColor } from "./random-color";

export const runtime = "edge";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools.random-color");

  return {
    title: t("title"),
    description: "The best and useful just for you",
    keywords: "tools, useful",
  };
};

export default async function Page() {
  const t = await getScopedI18n("pages.tools.random-color");

  return (
    <main className="container grid h-full place-content-center">
      <h1 className={typography.h1}>{t("title")}</h1>
      <RandomColor />
    </main>
  );
}
