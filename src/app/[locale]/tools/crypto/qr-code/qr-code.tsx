"use client";

import { useTranslations } from "next-intl";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import { Icons } from "~/components/icons";

import { Button } from "~/components/ui/button";
import { TextField } from "~/components/ui/textfield";

type QRCodeProps = {
  initialValue: string;
};

export function QRCode({ initialValue }: QRCodeProps) {
  const t = useTranslations("pages.tools.qr-code");
  const [value, setValue] = useState(initialValue);

  function handleValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValue(value);

    const newSearchParams = new URLSearchParams(window.location.search);
    if (!value.trim()) {
      newSearchParams.delete("value");
    } else {
      newSearchParams.set("value", value);
    }

    const search = newSearchParams.toString();
    const newUrl = `${window.location.pathname}${search ? `?${search}` : ""}`;
    window.history.replaceState({ path: newUrl }, "", newUrl);
  }

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
            onChange={handleValueChange}
            placeholder={t("placeholder")}
            maxLength={256}
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
      <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
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
