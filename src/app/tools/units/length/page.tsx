import type { Metadata } from "next";

import { typography } from "~/styles/typography";

import { Length } from "./length";

export const metadata: Metadata = {
  title: "Length",
};

export default function Page() {
  return (
    <main className="container grid h-full place-content-center">
      <h1 className={typography.h1}>Length</h1>
      <Length />
    </main>
  );
}
