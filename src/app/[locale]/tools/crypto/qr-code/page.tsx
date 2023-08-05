import { cnBase } from "tailwind-variants";

import { GenerateMetadata } from "~/@types/metadata";
import { getScopedI18n } from "~/lib/next-international/server";
import { typography } from "~/styles/typography";

import { QRCode } from "./qr-code";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools.qr-code");

  return {
    title: t("title"),
    description: "The best and useful just for you",
    keywords: "tools, useful",
  };
};

export default async function Page() {
  const t = await getScopedI18n("pages.tools.qr-code");

  return (
    <main className="container grid h-full place-content-center">
      <h1 className={cnBase(typography.h1, "text-center")}>{t("title")}</h1>
      <QRCode />
    </main>
  );
}