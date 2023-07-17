import type { Metadata } from "next";

import { typography } from "~/styles/typography";

import { PasswordGenerator } from "./password-generator";

export const metadata: Metadata = {
  title: "Password Generator",
};

export default function Page() {
  return (
    <main className="container grid h-full place-content-center">
      <h1 className={typography.h1}>Password Generator</h1>
      <PasswordGenerator />
    </main>
  );
}
