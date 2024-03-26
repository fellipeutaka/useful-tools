"use client";

import { useCallback, useState } from "react";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

import { useTranslations } from "next-intl";
import { navItems } from "~/config/header";
import { useHotkeys } from "~/hooks/use-hotkeys";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Command } from "./ui/command";

export function CommandMenu() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();
  const t = useTranslations();

  useHotkeys([
    ["ctrl+K", () => setIsOpen((open) => !open)],
    ["meta+K", () => setIsOpen((open) => !open)],
  ]);

  const runCommand = useCallback(
    (command: () => void) => () => {
      setIsOpen(false);
      command();
    },
    [],
  );

  return (
    <>
      <Button
        variant="outline"
        className="h-9 w-full justify-between text-muted-foreground text-sm lg:w-64 md:w-40 sm:pr-4"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center gap-2">
          <Icons.Search className="size-4" />
          <span>{t("components.navbar.search")}</span>
        </div>
        <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-medium font-mono text-[10px] sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <Command.Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Command.Input
          placeholder={t("components.navbar.search-placeholder")}
        />
        <Command.List>
          <Command.Empty>
            {t("components.navbar.command.not-found")}
          </Command.Empty>
          <Command.Group heading="Links">
            {navItems.mainNav
              .filter((item) => !item.external)
              .map((item) => (
                <Command.Item
                  key={item.href}
                  value={t(`components.navbar.main.${item.id}`)}
                  onSelect={runCommand(() => router.push(item.href))}
                  className="capitalize"
                >
                  <Icons.File className="mr-2 size-4" />
                  {t(`components.navbar.main.${item.id}`)}
                </Command.Item>
              ))}
          </Command.Group>
          <Command.Separator />
          {navItems.sidebarNav.map((group) => (
            <Command.Group
              key={group.title}
              heading={t(`components.navbar.command.${group.id}`)}
            >
              {group.items.map((item) => (
                <Command.Item
                  key={item.id}
                  value={t(`pages.tools.${item.id}.title`)}
                  onSelect={runCommand(() => router.push(item.href))}
                >
                  <div className="mr-2 flex size-4 items-center justify-center">
                    <Icons.Circle className="size-3" />
                  </div>
                  {t(`pages.tools.${item.id}.title`)}
                </Command.Item>
              ))}
            </Command.Group>
          ))}
          <Command.Separator />
          <Command.Group heading={t("components.navbar.command.theme")}>
            <Command.Item onSelect={runCommand(() => setTheme("light"))}>
              <Icons.Sun className="mr-2 size-4" />
              <span>{t("components.navbar.command.light")}</span>
            </Command.Item>
            <Command.Item onSelect={runCommand(() => setTheme("dark"))}>
              <Icons.Moon className="mr-2 size-4" />
              <span>{t("components.navbar.command.dark")}</span>
            </Command.Item>
            <Command.Item onSelect={runCommand(() => setTheme("system"))}>
              <Icons.Laptop className="mr-2 size-4" />
              <span>{t("components.navbar.command.system")}</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}
