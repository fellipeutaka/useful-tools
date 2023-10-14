"use client";

import { useState } from "react";

import convert from "convert";

import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { type LengthUnits, lengthUnits } from "~/constants/length-units";
import { useScopedI18n } from "~/lib/next-international/client";
import { typography } from "~/styles/typography";

type CalculateUnities = {
  from?: LengthUnits;
  to?: LengthUnits;
};

export function Length() {
  const [fromUnity, setFromUnity] = useState<LengthUnits>("meter");
  const [toUnity, setToUnity] = useState<LengthUnits>("centimeter");
  const [fromValue, setFromValue] = useState("1");
  const [toValue, setToValue] = useState("100");
  const t = useScopedI18n("pages.tools.length");

  function calculate(
    state: "from" | "to",
    value: string,
    { from = fromUnity, to = toUnity }: CalculateUnities = {},
  ) {
    if (!value.trim()) {
      setFromValue(value);
      setToValue("");
    } else if (isNaN(Number(value))) {
      setFromValue(value);
      setToValue("");
    } else {
      const result = convert(Number(value), from).to(to);
      setFromValue(state === "from" ? String(result) : value);
      setToValue(state === "to" ? String(result) : value);
    }
  }

  function handleChangeFromValue(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    calculate("to", value);
  }

  function handleChangeToValue(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    calculate("from", value);
  }

  function handleChangeFromUnity(value: string) {
    setFromUnity(value as LengthUnits);
    calculate("to", fromValue, { from: value as LengthUnits });
  }

  function handleChangeToUnity(value: string) {
    setToUnity(value as LengthUnits);
    calculate("to", fromValue, { to: value as LengthUnits });
  }

  return (
    <section className="mt-6 grid grid-cols-3 items-center">
      <div className="space-y-4">
        <Input value={fromValue} onChange={handleChangeFromValue} />
        <Select value={fromUnity} onValueChange={handleChangeFromUnity}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {lengthUnits.map((lengthUnit) => (
              <SelectItem key={lengthUnit} value={lengthUnit}>
                {t(lengthUnit)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <span className={typography.h3}> = </span>
      <div className="space-y-4">
        <Input value={toValue} onChange={handleChangeToValue} />
        <Select value={toUnity} onValueChange={handleChangeToUnity}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {lengthUnits.map((lengthUnit) => (
              <SelectItem key={lengthUnit} value={lengthUnit}>
                {lengthUnit}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
