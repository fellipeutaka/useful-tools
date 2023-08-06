import type { GenerateMetadata } from "~/@types/metadata";
import { getScopedI18n } from "~/lib/next-international/server";
import { typography } from "~/styles/typography";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools");

  return {
    title: t("title"),
    description: "The best and useful just for you",
    keywords: "tools, useful",
  };
};

export default function Tools() {
  return (
    <main className="container h-full">
      <h1 className={typography.h1}>Tools</h1>
    </main>
  );
}
