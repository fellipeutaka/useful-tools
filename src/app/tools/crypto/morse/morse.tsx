"use client";

import { useState } from "react";

import { decode, encode } from "morsee";

import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export function Morse() {
  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");

  function handleCodeTextToMorseCode() {
    const encoded = encode(text);
    setMorse(encoded);
    setText("");
  }

  function handleDecodeMorseCodeToText() {
    const decoded = decode(morse);
    setText(decoded);
    setMorse("");
  }

  return (
    <section className="mt-6 flex w-full gap-4">
      <div>
        <Label htmlFor="text">Text to morse code:</Label>
        <Textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={handleCodeTextToMorseCode}>Code</Button>
      </div>
      <div>
        <Label htmlFor="morse">Morse code to text: </Label>
        <Textarea
          id="morse"
          value={morse}
          onChange={(e) => setMorse(e.target.value)}
        />
        <Button onClick={handleDecodeMorseCodeToText}>Decode</Button>
      </div>
    </section>
  );
}
