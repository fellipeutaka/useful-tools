import { ChangeEvent, useState } from "react";

import convert from "convert";

import Layout from "@useful-tools/components/Layout";
import { styled } from "@useful-tools/stitches";
import { lengthUnits, LengthUnits } from "@useful-tools/types/Units";
import { capitalizeFirstLetter } from "@useful-tools/utils/capitalizeFirstLetter";

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

type calculateUnities = {
  from?: LengthUnits;
  to?: LengthUnits;
};

const seo = {
  title: "Length | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function Length() {
  const [fromUnity, setFromUnity] = useState<LengthUnits>("meter");
  const [toUnity, setToUnity] = useState<LengthUnits>("centimeter");
  const [fromValue, setFromValue] = useState("1");
  const [toValue, setToValue] = useState("100");

  function calculate(
    state: "from" | "to",
    value: string,
    { from = fromUnity, to = toUnity }: calculateUnities = {}
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

  function handleChangeFromValue(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    calculate("to", value);
  }

  function handleChangeToValue(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    calculate("from", value);
  }

  function handleChangeFromUnity(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value as LengthUnits;
    setFromUnity(value);
    calculate("to", fromValue, { from: value });
  }

  function handleChangeToUnity(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value as LengthUnits;
    setToUnity(value);
    calculate("to", fromValue, { to: value });
  }

  return (
    <Layout seo={seo}>
      <Container>
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
      </Container>
    </Layout>
  );
}
