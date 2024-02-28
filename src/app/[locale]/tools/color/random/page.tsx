import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import type { GenerateMetadata, PageParams } from "~/@types/metadata";
import { Heading } from "~/components/ui/heading";
import { getStaticParams } from "~/lib/i18n";
import { RandomColor } from "./random-color";

export function generateStaticParams() {
  return getStaticParams();
}

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: t("pages.tools.random-color.title"),
  };
};

export default function Page({ params }: PageParams) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("pages.tools.random-color");

  return (
    <main className="container">
      <Heading>{t("title")}</Heading>
      <RandomColor />
    </main>
  );
}
