import type { Metadata } from "next";
import { cnBase } from "tailwind-variants";

import { typography } from "~/styles/typography";

import { QRCode } from "./qr-code";

export const metadata: Metadata = {
  title: "QR Code",
};

export default function Page() {
  return (
    <main className="container grid h-full place-content-center">
      <h1 className={cnBase(typography.h1, "text-center")}>QR Code</h1>
      <QRCode />
    </main>
  );
}
