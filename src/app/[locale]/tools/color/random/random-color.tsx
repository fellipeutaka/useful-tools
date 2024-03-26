"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import { useHotkeys } from "~/hooks/use-hotkeys";
import {
  hexToHsva,
  hsvaToHexString,
  hsvaToHslaString,
  hsvaToRgbString,
} from "~/utils";

export function RandomColor() {
  const t = useTranslations("pages.tools.random-color");
  const [color, setColor] = useState({
    h: 0,
    s: 0,
    v: 0,
    a: 1,
  });

  function handleGenerateNewColor() {
    setColor(hexToHsva("#".concat(Math.random().toString(16).slice(-6))));
  }

  useHotkeys([["Space", handleGenerateNewColor]]);

  const colorInHex = hsvaToHexString(color);
  const _colorInRGB = hsvaToRgbString(color);
  const _colorInHSL = hsvaToHslaString(color);

  return (
    <section className="grid place-content-center">
      <button
        type="button"
        className="mx-auto my-4 block size-16 rounded-md ring-1 ring-border ring-offset-2 ring-offset-background transition-colors duration-500"
        aria-hidden
        style={{ backgroundColor: colorInHex }}
        onClick={handleGenerateNewColor}
      />
      <Button onClick={handleGenerateNewColor}>{t("generate")}</Button>
    </section>
  );
}
