"use client";

import { useMemo, useState } from "react";

import { Button } from "~/components/ui/button";
import { useHotkeys } from "~/hooks/useHotkeys";
import { useInterval } from "~/hooks/useInterval";
import { useOnMount } from "~/hooks/useOnMount";

export function Stopwatch() {
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
          {interval.active ? "Stop" : "Start"}
        </Button>
        <Button variant="destructive" onClick={handleClearCount}>
          Clear
        </Button>
      </div>
    </section>
  );
}
