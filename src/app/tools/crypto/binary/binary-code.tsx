"use client";

import { useState } from "react";

import { cnBase } from "tailwind-variants";

import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { typography } from "~/styles/typography";

function isBinary(string: string) {
  const pattern = /^[01]*$/;
  return !!string.match(pattern);
}

export function BinaryCode() {
  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");

  function handleCodeTextToBinaryCode(text: string) {
    setText(text);
    const textToBinary = text
      .split("")
      .map((character) => {
        const binary = character.charCodeAt(0).toString(2);
        return Array(8 - binary.length + 1).join("0") + binary;
      })
      .join("");
    setBinary(textToBinary);
  }

  function handleDecodeBinaryCodeToText(binary: string) {
    setBinary(binary);
    setText("");
    if (isBinary(binary)) {
      const regExpArray = binary.match(/.{1,8}/g);
      if (regExpArray) {
        const result = regExpArray
          .map((value) =>
            String.fromCharCode(Number(parseInt(value, 2).toString(10))),
          )
          .join("");
        setText(result);
      }
    }
  }

  return (
    <main className="container grid place-content-center border-b py-8 animate-in fade-in duration-really-slow">
      <h1 className={cnBase(typography.h1, "text-center")}>Binary Code</h1>
      <section className="mt-6 flex w-full gap-4">
        <div>
          <Label htmlFor="text">Text to code:</Label>
          <Textarea
            id="text"
            value={text}
            onChange={(e) => handleCodeTextToBinaryCode(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="binary">Binary to decode:</Label>
          <Textarea
            id="binary"
            value={binary}
            onChange={(e) => handleDecodeBinaryCodeToText(e.target.value)}
          />
        </div>
      </section>
    </main>
  );
}
