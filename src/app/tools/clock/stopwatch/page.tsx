import type { Metadata } from "next";

import { typography } from "~/styles/typography";

import { Stopwatch } from "./stopwatch";

export const metadata: Metadata = {
  title: "Stopwatch",
};

export default function Page() {
  return (
    <main className="container grid h-full place-content-center">
      <h1 className={typography.h1}>Stopwatch</h1>
      <Stopwatch />
    </main>
  );
}
