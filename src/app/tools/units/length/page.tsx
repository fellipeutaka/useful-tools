import type { Metadata } from "next";

import { Length } from "./length";

export const metadata: Metadata = {
  title: "Length",
};

export default function Page() {
  return (
    <main>
      <h1>Length</h1>
      <Length />
    </main>
  );
}
