import { useTranslations } from "next-intl";
import { siteConfig } from "~/config/site";
import { Icons } from "./icons";
import { Button } from "./ui/button";

export function SiteFooter() {
  const t = useTranslations("components");

  return (
    <footer className="container flex flex-col items-center justify-between gap-4 py-6 animate-in fade-in duration-medium md:h-24 md:flex-row">
      <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
        {t.rich("footer", {
          author: (chunks) => (
            <a
              className="text-sm text-primary inline-block after:content-[''] after:w-0 after:h-[1px] after:block after:bg-current after:transition-all hover:after:w-full"
              href="https://github.com/fellipeutaka"
              target="_blank"
              rel="noreferrer"
            >
              {chunks}
            </a>
          ),
          github: (chunks) => (
            <a
              className="text-sm text-primary inline-block after:content-[''] after:w-0 after:h-[1px] after:block after:bg-current after:transition-all hover:after:w-full"
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              {chunks}
            </a>
          ),
        })}
      </p>
      <div className="flex gap-2">
        <Button asChild variant="ghost" size="icon">
          <a
            href="https://github.com/fellipeutaka"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.GitHub className="size-5" />
            <span className="sr-only">{t("navbar.links.github")}</span>
          </a>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <a
            href="https://twitter.com/fellipeutaka"
            target="_blank"
            rel="noreferrer"
          >
            <Icons.Twitter className="size-5" />
            <span className="sr-only">{t("navbar.links.twitter")}</span>
          </a>
        </Button>
      </div>
    </footer>
  );
}
