import type { Metadata } from "next";

import { typography } from "~/styles/typography";

import { JSONFormatter } from "./json-formatter";

export const metadata: Metadata = {
  title: "JSON Formatter",
};

export default function Page() {
  return (
    <main className="container">
      <h1 className={typography.h1}>JSON Formatter</h1>
      <JSONFormatter />
    </main>
  );
}
