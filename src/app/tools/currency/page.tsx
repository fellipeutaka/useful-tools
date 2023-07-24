import ky from "ky";
import type { Metadata } from "next";
import { tv } from "tailwind-variants";

import { Currency } from "~/constants/currency";
import { env } from "~/constants/env.mjs";
import { typography } from "~/styles/typography";

import { CurrencyConverter } from "./currency-converter";

export const metadata: Metadata = {
  title: "Currency",
};

export type CurrencyResponse = {
  success: boolean;
  timestamp: number;
  base: "EUR";
  date: string;
  rates: Record<Currency, number>;
};

async function getCurrencies() {
  return await ky("http://api.exchangeratesapi.io/v1/latest", {
    searchParams: {
      access_key: env.CURRENCY_API_KEY,
    },
  }).json<CurrencyResponse>();
}

export const revalidate = 10800; // 3 hours

export default async function Page() {
  const data = await getCurrencies();

  return (
    <main className="container">
      <h1 className={typography.h1}>Currency</h1>
      <p className="mt-2 text-muted-foreground">
        {new Date(data.timestamp * 1000).toLocaleString()}
      </p>
      <a
        className={tv({
          base: [typography.link, "text-muted-foreground"],
        })()}
        href="https://exchangeratesapi.io/"
      >
        Source
      </a>
      <CurrencyConverter data={data} />
    </main>
  );
}
