import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import type { GenerateMetadata, PageParams } from "~/@types/metadata";
import { Heading } from "~/components/ui/heading";
import { Text } from "~/components/ui/text";
import type { Currency } from "~/config/currency";
import { env } from "~/lib/env";
import { getStaticParams } from "~/lib/i18n";
import { CurrencyConverter } from "./currency-converter";

export function generateStaticParams() {
  return getStaticParams();
}

export const generateMetadata: GenerateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: t("pages.tools.currency.title"),
  };
};

export type CurrencyResponse = {
  success: boolean;
  timestamp: number;
  base: "EUR";
  date: string;
  rates: Record<Currency, number>;
};

async function getCurrencies(): Promise<CurrencyResponse> {
  const endpoint = new URL("http://api.exchangeratesapi.io/v1/latest");
  endpoint.searchParams.set("access_key", env.CURRENCY_API_KEY);

  return await fetch(endpoint).then((res) => res.json());
}

export const revalidate = 10800; // 3 hours

export default async function Page({ params }: PageParams) {
  unstable_setRequestLocale(params.locale);
  const [t, data] = await Promise.all([getTranslations(), getCurrencies()]);

  return (
    <main className="container">
      <Heading>{t("pages.tools.currency.title")}</Heading>
      <p className="mt-2 text-muted-foreground">
        {new Date(data.timestamp * 1000).toLocaleString()}
      </p>
      <Text
        as="a"
        variant="link"
        className="max-w-max text-muted-foreground"
        href="https://exchangeratesapi.io"
      >
        {t("pages.tools.currency.source")}
      </Text>
      <CurrencyConverter data={data} />
    </main>
  );
}
