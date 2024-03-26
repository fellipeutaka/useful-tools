"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";

import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { TextField } from "~/components/ui/textfield";

function cipher(chunk: Uint8Array, key: number) {
  const transformedChunk = new Uint8Array(chunk.length);
  for (let i = 0; i < chunk.length; i++) {
    if (chunk[i]) {
      transformedChunk[i] = chunk[i] + (key % 26);
    }
  }
  return transformedChunk;
}

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function encryptString(str: string, key: number) {
  const encrypted = cipher(encoder.encode(str), key);
  return decoder.decode(encrypted);
}

function decryptString(str: string, key: number) {
  const decrypted = cipher(encoder.encode(str), -key);
  return decoder.decode(decrypted);
}

export function CaesarCipher() {
  const [data, setData] = useState({
    key: "3",
    text: "",
    caesarCipher: "",
  });
  const t = useTranslations();

  function handleKeyChange(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.value;

    if (/[^0-9]/.test(key) || Number(key) > 25 || Number(key) < 0) {
      return toast.warning(t("components.toast.warning"), {
        description: t("pages.tools.caesar-cipher.toast.invalid-key"),
      });
    }

    setData((prev) => ({ ...prev, key }));
  }

  function handleCodeTextToCaesarCipherCode(
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    const text = e.target.value;

    if (data.key === "0") {
      setData((prev) => ({ ...prev, caesarCipher: text, text }));
      return;
    }

    setData((prev) => ({
      ...prev,
      caesarCipher: encryptString(text, Number(prev.key)),
      text,
    }));
  }

  function handleDecodeCaesarCipherCodeToText(
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    const caesarCipher = e.target.value;

    if (data.key === "0") {
      setData((prev) => ({
        ...prev,
        text: caesarCipher,
        caesarCipher,
      }));
      return;
    }

    setData((prev) => ({
      ...prev,
      text: decryptString(caesarCipher, Number(prev.key)),
      caesarCipher,
    }));
  }

  return (
    <section className="mt-6 flex w-full gap-4">
      <div className="space-y-2">
        <Label htmlFor="key">{t("pages.tools.caesar-cipher.key")}</Label>
        <TextField>
          <TextField.Input
            id="key"
            value={data.key}
            onChange={handleKeyChange}
            placeholder="0-25"
          />
        </TextField>
      </div>
      <div className="space-y-2">
        <Label htmlFor="text">{t("pages.tools.caesar-cipher.encode")}</Label>
        <Textarea
          id="text"
          value={data.text}
          onChange={handleCodeTextToCaesarCipherCode}
          placeholder={t("pages.tools.caesar-cipher.encode-placeholder")}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="caesarCipher">
          {t("pages.tools.caesar-cipher.decode")}
        </Label>
        <Textarea
          id="caesarCipher"
          value={data.caesarCipher}
          onChange={handleDecodeCaesarCipherCodeToText}
          placeholder={t("pages.tools.caesar-cipher.decode-placeholder")}
        />
      </div>
    </section>
  );
}
