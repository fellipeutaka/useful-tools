import { Balancer } from "react-wrap-balancer";

import { cnBase } from "tailwind-variants";

import type { GenerateMetadata } from "~/@types/metadata";
import { REPOSITORY_URL } from "~/constants/repository-info";
import { getScopedI18n } from "~/lib/next-international/server";
import { typography } from "~/styles/typography";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.about");

  return {
    title: t("title"),
    description: "The best and useful just for you",
    keywords: "tools, useful",
  };
};

export const runtime = "edge";

export default async function Page() {
  const t = await getScopedI18n("pages.about");

  return (
    <div className="grid content-center border-b">
      <main className="container py-10 animate-in fade-in slide-in-from-bottom-8 duration-really-slow">
        <div className="space-y-2">
          <h1 className={cnBase(typography.h1, "lg:text-4xl")}>{t("title")}</h1>
          <Balancer as="p" className="text-lg text-muted-foreground">
            {t("subtitle", {
              link: (
                <a
                  className="font-medium underline underline-offset-4"
                  href={REPOSITORY_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t("subtitle.link")}
                </a>
              ),
            })}
          </Balancer>
        </div>
        <h2 className={cnBase(typography.h2, "mt-8 border-b pb-2")}>
          {t("credits.title")}
        </h2>
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
        <h2 className={cnBase(typography.h2, "mt-8 border-b pb-2")}>
          {t("author")}
        </h2>
        <p className={typography.p}>
          MIT &copy;{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://twitter.com/fellipeutaka"
            target="_blank"
            rel="noreferrer"
          >
            Fellipe Utaka
          </a>
        </p>
      </main>
    </div>
  );
}
