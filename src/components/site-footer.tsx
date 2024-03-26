import { useTranslations } from "next-intl";
import { siteConfig } from "~/config/site";
import { Icons } from "./icons";
import { Button } from "./ui/button";

export function SiteFooter() {
  const t = useTranslations("components");

  return (
    <footer className="fade-in container flex animate-in flex-col items-center justify-between gap-4 py-6 duration-medium md:h-24 md:flex-row">
      <p className="text-center text-muted-foreground text-sm leading-loose md:text-left">
        {t.rich("footer", {
          author: (chunks) => (
            <a
              className="inline-block text-primary text-sm after:block after:h-[1px] after:w-0 hover:after:w-full after:bg-current after:transition-all after:content-['']"
              href="https://github.com/fellipeutaka"
              target="_blank"
              rel="noreferrer"
            >
              {chunks}
            </a>
          ),
          github: (chunks) => (
            <a
              className="inline-block text-primary text-sm after:block after:h-[1px] after:w-0 hover:after:w-full after:bg-current after:transition-all after:content-['']"
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
