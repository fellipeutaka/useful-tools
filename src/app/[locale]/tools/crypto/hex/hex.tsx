"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import HexEncoding from "hex-encoding";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export function Hex() {
  const [data, setData] = useState({
    text: "",
    hex: "",
  });
  const t = useTranslations("pages.tools.hex-code");

  function handleEncodeTextToHex(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const text = e.target.value;
    const encoded = HexEncoding.encodeStr(text);

    setData({
      text,
      hex: encoded,
    });
  }

  function handleDecodeHexToText(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const hex = e.target.value;
    const decoded = HexEncoding.decodeStr(hex);

    setData({
      text: decoded,
      hex,
    });
  }

  return (
    <section className="mt-6 flex w-full gap-4">
      <div className="space-y-2">
        <Label htmlFor="text">{t("encode")}</Label>
        <Textarea
          id="text"
          value={data.text}
          onChange={handleEncodeTextToHex}
          placeholder={t("encode-placeholder")}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="hex">{t("decode")}</Label>
        <Textarea
          id="hex"
          value={data.hex}
          onChange={handleDecodeHexToText}
          placeholder={t("decode-placeholder")}
        />
      </div>
    </section>
  );
}
