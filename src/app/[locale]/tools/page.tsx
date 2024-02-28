import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import type { GenerateMetadata, PageParams } from "~/@types/metadata";
import { ToolCard } from "~/components/tools/tool-card";
import { Heading } from "~/components/ui/heading";
import { tools } from "~/config/tools";
import { getStaticParams } from "~/lib/i18n";

export function generateStaticParams() {
  return getStaticParams();
}

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: t("pages.tools.title"),
  };
};

export default function Tools({ params }: PageParams) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("pages.tools");

  return (
    <main className="container">
      <Heading>{t("title")}</Heading>
      <div className="mt-8 space-y-12">
        {tools.map((tool) => (
          <section key={tool.category} className="space-y-4">
            <Heading as="h2" variant="h3">
              {tool.category}
            </Heading>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] justify-items-center gap-x-2 gap-y-6 md:justify-items-start">
              {tool.tools.map((tool) => (
                <li key={tool.title}>
                  <ToolCard {...tool} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
