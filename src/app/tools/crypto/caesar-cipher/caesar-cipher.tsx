"use client";

import { useState } from "react";

import { decryptString, encryptString } from "@gykh/caesar-cipher";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/components/ui/toast/use-toast";

export function CaesarCipher() {
  const [key, setKey] = useState("3");
  const [text, setText] = useState("");
  const [caesarCipher, setCaesarCipher] = useState("");
  const { toast } = useToast();

  function handleCodeTextToCaesarCipherCode() {
    if (key === "0") {
      setCaesarCipher(text);
      return setText("");
    }
    if (isNaN(Number(key))) {
      return toast({ title: "Please, type a number between 0 - 25" });
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
      return toast({ title: "Please, type a number between 0 - 25" });
    }
    const decrypted = decryptString(caesarCipher, Number(key));
    setText(decrypted);
    setCaesarCipher("");
  }

  return (
    <section className="mt-6 flex w-full gap-4">
      <div>
        <Label htmlFor="key">Key:</Label>
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
        <Label htmlFor="text">Text to Caesar Cipher code:</Label>
        <Textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="button" onClick={handleCodeTextToCaesarCipherCode}>
          Code
        </Button>
      </div>
      <div>
        <Label htmlFor="caesarCipher">Caesar Cipher code to decode:</Label>
        <Textarea
          id="caesarCipher"
          value={caesarCipher}
          onChange={(e) => setCaesarCipher(e.target.value)}
        />
        <Button type="button" onClick={handleDecodeCaesarCipherCodeToText}>
          Decode
        </Button>
      </div>
    </section>
  );
}
