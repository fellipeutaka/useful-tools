"use client";

import { useState } from "react";

import Hex from "hex-encoding";
import { cnBase } from "tailwind-variants";

import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { typography } from "~/styles/typography";

export default function Page() {
  const [text, setText] = useState("");
  const [hex, setHex] = useState("");

  function handleCodeTextToHexCode() {
    const encoded = Hex.encodeStr(text);
    setHex(encoded);
    setText("");
  }

  function handleDecodeHexCodeToText() {
    const decoded = Hex.decodeStr(hex);
    setText(decoded);
    setHex("");
  }

  return (
    <main className="container grid place-content-center border-b py-8 animate-in fade-in duration-really-slow">
      <h1 className={cnBase(typography.h1, "text-center")}>Hex Code</h1>
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
    </main>
  );
}
