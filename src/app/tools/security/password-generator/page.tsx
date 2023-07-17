import type { Metadata } from "next";

import { PasswordGenerator } from "./password-generator";

export const metadata: Metadata = {
  title: "Password Generator",
};

export default function Page() {
  return (
    <main>
      <h1>Password Generator</h1>
      <PasswordGenerator />
    </main>
  );
}
