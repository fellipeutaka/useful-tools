"use client";

import { useEffect, useMemo, useState } from "react";

import { Button } from "~/components/ui/button";

export default function Stopwatch() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setCount((state) => state + 10);
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }
  }, [active, count]);

  function handleClearCount() {
    setCount(0);
    setActive(false);
  }

  function handleToggleActive() {
    setActive((state) => !state);
  }

  useEffect(() => {
    function keyboardListener(e: KeyboardEvent) {
      const keyPressed = e.code;
      const keys = {
        Space: handleToggleActive,
        KeyC: handleClearCount,
      };
      if (keys[keyPressed as keyof typeof keys]) {
        keys[keyPressed as keyof typeof keys]();
      }
    }

    document.addEventListener("keydown", keyboardListener);

    return () => {
      document.removeEventListener("keydown", keyboardListener);
    };
  }, []);

  const minutes = useMemo(
    () => String(Math.floor(count / 60000)).padStart(2, "0"),
    [count],
  );
  const seconds = useMemo(
    () => String(Math.floor(count / 1000)).padStart(2, "0"),
    [count],
  );
  const milliseconds = useMemo(
    () => String(count % 1000).padStart(2, "0"),
    [count],
  );

  return (
    <section>
      <span>
        {minutes}:{seconds}:{milliseconds}
      </span>
      <Button onClick={handleToggleActive}>{active ? "Stop" : "Start"}</Button>
      <Button onClick={handleClearCount}>Clear</Button>
    </section>
  );
}
