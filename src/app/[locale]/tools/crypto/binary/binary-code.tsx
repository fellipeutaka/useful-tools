"use client";

import { useState } from "react";

import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { useScopedI18n } from "~/lib/next-international/client";

function isBinary(string: string) {
  const pattern = /^[01]*$/;
  return !!string.match(pattern);
}

export function BinaryCode() {
  const [text, setText] = useState("");
  const [binary, setBinary] = useState("");
  const t = useScopedI18n("pages.tools.binary-code");

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
    <section className="mt-6 flex w-full gap-4">
      <div>
        <Label htmlFor="text">{t("encode")}</Label>
        <Textarea
          id="text"
          value={text}
          onChange={(e) => handleCodeTextToBinaryCode(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="binary">{t("decode")}</Label>
        <Textarea
          id="binary"
          value={binary}
          onChange={(e) => handleDecodeBinaryCodeToText(e.target.value)}
        />
      </div>
    </section>
  );
}
