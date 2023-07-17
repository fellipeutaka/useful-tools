import { Metadata } from "next";

import { typography } from "~/styles/typography";

import { ColorPicker } from "./color-picker";

export const metadata: Metadata = {
  title: "Color picker",
};

export default function Page() {
  return (
    <main className="container grid h-full place-content-center">
      <h1 className={typography.h1}>Color picker</h1>
      <ColorPicker />
    </main>
  );
}
