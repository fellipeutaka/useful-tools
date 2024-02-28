"use client";

import { useTranslations } from "next-intl";
import { QRCodeCanvas } from "qrcode.react";
import { Icons } from "~/components/icons";

import { Button } from "~/components/ui/button";
import { TextField } from "~/components/ui/textfield";
import { useURLState } from "~/hooks/use-url-state";

export function QRCode() {
  const [value, setValue] = useURLState("value");
  const t = useTranslations("pages.tools.qr-code");

  function handleDownload() {
    const qrCode = document.querySelector("canvas");
    if (qrCode) {
      const a = document.createElement("a");
      a.download = "qrcode.png";
      a.href = qrCode.toDataURL();
      a.click();
      a.remove();
    }
  }

  return (
    <section className="mt-8">
      <div>
        <TextField>
          <TextField.Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={t("placeholder")}
          />
        </TextField>
        <p className="mt-1 text-xs text-muted-foreground">{t("hint")}</p>
      </div>
      <QRCodeCanvas size={256} className="mx-auto mt-4" value={value} />
      <Button
        className="mx-auto flex my-6"
        variant="outline"
        onClick={handleDownload}
      >
        <Icons.Download className="size-4 mr-2" />
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
            <Icons.WhatsApp className="size-4 mr-2" />
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
            <Icons.Twitter className="size-4 mr-2" />
            <span>{t("actions.share.twitter")}</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
