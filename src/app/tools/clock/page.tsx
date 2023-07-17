import { Metadata } from "next";

import { typography } from "~/styles/typography";

import { Clock } from "./clock";

export const metadata: Metadata = {
  title: "Clock",
};

export default function Page() {
  return (
    <main className="container grid h-full place-content-center text-center">
      <h1 className={typography.h1}>Clock</h1>
      <Clock />
    </main>
  );
}
