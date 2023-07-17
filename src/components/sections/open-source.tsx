import { Suspense } from "react";

import { Github, Loader } from "lucide-react";
import { cnBase } from "tailwind-variants";

import { REPOSITORY_URL } from "~/constants/repository-info";
import { typography } from "~/styles/typography";

import { Stars } from "./components/stars";

export function OpenSource() {
  return (
    <section
      id="open-source"
      className="space-y-4 py-8 text-center md:py-12 lg:py-24"
    >
      <h2
        className={cnBase(
          typography.h2,
          "text-3xl leading-[1.1] sm:text-3xl md:text-6xl",
        )}
      >
        Open Source
      </h2>
      <p className="mx-auto max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        Useful Tools is an open source project and it supports open source
        projects.
        <br />
        The code is available on{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
          href={REPOSITORY_URL}
        >
          GitHub
        </a>
        .
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href={REPOSITORY_URL}
        className="mx-auto flex w-fit transition-opacity hover:opacity-80"
      >
        <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-muted bg-muted">
          <Github />
        </div>
        <div className="flex items-center">
          <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent" />
          <Suspense
            fallback={
              <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                <Loader className="mr-1 h-4 w-4 animate-spin" /> stars on GitHub
              </div>
            }
          >
            <Stars />
          </Suspense>
        </div>
      </a>
    </section>
  );
}
