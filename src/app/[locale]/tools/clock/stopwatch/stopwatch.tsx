"use client";

import { useMemo, useState } from "react";

import { Button } from "~/components/ui/button";
import { useHotkeys } from "~/hooks/use-hotkeys";
import { useInterval } from "~/hooks/use-interval";
import { useOnMount } from "~/hooks/use-on-mount";
import { useScopedI18n } from "~/lib/next-international/client";

export function Stopwatch() {
  const t = useScopedI18n("pages.tools.stopwatch");
  const [count, setCount] = useState(0);

  const interval = useInterval(() => setCount((state) => state + 10), 10);

  useOnMount(() => {
    if (interval.active) {
      interval.start();
    }

    return interval.stop;
  });

  function handleClearCount() {
    setCount(0);
    interval.stop();
  }

  useHotkeys([
    ["Space", interval.toggle],
    ["C", handleClearCount],
  ]);

  const minutes = useMemo(
    () => String(Math.floor(count / 60_000)).padStart(2, "0"),
    [count],
  );
  const seconds = useMemo(
    () => String(Math.floor(count / 1_000)).padStart(2, "0"),
    [count],
  );
  const milliseconds = useMemo(
    () => String(count % 1_000).padStart(2, "0"),
    [count],
  );

  return (
    <section className="mt-8">
      <div className="mx-auto grid aspect-square h-48 w-48 place-content-center rounded-full border p-16">
        <b>
          {minutes}:{seconds}:{milliseconds}
        </b>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <Button variant="outline" onClick={interval.toggle}>
          {interval.active ? t("stop") : t("start")}
        </Button>
        <Button variant="destructive" onClick={handleClearCount}>
          {t("clear")}
        </Button>
      </div>
    </section>
  );
}
