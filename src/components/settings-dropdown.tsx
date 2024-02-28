"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "~/lib/i18n/navigation";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { DropdownMenu } from "./ui/dropdown-menu";

export function SettingsDropdown() {
  const { setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("components");

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button className="group" variant="ghost" size="icon">
          <Icons.Config className="size-4 group-hover:rotate-90 group-data-[state='open']:rotate-90 transition-transform" />
          <span className="sr-only">{t("settings.config")}</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.Label>{t("navbar.command.theme")}</DropdownMenu.Label>
          <DropdownMenu.Item onSelect={() => setTheme("light")}>
            <Icons.Sun className="mr-2 size-4" />
            <span>{t("navbar.command.light")}</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => setTheme("dark")}>
            <Icons.Moon className="mr-2 size-4" />
            <span>{t("navbar.command.dark")}</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => setTheme("system")}>
            <Icons.Laptop className="mr-2 size-4" />
            <span>{t("navbar.command.system")}</span>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Label>{t("settings.language")}</DropdownMenu.Label>
          <DropdownMenu.Item
            onSelect={() => router.push(pathname, { locale: "en" })}
          >
            <Icons.UnitedStates className="mr-2 size-4" />
            <span>English</span>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={() => router.push(pathname, { locale: "pt" })}
          >
            <Icons.Brazil className="mr-2 size-4" />
            <span>Português</span>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
