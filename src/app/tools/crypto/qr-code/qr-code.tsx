"use client";

import { useState } from "react";

import { Download, Share, Twitter } from "lucide-react";
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

  async function handleShare() {
    const qrCode = document.querySelector("canvas");
    if (qrCode) {
      try {
        navigator.share({
          title: "QR Code",
          text: value,
          files: [
            new File([qrCode.toDataURL()], "qrcode.png", {
              type: "image/png",
            }),
          ],
        });
      } catch (err) {
        console.error(err);
      }
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
      <QRCodeCanvas size={256} className="mx-auto" value={value} />
      <Button
        className="!my-6 mx-auto gap-2"
        variant="outline"
        onClick={handleDownload}
      >
        <Download className="h-4 w-4" />
        <span>Download</span>
      </Button>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button
          className="gap-2 rounded-full"
          variant="secondary"
          onClick={handleShare}
        >
          <Share className="h-4 w-4" />
          <span>Share</span>
        </Button>
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
