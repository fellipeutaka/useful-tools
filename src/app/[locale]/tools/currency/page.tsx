import ky from "ky";
import { tv } from "tailwind-variants";

import { GenerateMetadata } from "~/@types/metadata";
import { Currency } from "~/constants/currency";
import { env } from "~/constants/env.mjs";
import { getScopedI18n } from "~/lib/next-international/server";
import { typography } from "~/styles/typography";

import { CurrencyConverter } from "./currency-converter";

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getScopedI18n("pages.tools.currency");

  return {
    title: t("title"),
    description: "The best and useful just for you",
    keywords: "tools, useful",
  };
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
  const t = await getScopedI18n("pages.tools.currency");

  return (
    <main className="container">
      <h1 className={typography.h1}>{t("title")}</h1>
      <p className="mt-2 text-muted-foreground">
        {new Date(data.timestamp * 1000).toLocaleString()}
      </p>
      <a
        className={tv({
          base: [typography.link, "text-muted-foreground"],
        })()}
        href="https://exchangeratesapi.io/"
      >
        {t("source")}
      </a>
      <CurrencyConverter data={data} />
    </main>
  );
}
