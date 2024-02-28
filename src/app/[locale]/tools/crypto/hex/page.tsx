import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import type { GenerateMetadata, PageParams } from "~/@types/metadata";
import { Heading } from "~/components/ui/heading";
import { getStaticParams } from "~/lib/i18n";
import { Hex } from "./hex";

export function generateStaticParams() {
  return getStaticParams();
}

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: t("pages.tools.hex-code.title"),
  };
};

export default function Page({ params }: PageParams) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("pages.tools.hex-code");

  return (
    <main className="container">
      <Heading>{t("title")}</Heading>
      <Hex />
    </main>
  );
}
