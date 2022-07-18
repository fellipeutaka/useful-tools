import Layout from "@useful-tools/components/Layout";
import { styled } from "@useful-tools/stitches";
import { useEffect, useMemo, useState } from "react";

const seo = {
  title: "Stopwatch | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

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
    [count]
  );
  const seconds = useMemo(
    () => String(Math.floor(count / 1000)).padStart(2, "0"),
    [count]
  );
  const miliseconds = useMemo(
    () => String(count % 1000).padStart(2, "0"),
    [count]
  );

  return (
    <Layout seo={seo}>
      <Container>
        <h1>Stopwatch</h1>
        <span>
          {minutes}:{seconds}:{miliseconds}
        </span>
        <button type="button" onClick={handleToggleActive}>
          {active ? "Stop" : "Start"}
        </button>
        <button type="button" onClick={handleClearCount}>
          Clear
        </button>
      </Container>
    </Layout>
  );
}
