"use client";

import { useState } from "react";

import { useInterval } from "~/hooks/use-interval";
import { useOnMount } from "~/hooks/use-on-mount";

export function Clock() {
  const [date, setDate] = useState(new Date());

  const interval = useInterval(
    () => setDate((state) => new Date(state.getTime() + 1000)),
    1000,
  );

  useOnMount(() => {
    interval.start();

    return interval.stop;
  });

  return (
    <section className="mt-2">
      <h2 suppressHydrationWarning>{date.toLocaleTimeString()}</h2>
    </section>
  );
}
