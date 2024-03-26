import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { siteConfig } from "~/config/site";
import { Icons } from "../icons";
import { Heading } from "../ui/heading";

export function StarsSection() {
  const t = useTranslations("pages.home");

  return (
    <section
      id="open-source"
      className="space-y-4 py-8 text-center lg:py-24 md:py-12"
    >
      <Heading
        as="h2"
        variant="h2"
        className="text-3xl leading-[1.1] md:text-6xl sm:text-3xl"
      >
        {t("open-source.title")}
      </Heading>
      <p className="mx-auto max-w-[85%] text-muted-foreground leading-normal sm:text-lg sm:leading-7">
        {t("open-source.subtitle.first")}
        <br />
        {t("open-source.subtitle.second")}{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
          href={siteConfig.links.github}
        >
          GitHub
        </a>
        .
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href={siteConfig.links.github}
        className="mx-auto flex w-fit transition-opacity hover:opacity-80"
      >
        <div className="flex size-10 items-center justify-center rounded-md border border-muted bg-muted">
          <Icons.GitHub />
        </div>

        <div className="flex items-center">
          <div className="size-4 border-muted border-y-8 border-y-transparent border-r-8" />
          <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
            <Suspense fallback={t("open-source.stars-error")}>
              <StarsAmount />
            </Suspense>
          </div>
        </div>
      </a>
    </section>
  );
}

type ApiResponse = {
  stargazers_count: number;
};

export async function getGitHubStars() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${siteConfig.links.github.replace(
        "https://github.com/",
        "",
      )}`,
      {
        next: {
          revalidate: 60, // 1 minute
        },
      },
    );

    const data: ApiResponse = await response.json();

    return data.stargazers_count;
  } catch (error) {
    console.error("Error fetching GitHub stars", error);
    return null;
  }
}

export async function StarsAmount() {
  const [count, t] = await Promise.all([
    getGitHubStars(),
    getTranslations("pages.home"),
  ]);

  if (!count) {
    return t("open-source.stars-error");
  }

  return t("open-source.stars", { count });
}
