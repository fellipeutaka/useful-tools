"use client";

import { hsvaToHslString } from "@uiw/color-convert";
import { useState } from "react";
import { HsvaColorPicker } from "react-colorful";
import { TextField } from "~/components/ui/textfield";
import {
  hsvaToHexString,
  hsvaToHexaString,
  hsvaToHslaString,
  hsvaToRgbString,
  hsvaToRgbaString,
} from "~/utils";

export function ColorPicker() {
  const [color, setColor] = useState({
    h: 0,
    s: 0,
    v: 0,
    a: 1,
  });

  return (
    <section className="mt-12 space-y-4">
      <HsvaColorPicker className="mx-auto" color={color} onChange={setColor} />
      <TextField>
        <TextField.Input value={hsvaToHexString(color)} readOnly />
      </TextField>
      <TextField>
        <TextField.Input value={hsvaToHexaString(color)} readOnly />
      </TextField>
      <TextField>
        <TextField.Input value={hsvaToRgbString(color)} readOnly />
      </TextField>
      <TextField>
        <TextField.Input value={hsvaToRgbaString(color)} readOnly />
      </TextField>
      <TextField>
        <TextField.Input value={hsvaToHslString(color)} readOnly />
      </TextField>
      <TextField>
        <TextField.Input value={hsvaToHslaString(color)} readOnly />
      </TextField>
    </section>
  );
}
