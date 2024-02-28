"use client";

import { useState } from "react";

import convert from "convert";

import { useTranslations } from "next-intl";
import { HeadingStyles } from "~/components/ui/heading";
import { Select, SelectContent, SelectItem } from "~/components/ui/select";
import { TextField } from "~/components/ui/textfield";
import { type LengthUnits, lengthUnits } from "~/config/length";

type CalculateUnities = {
  from?: LengthUnits;
  to?: LengthUnits;
};

export function Length() {
  const [fromUnity, setFromUnity] = useState<LengthUnits>("meter");
  const [toUnity, setToUnity] = useState<LengthUnits>("centimeter");
  const [fromValue, setFromValue] = useState("1");
  const [toValue, setToValue] = useState("100");
  const t = useTranslations("pages.tools.length");

  function calculate(
    state: "from" | "to",
    value: string,
    { from = fromUnity, to = toUnity }: CalculateUnities = {},
  ) {
    if (!value.trim()) {
      setFromValue(value);
      setToValue("");
    } else if (Number.isNaN(Number(value))) {
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
        <TextField>
          <TextField.Input value={fromValue} onChange={handleChangeFromValue} />
        </TextField>
        <Select value={fromUnity} onValueChange={handleChangeFromUnity}>
          <Select.Trigger placeholder="From" />
          <SelectContent>
            {lengthUnits.map((lengthUnit) => (
              <SelectItem key={lengthUnit} value={lengthUnit}>
                {t(lengthUnit)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <span className={HeadingStyles({ variant: "h3", className: "mx-auto" })}>
        =
      </span>
      <div className="space-y-4">
        <TextField>
          <TextField.Input value={toValue} onChange={handleChangeToValue} />
        </TextField>
        <Select value={toUnity} onValueChange={handleChangeToUnity}>
          <Select.Trigger placeholder="To" />
          <SelectContent>
            {lengthUnits.map((lengthUnit) => (
              <SelectItem key={lengthUnit} value={lengthUnit}>
                {t(lengthUnit)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
