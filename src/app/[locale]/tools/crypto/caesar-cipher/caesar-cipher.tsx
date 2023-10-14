"use client";

import { useState } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/components/ui/toast/use-toast";
import { useI18n, useScopedI18n } from "~/lib/next-international/client";

function cipher(chunk: Uint8Array, key: number) {
  const transformedChunk = new Uint8Array(chunk.length);
  for (let i = 0; i < chunk.length; i++) {
    if (chunk[i]) {
      transformedChunk[i] = chunk[i]! + (key % 26);
    }
  }
  return transformedChunk;
}

function encryptString(str: string, key: number) {
  const encrypted = cipher(new TextEncoder().encode(str), key);
  return new TextDecoder().decode(encrypted);
}

function decryptString(str: string, key: number) {
  const decrypted = cipher(new TextEncoder().encode(str), -key);
  return new TextDecoder().decode(decrypted);
}

export function CaesarCipher() {
  const [key, setKey] = useState("3");
  const [text, setText] = useState("");
  const [caesarCipher, setCaesarCipher] = useState("");
  const t = useI18n();
  const scopedT = useScopedI18n("pages.tools.caesar-cipher");
  const { toast } = useToast();

  function handleCodeTextToCaesarCipherCode() {
    if (key === "0") {
      setCaesarCipher(text);
      return setText("");
    }
    if (isNaN(Number(key))) {
      return toast({
        title: t("components.toast.warning"),
        description: scopedT("toast.invalid-key"),
        status: "warning",
      });
    }
    const encrypted = encryptString(text, Number(key));
    setCaesarCipher(encrypted);
    setText("");
  }

  function handleDecodeCaesarCipherCodeToText() {
    if (key === "0") {
      setText(caesarCipher);
      return setCaesarCipher("");
    }
    if (isNaN(Number(key))) {
      return toast({
        title: t("components.toast.warning"),
        description: scopedT("toast.invalid-key"),
        status: "warning",
      });
    }
    const decrypted = decryptString(caesarCipher, Number(key));
    setText(decrypted);
    setCaesarCipher("");
  }

  return (
    <section className="mt-6 flex w-full gap-4">
      <div>
        <Label htmlFor="key">{scopedT("key")}</Label>
        <Input
          type="number"
          id="key"
          min={0}
          max={25}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="text">{scopedT("encode")}</Label>
        <Textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="mt-2" onClick={handleCodeTextToCaesarCipherCode}>
          {scopedT("actions.code")}
        </Button>
      </div>
      <div>
        <Label htmlFor="caesarCipher">{scopedT("decode")}</Label>
        <Textarea
          id="caesarCipher"
          value={caesarCipher}
          onChange={(e) => setCaesarCipher(e.target.value)}
        />
        <Button className="mt-2" onClick={handleDecodeCaesarCipherCodeToText}>
          {scopedT("actions.decode")}
        </Button>
      </div>
    </section>
  );
}
