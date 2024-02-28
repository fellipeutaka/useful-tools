"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { decode, encode } from "morsee";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export function Morse() {
  const [data, setData] = useState({
    text: "",
    morse: "",
  });
  const t = useTranslations("pages.tools.morse-code");

  function handleEncodeTextTomorse(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const text = e.target.value;
    const encoded = encode(text);

    setData({
      text,
      morse: encoded,
    });
  }

  function handleDecodemorseToText(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const morse = e.target.value;
    const decoded = decode(morse);

    setData({
      text: decoded,
      morse,
    });
  }

  return (
    <section className="mt-6 flex w-full gap-4">
      <div className="space-y-2">
        <Label htmlFor="text">{t("encode")}</Label>
        <Textarea
          id="text"
          value={data.text}
          onChange={handleEncodeTextTomorse}
          placeholder={t("encode-placeholder")}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="morse">{t("decode")}</Label>
        <Textarea
          id="morse"
          value={data.morse}
          onChange={handleDecodemorseToText}
          placeholder={t("decode-placeholder")}
        />
      </div>
    </section>
  );
}
