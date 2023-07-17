import type { Metadata } from "next";

import { typography } from "~/styles/typography";

export const metadata: Metadata = {
  title: "Tools",
};

export default function Tools() {
  return (
    <div className="border-b py-8">
      <main className="container min-h-screen animate-in fade-in duration-really-slow">
        <h1 className={typography.h1}>Tools</h1>
      </main>
    </div>
  );
}
