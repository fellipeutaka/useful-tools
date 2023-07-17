"use client";

import { useState } from "react";

import convert from "convert";

import { LengthUnits, lengthUnits } from "~/constants/length-units";
import { capitalizeFirstLetter } from "~/utils/capitalizeFirstLetter";

type CalculateUnities = {
  from?: LengthUnits;
  to?: LengthUnits;
};

export default function Clock() {
  const [fromUnity, setFromUnity] = useState<LengthUnits>("meter");
  const [toUnity, setToUnity] = useState<LengthUnits>("centimeter");
  const [fromValue, setFromValue] = useState("1");
  const [toValue, setToValue] = useState("100");

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

  function handleChangeFromUnity(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value as LengthUnits;
    setFromUnity(value);
    calculate("to", fromValue, { from: value });
  }

  function handleChangeToUnity(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value as LengthUnits;
    setToUnity(value);
    calculate("to", fromValue, { to: value });
  }

  return (
    <main>
      <h1>Length</h1>
      <section>
        <div>
          <input value={fromValue} onChange={handleChangeFromValue} />
          <select value={fromUnity} onChange={handleChangeFromUnity}>
            {lengthUnits.map((lengthUnit) => (
              <option key={lengthUnit} value={lengthUnit}>
                {capitalizeFirstLetter(lengthUnit)}
              </option>
            ))}
          </select>
        </div>
        <span> = </span>
        <div>
          <input value={toValue} onChange={handleChangeToValue} />
          <select value={toUnity} onChange={handleChangeToUnity}>
            {lengthUnits.map((lengthUnit) => (
              <option key={lengthUnit} value={lengthUnit}>
                {capitalizeFirstLetter(lengthUnit)}
              </option>
            ))}
          </select>
        </div>
      </section>
    </main>
  );
}
