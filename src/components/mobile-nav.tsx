"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Fragment, useState } from "react";
import { navItems } from "~/config/header";
import { siteConfig } from "~/config/site";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Sheet } from "./ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Sheet.Trigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.Menu className="size-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </Sheet.Trigger>
      <Sheet.Content side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.Logo className="mr-2 size-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {navItems.mainNav?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                ),
            )}
          </div>
          <div className="flex flex-col space-y-2">
            {navItems.sidebarNav.map((item) => (
              <div key={item.id} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <Fragment key={item.href}>
                      <MobileLink
                        href={item.href}
                        onOpenChange={setOpen}
                        className="text-muted-foreground"
                      >
                        {item.title}
                      </MobileLink>
                    </Fragment>
                  ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </Sheet.Content>
    </Sheet>
  );
}

interface MobileLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  onOpenChange?: (open: boolean) => void;
}

function MobileLink({ href, onOpenChange, ...props }: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      {...props}
    />
  );
}
