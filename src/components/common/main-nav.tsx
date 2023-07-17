"use client";

import Link from "next/link";

import { REPOSITORY_URL } from "~/constants/repository-info";

import { useToast } from "../ui/toast/use-toast";

export function MainNav() {
  const { toast } = useToast();

  return (
    <div className="flex items-center space-x-6 text-sm font-medium text-foreground/60">
      <Link
        className="transition-colors hover:text-foreground/80"
        href="/tools"
      >
        Tools
      </Link>
      <button
        onClick={() =>
          toast({
            title: "It's free! 😜",
            description: "This project is open source and free to use. 🥳",
          })
        }
        className="transition-colors hover:text-foreground/80"
      >
        Pricing
      </button>
      <Link
        className="transition-colors hover:text-foreground/80"
        href="/about"
      >
        About
      </Link>
      <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  );
}
