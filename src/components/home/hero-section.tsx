import { useTranslations } from "next-intl";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { Icons } from "../icons";
import { Button } from "../ui/button";
import { Heading } from "../ui/heading";

export function HeroSection() {
  const t = useTranslations("pages.home");

  return (
    <section className="py-10 text-center lg:py-28 md:py-12 xl:py-36">
      <Heading className="text-3xl lg:text-7xl md:text-6xl sm:text-5xl">
        {t.rich("title", {
          tools: (chunks) => (
            <span className="bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
      </Heading>

      <Heading
        as="h2"
        variant="h2"
        className="mx-auto mt-8 max-w-xl font-semibold text-lg text-muted-foreground tracking-tight sm:text-xl"
      >
        {t("subtitle")}
      </Heading>

      <div className="mt-4 flex w-full items-center justify-center gap-4">
        <Button size="lg" asChild>
          <Link href="/tools">{t("get-started")}</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <Icons.GitHub className="mr-2 size-4" />
            <span>GitHub</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
