import { Balancer } from "react-wrap-balancer";

import { Github } from "lucide-react";
import { Clock, Code, DollarSign, Files, QrCode, Text } from "lucide-react";
import Link from "next/link";
import { cnBase } from "tailwind-variants";

import { Button } from "~/components/ui/button";
import { REPOSITORY_URL } from "~/constants/repository-info";
import { typography } from "~/styles/typography";
import { getGitHubStars } from "~/utils/get-github-stars";

export const revalidate = 60; // 1 minute

export default async function Page() {
  const stars = await getGitHubStars();

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

      <section
        id="features"
        className="space-y-6 py-8 text-center md:py-12 lg:py-24"
      >
        <h2
          className={cnBase(
            typography.h2,
            "text-3xl leading-[1.1] sm:text-3xl md:text-6xl",
          )}
        >
          Features
        </h2>
        <p className="mx-auto max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          This project has a lot of features that will help you in your daily
          life.
        </p>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-left">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <QrCode className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Cryptography</h3>
                <p className="text-sm text-muted-foreground">
                  Binary, Morse code, Hexadecimal, Base64 and more.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-left">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Text className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Text</h3>
                <p className="text-sm text-muted-foreground">
                  Convert case, remove accents, remove duplicates and more.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-left">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Clock className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Clock</h3>
                <p className="text-sm text-muted-foreground">
                  Alarm, Stopwatch, Timer and more.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-left">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <DollarSign className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Currency</h3>
                <p className="text-sm text-muted-foreground">
                  Convert between currencies. More than 100 currencies.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-left">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Files className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Files</h3>
                <p className="text-sm text-muted-foreground">
                  Images, Videos, Audios, Documents and more.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2 text-left">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Code className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Developer tools</h3>
                <p className="text-sm text-muted-foreground">
                  JSON formatter, CSS minifier, HTML minifier and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          {stars && (
            <div className="flex items-center">
              <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-muted border-y-transparent" />
              <div className="flex h-10 items-center rounded-md border border-muted bg-muted px-4 font-medium">
                {stars} stars on GitHub
              </div>
            </div>
          )}
        </a>
      </section>
    </main>
  );
}
