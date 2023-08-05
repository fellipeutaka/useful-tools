"use client";

import { useState } from "react";

import { Big } from "big.js";

import {
  Combobox,
  ComboboxContent,
  ComboboxList,
  ComboboxTrigger,
} from "~/components/ui/combobox";
import { Input } from "~/components/ui/input";
import { Currency, currencies } from "~/constants/currency";
import { useScopedI18n } from "~/lib/next-international/client";

import { CurrencyResponse } from "./page";

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
    currency: currency,
  }).format(Number(value));
}

function calculateCurrency({
  value,
  rates,
  fromCurrency,
  toCurrency,
}: CalculateCurrencyProps) {
  return isNaN(Number(value)) || value.trim() === ""
    ? ""
    : Big(value).div(rates[fromCurrency]).mul(rates[toCurrency]).toString();
}

export function CurrencyConverter({ data }: CurrencyConverterProps) {
  const t = useScopedI18n("pages.tools.currency");
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
      const value = isNaN(e.target.valueAsNumber) ? "" : e.target.value;
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
      const value = isNaN(e.target.valueAsNumber) ? "" : e.target.value;
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
      <p className="text-muted-foreground">
        {t("result", {
          from: formatCurrency(fromState.value, fromState.currency),
          to: (
            <p className="text-xl font-semibold text-foreground">
              {formatCurrency(toState.value, toState.currency)}
            </p>
          ),
        })}
      </p>
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-2">
          <Input
            value={fromState.value}
            onChange={(e) => onInputChange(e, "from")}
            type="number"
          />
          <Combobox>
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
          </Combobox>
        </div>

        <div className="flex items-center gap-2">
          <Input
            value={toState.value}
            onChange={(e) => onInputChange(e, "to")}
            type="number"
          />
          <Combobox>
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
          </Combobox>
        </div>
      </div>
    </section>
  );
}
