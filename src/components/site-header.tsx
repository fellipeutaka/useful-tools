import { cn } from "mizuhara/utils";

import { useTranslations } from "next-intl";
import { CommandMenu } from "./command-menu";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { SettingsDropdown } from "./settings-dropdown";
import { Button } from "./ui/button";

export function SiteHeader() {
  const t = useTranslations("components");

  return (
    <header
      className={cn(
        "w-full border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-40",
        "animate-in fade-in slide-in-from-top-full animate-duration-700",
      )}
    >
      <nav className="container sticky top-0 z-40 flex h-full items-center justify-between">
        <MainNav />
        <MobileNav />

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <Button asChild variant="ghost" size="icon">
            <a
              href="https://github.com/fellipeutaka"
              target="_blank"
              rel="noreferrer"
              aria-label={t("navbar.links.github")}
            >
              <Icons.GitHub className="size-4" />
            </a>
          </Button>
          <Button className="h-9 w-9" asChild variant="ghost" size="icon">
            <a
              href="https://twitter.com/fellipeutaka"
              target="_blank"
              rel="noreferrer"
              aria-label={t("navbar.links.twitter")}
            >
              <Icons.Twitter className="size-4" />
            </a>
          </Button>
          <SettingsDropdown />
        </div>
      </nav>
    </header>
  );
}
