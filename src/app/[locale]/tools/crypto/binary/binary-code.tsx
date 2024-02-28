"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import {
  convertBinaryToString,
  convertStringToBinary,
  isBinary,
} from "~/utils/crypto";

export function BinaryCode() {
  const [data, setData] = useState({
    text: "",
    binary: "",
  });
  const t = useTranslations("pages.tools.binary-code");

  function handleCodeTextToBinaryCode(
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    const text = e.target.value;

    setData({
      text,
      binary: convertStringToBinary(text),
    });
  }

  function handleDecodeBinaryCodeToText(
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    const binary = e.target.value;

    setData({
      binary,
      text: isBinary(binary) ? convertBinaryToString(binary) : "",
    });
  }

  return (
    <section className="mt-6 flex w-full gap-4">
      <div>
        <Label htmlFor="text">{t("encode")}</Label>
        <Textarea
          id="text"
          value={data.text}
          onChange={handleCodeTextToBinaryCode}
          placeholder={t("encode-placeholder")}
        />
      </div>
      <div>
        <Label htmlFor="binary">{t("decode")}</Label>
        <Textarea
          id="binary"
          value={data.binary}
          onChange={handleDecodeBinaryCodeToText}
          placeholder={t("decode-placeholder")}
        />
      </div>
    </section>
  );
}
