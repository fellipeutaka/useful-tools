import type { GenerateMetadata } from "~/@types/metadata";
import { getScopedI18n } from "~/lib/next-international/server";
import { typography } from "~/styles/typography";

import { CssMinifier } from "./css-minifier";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools.css-minifier");

  return {
    title: t("title"),
    description: "The best and useful just for you",
    keywords: "tools, useful",
  };
};

export default async function Page() {
  const t = await getScopedI18n("pages.tools.css-minifier");

  return (
    <main className="container">
      <h1 className={typography.h1}>{t("title")}</h1>
      <CssMinifier />
    </main>
  );
}
