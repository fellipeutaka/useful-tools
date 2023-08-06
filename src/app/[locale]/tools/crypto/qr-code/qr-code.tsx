"use client";

import { Download, Twitter } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";

import { WhatsApp } from "~/components/icons/whatsapp";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useURLState } from "~/hooks/use-url-state";
import { useScopedI18n } from "~/lib/next-international/client";

export function QRCode() {
  const [value, setValue] = useURLState("value");
  const t = useScopedI18n("pages.tools.qr-code");

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
    <section className="mt-8">
      <div>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={t("placeholder")}
        />
        <p className="mt-1 text-xs text-muted-foreground">{t("hint")}</p>
      </div>
      <QRCodeCanvas size={256} className="mx-auto mt-4" value={value} />
      <Button
        className="mx-auto my-6"
        variant="outline"
        onClick={handleDownload}
      >
        <Download className="h-4 w-4" />
        <span>{t("actions.download")}</span>
      </Button>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button
          className="rounded-full bg-green-700 text-green-50 hover:bg-green-700/90"
          asChild
        >
          <a
            href={`https://wa.me/?text=${encodeURIComponent(value)}`}
            rel="noreferrer"
            target="_blank"
          >
            <WhatsApp className="h-4 w-4" />
            <span>{t("actions.share.whatsapp")}</span>
          </a>
        </Button>
        <Button
          className="rounded-full bg-sky-700 text-sky-50 hover:bg-sky-700/90"
          asChild
        >
          <a
            href={`http://twitter.com/share?text=${encodeURIComponent(value)}`}
            rel="noreferrer"
            target="_blank"
          >
            <Twitter className="h-4 w-4" />
            <span>{t("actions.share.twitter")}</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
