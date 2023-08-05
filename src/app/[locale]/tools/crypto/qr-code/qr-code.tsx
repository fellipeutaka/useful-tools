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
    <section className="mt-8 gap-4 space-y-4">
      <div>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={t("placeholder")}
        />
        <p className="mt-1 text-xs text-muted-foreground">{t("hint")}</p>
      </div>
      <QRCodeCanvas size={256} className="mx-auto" value={value} />
      <Button
        className="!my-6 mx-auto gap-2"
        variant="outline"
        onClick={handleDownload}
      >
        <Download className="h-4 w-4" />
        <span>{t("actions.download")}</span>
      </Button>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button className="gap-2 rounded-full" variant="green" asChild>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(value)}`}
            rel="noreferrer"
            target="_blank"
          >
            <WhatsApp className="h-4 w-4" />
            <span>{t("actions.share.whatsapp")}</span>
          </a>
        </Button>
        <Button className="gap-2 rounded-full" variant="blue" asChild>
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
