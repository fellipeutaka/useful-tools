import { Balancer } from "react-wrap-balancer";

import { Github } from "lucide-react";
import Link from "next/link";
import { cnBase } from "tailwind-variants";

import { Features } from "~/components/sections/features";
import { OpenSource } from "~/components/sections/open-source";
import { Button } from "~/components/ui/button";
import { REPOSITORY_URL } from "~/constants/repository-info";
import { typography } from "~/styles/typography";

export default function Page() {
  return (
    <main className="container grid items-center animate-in fade-in slide-in-from-bottom-8 duration-really-slow">
      <section className="py-10 text-center md:py-12 lg:py-28 xl:py-36">
        <Balancer
          as="h1"
          className={cnBase(
            typography.h1,
            "text-3xl sm:text-5xl md:text-6xl lg:text-7xl",
          )}
        >
          A collection of the best{" "}
          <span className="bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">
            tools
          </span>
          . Just for you
        </Balancer>
        <Balancer
          as="h2"
          className="mx-auto mt-8 !block max-w-xl text-lg font-semibold tracking-tight text-muted-foreground sm:text-xl"
        >
          Useful Tools is a collection of free online tools. We have 100+ tools
          to help you in your daily life.
        </Balancer>
        <div className="mt-4 flex w-full items-center justify-center gap-4">
          <Button className="h-11 px-8" asChild>
            <Link href="/tools">Get started</Link>
          </Button>
          <Button className="h-11 px-8" variant="outline" asChild>
            <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              <span>Github</span>
            </a>
          </Button>
        </div>
      </section>
      <Features />
      <OpenSource />
    </main>
  );
}
