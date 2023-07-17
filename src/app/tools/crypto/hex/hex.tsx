"use client";

import { useState } from "react";

import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export function Hex() {
  const [text, setText] = useState("");
  const [hex, setHex] = useState("");

  async function handleCodeTextToHexCode() {
    const { default: Hex } = await import("hex-encoding");
    const encoded = Hex.encodeStr(text);
    setHex(encoded);
    setText("");
  }

  async function handleDecodeHexCodeToText() {
    const { default: Hex } = await import("hex-encoding");
    const decoded = Hex.decodeStr(hex);
    setText(decoded);
    setHex("");
  }

  return (
    <section className="mt-6 flex w-full gap-4">
      <div>
        <Label htmlFor="text">Text to Hex code:</Label>
        <Textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="button" onClick={handleCodeTextToHexCode}>
          Code
        </button>
      </div>
      <div>
        <Label htmlFor="hex">Hex code to text:</Label>
        <Textarea
          id="hex"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
        />
        <button type="button" onClick={handleDecodeHexCodeToText}>
          Decode
        </button>
      </div>
    </section>
  );
}
