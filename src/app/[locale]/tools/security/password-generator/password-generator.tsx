"use client";

import { useState } from "react";

import { CopyButton } from "~/components/common/copy-button";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useScopedI18n } from "~/lib/next-international/client";

export function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const t = useScopedI18n("pages.tools.password-generator");

  function handleGeneratePassword() {
    const randomPassword = window.crypto.randomUUID().split("-")[0];
    setPassword(randomPassword);
  }

  return (
    <section className="mt-8 space-y-6">
      <div className="flex items-center gap-2">
        <Input value={password} readOnly placeholder={t("placeholder")} />
        <CopyButton className="h-10 w-12" valueToCopy={password} />
      </div>
      <Button onClick={handleGeneratePassword}>{t("actions.generate")}</Button>
    </section>
  );
}
