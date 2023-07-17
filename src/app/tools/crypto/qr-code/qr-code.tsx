"use client";

import { useRef, useState } from "react";

import domtoimage from "dom-to-image";
import saveAs from "file-saver";
import { QRCodeSVG } from "qrcode.react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function QRCode() {
  const [inputValue, setInputValue] = useState("");
  const QRCodeRef = useRef<HTMLDivElement>(null);

  async function handleDownloadQRCode() {
    if (QRCodeRef.current) {
      const blob = await domtoimage.toBlob(QRCodeRef.current);

      saveAs(blob, "qrcode.png");
    }
  }

  return (
    <section className="mt-6 flex w-full gap-4">
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <section ref={QRCodeRef}>
        <QRCodeSVG width={250} height={250} value={inputValue} />
      </section>
      <Button type="button" onClick={handleDownloadQRCode}>
        Download
      </Button>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(inputValue)}`}
        rel="noreferrer"
        target="_blank"
      >
        Share on WhatsApp
      </a>
      <a
        href={`http://twitter.com/share?text=${encodeURIComponent(inputValue)}`}
        rel="noreferrer"
        target="_blank"
      >
        Share on Twitter
      </a>
    </section>
  );
}
