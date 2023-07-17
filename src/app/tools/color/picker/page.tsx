"use client";

import { useState } from "react";

import { Input } from "~/components/ui/input";
import { useClipboard } from "~/hooks/useClipboard";
import { typography } from "~/styles/typography";

import { convertHexToHSL, convertHexToRGB } from "../utils/convert";

export default function Page() {
  const [color, setColor] = useState("#000000");
  const { copy } = useClipboard();

  const colorInRGB = convertHexToRGB(color);
  const colorInHSL = convertHexToHSL(color);

  return (
    <main className="container grid place-content-center border-b py-8 text-center animate-in fade-in duration-really-slow">
      <h1 className={typography.h1}>Color picker</h1>
      <div className="mt-12 flex flex-col">
        <button onClick={() => copy(color)} className={typography.h3}>
          Hex: {color}
        </button>
        <button onClick={() => copy(colorInRGB)} className={typography.h3}>
          RGB: {colorInRGB}
        </button>
        <button onClick={() => copy(colorInHSL)} className={typography.h3}>
          HSL: {colorInHSL}
        </button>
      </div>
      <Input
        className="mx-auto mt-4 h-16 w-16 rounded-md p-0 ring-1 ring-border ring-offset-2 ring-offset-background transition-colors duration-500"
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </main>
  );
}
