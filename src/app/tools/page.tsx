import type { Metadata } from "next";

import { typography } from "~/styles/typography";

export const metadata: Metadata = {
  title: "Tools",
};

export default function Tools() {
  return (
    <main className="container h-full">
      <h1 className={typography.h1}>Tools</h1>
    </main>
  );
}
