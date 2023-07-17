"use client";

import { useState } from "react";

import { Download, Twitter } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

import { WhatsApp } from "~/components/icons/whatsapp";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function QRCode() {
  const [value, setValue] = useState("");

  async function handleDownload() {
    const qrCode = document.querySelector("canvas");
    if (qrCode) {
      const a = document.createElement("a");
      a.download = "qrcode.png";
      a.href = qrCode.toDataURL();
      a.click();
    }
  }

  return (
    <section className="mt-8 gap-4 space-y-4">
      <div>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your website, text, or link here"
        />
        <p className="mt-1 text-xs text-muted-foreground">
          (Your QR Code will be generated automatically)
        </p>
      </div>
      <QRCodeCanvas
        className="mx-auto"
        width={250}
        height={250}
        value={value}
      />
      <Button
        className="!my-6 mx-auto gap-2"
        variant="outline"
        onClick={handleDownload}
      >
        <Download className="h-4 w-4" />
        <span>Download</span>
      </Button>
      <div className="flex items-center gap-4">
        <Button className="gap-2 rounded-full" variant="green" asChild>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(value)}`}
            rel="noreferrer"
            target="_blank"
          >
            <WhatsApp className="h-4 w-4" />
            <span>Share on WhatsApp</span>
          </a>
        </Button>
        <Button className="gap-2 rounded-full" variant="blue" asChild>
          <a
            href={`http://twitter.com/share?text=${encodeURIComponent(value)}`}
            rel="noreferrer"
            target="_blank"
          >
            <Twitter className="h-4 w-4" />
            <span>Share on Twitter</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
