import { Clock, Code, DollarSign, Files, QrCode, Text } from "lucide-react";
import { cnBase } from "tailwind-variants";

import { typography } from "~/styles/typography";

export function Features() {
  return (
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
                Images Videos Audios Documents and more.
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
  );
}
