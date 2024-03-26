import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import type { GenerateMetadata, PageParams } from "~/@types/metadata";
import { Heading } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";
import { siteConfig } from "~/config/site";
import { getStaticParams } from "~/lib/i18n";

export function generateStaticParams() {
  return getStaticParams();
}

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: t("pages.about.seo.title"),
    description: t("pages.about.seo.description"),
  };
};

export default function Page({ params }: PageParams) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations("pages.about");

  return (
    <div className="grid content-center border-border border-b">
      <main className="fade-in slide-in-from-bottom-8 container animate-duration-1000 animate-in py-10">
        <div className="space-y-2">
          <Heading className="lg:text-4xl">{t("title")}</Heading>
          <p className="text-lg text-muted-foreground">
            {t.rich("subtitle", {
              link: (chunks) => (
                <a
                  className="font-medium underline underline-offset-4"
                  href={siteConfig.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>
        <Heading
          as="h2"
          variant="h2"
          className="mt-8 border-border border-b pb-2"
        >
          {t("credits.title")}
        </Heading>
        <ul className="my-6 ml-6 list-disc space-y-2">
          <li>
            <a
              className="font-medium underline underline-offset-4"
              href="https://tailwindcss.com/"
            >
              TailwindCSS
            </a>
            <span> - {t("credits.topics.tailwind")}</span>
          </li>
          <li>
            <a
              className="font-medium underline underline-offset-4"
              href="https://radix-ui.com"
            >
              Radix UI
            </a>
            <span> - {t("credits.topics.radix-ui")}</span>
          </li>
          <li>
            <a
              className="font-medium underline underline-offset-4"
              href="https://ui.shadcn.com"
            >
              Shadcn UI
            </a>
            <span> - {t("credits.topics.shadcn/ui")}</span>
          </li>
          <li>
            <a
              className="font-medium underline underline-offset-4"
              href="https://lucide.dev/"
            >
              Lucide
            </a>
            <span> - {t("credits.topics.lucide")}</span>
          </li>
          <li>
            <a
              className="font-medium underline underline-offset-4"
              href="https://vercel.com/"
            >
              Vercel
            </a>
            <span> - {t("credits.topics.vercel")}</span>
          </li>
        </ul>
        <Heading
          as="h2"
          variant="h2"
          className="mt-8 border-border border-b pb-2"
        >
          {t("author")}
        </Heading>
        <Text>
          MIT &copy;{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://twitter.com/fellipeutaka"
            target="_blank"
            rel="noreferrer"
          >
            Fellipe Utaka
          </a>
        </Text>
      </main>
    </div>
  );
}
