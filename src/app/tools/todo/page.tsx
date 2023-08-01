import type { Metadata } from "next";

import { typography } from "~/styles/typography";

import { Todo } from "./todo";

export const metadata: Metadata = {
  title: "Todo",
};

export default function Page() {
  return (
    <main className="container">
      <h1 className={typography.h1}>Todo</h1>
      <Todo />
    </main>
  );
}
