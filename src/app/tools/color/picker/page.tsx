import { Metadata } from "next";

import { typography } from "~/styles/typography";

import { ColorPicker } from "./color-picker";

export const metadata: Metadata = {
  title: "Color picker",
};

export default function Page() {
  return (
    <main className="container grid place-content-center border-b py-8 text-center animate-in fade-in duration-really-slow">
      <h1 className={typography.h1}>Color picker</h1>
      <ColorPicker />
    </main>
  );
}
