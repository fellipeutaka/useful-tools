"use client";

import { useState } from "react";

import { Big } from "big.js";

import {
  ComboboxContent,
  ComboboxList,
  ComboboxRoot,
  ComboboxTrigger,
} from "~/components/ui/combobox";

import { useTranslations } from "next-intl";
import { TextField } from "~/components/ui/textfield";
import { type Currency, currencies } from "~/config/currency";
import type { CurrencyResponse } from "./page";

type CurrencyState = {
  value: string;
  currency: Currency | (NonNullable<unknown> & string);
};

type CurrencyConverterProps = {
  data: CurrencyResponse;
};

type CalculateCurrencyProps = {
  value: string;
  rates: Record<Currency, number>;
  fromCurrency: Currency;
  toCurrency: Currency;
};

function formatCurrency(value: string, currency: string) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
  }).format(Number(value));
}

function calculateCurrency({
  value,
  rates,
  fromCurrency,
  toCurrency,
}: CalculateCurrencyProps) {
  return Number.isNaN(Number(value)) || value.trim() === ""
    ? ""
    : Big(value).div(rates[fromCurrency]).mul(rates[toCurrency]).toString();
}

export function CurrencyConverter({ data }: CurrencyConverterProps) {
  const t = useTranslations("pages.tools.currency");
  const [fromState, setFromState] = useState<CurrencyState>({
    value: "1",
    currency: "EUR",
  });
  const [toState, setToState] = useState<CurrencyState>({
    value: "1",
    currency: "EUR",
  });

  function onInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    input: "from" | "to",
  ) {
    if (input === "from") {
      const value = Number.isNaN(e.target.valueAsNumber) ? "" : e.target.value;
      setFromState((state) => ({ ...state, value }));
      setToState((state) => ({
        ...state,
        value: calculateCurrency({
          value,
          rates: data.rates,
          fromCurrency: fromState.currency as Currency,
          toCurrency: toState.currency as Currency,
        }),
      }));
    }

    if (input === "to") {
      const value = Number.isNaN(e.target.valueAsNumber) ? "" : e.target.value;
      setToState((state) => ({ ...state, value }));
      setFromState((state) => ({
        ...state,
        value: calculateCurrency({
          value,
          rates: data.rates,
          fromCurrency: toState.currency as Currency,
          toCurrency: fromState.currency as Currency,
        }),
      }));
    }
  }

  function onComboboxChange(currency: string, input: "from" | "to") {
    const newCurrency = currency.toUpperCase();

    if (input === "from") {
      setFromState((state) => ({
        ...state,
        currency: newCurrency,
      }));

      setToState((state) => ({
        ...state,
        value: calculateCurrency({
          value: state.value,
          rates: data.rates,
          fromCurrency: newCurrency as Currency,
          toCurrency: state.currency as Currency,
        }),
      }));
    }

    if (input === "to") {
      setToState((state) => ({
        ...state,
        currency: newCurrency,
      }));

      setFromState((state) => ({
        ...state,
        value: calculateCurrency({
          value: state.value,
          rates: data.rates,
          fromCurrency: state.currency as Currency,
          toCurrency: newCurrency as Currency,
        }),
      }));
    }
  }

  return (
    <section className="mt-8">
      <div suppressHydrationWarning className="text-muted-foreground">
        {t.rich("result", {
          from: () => formatCurrency(fromState.value, fromState.currency),
          to: () => (
            <p
              suppressHydrationWarning
              className="font-semibold text-foreground text-xl"
            >
              {formatCurrency(toState.value, toState.currency)}
            </p>
          ),
        })}
      </div>
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-2">
          <TextField>
            <TextField.Input
              value={fromState.value}
              onChange={(e) => onInputChange(e, "from")}
              type="number"
            />
          </TextField>
          <ComboboxRoot>
            <ComboboxTrigger
              className="w-48 justify-between"
              items={currencies}
              value={fromState.currency}
              placeholder={t("placeholder")}
            />
            <ComboboxContent
              placeholder={t("placeholder")}
              notFound={t("not-found")}
              className="w-48"
            >
              <ComboboxList
                items={currencies}
                value={fromState.currency}
                onSelect={(value) => onComboboxChange(value, "from")}
                className="max-h-[50dvh]"
              />
            </ComboboxContent>
          </ComboboxRoot>
        </div>

        <div className="flex items-center gap-2">
          <TextField>
            <TextField.Input
              value={toState.value}
              onChange={(e) => onInputChange(e, "to")}
              type="number"
            />
          </TextField>

          <ComboboxRoot>
            <ComboboxTrigger
              className="w-48 justify-between"
              items={currencies}
              value={toState.currency}
              placeholder={t("placeholder")}
            />
            <ComboboxContent
              placeholder={t("placeholder")}
              notFound={t("not-found")}
              className="w-48"
            >
              <ComboboxList
                items={currencies}
                value={toState.currency}
                onSelect={(value) => onComboboxChange(value, "to")}
                className="max-h-[50dvh]"
              />
            </ComboboxContent>
          </ComboboxRoot>
        </div>
      </div>
    </section>
  );
}
