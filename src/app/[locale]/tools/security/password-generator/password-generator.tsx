"use client";

import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { CopyButton } from "~/components/copy-button";
import { Icons } from "~/components/icons";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import { Slider } from "~/components/ui/slider";
import { TextField } from "~/components/ui/textfield";
import { useIds } from "~/hooks/use-ids";
import { generatePassword, getCharacters } from "~/utils/crypto";

export function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(14);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [uppercaseId, numberId, lowercaseId, symbolId] = useIds(4);
  const t = useTranslations("pages.tools.password-generator");

  const handleGeneratePassword = useCallback(() => {
    setPassword(
      generatePassword({
        length,
        characters: getCharacters(
          includeUppercase,
          includeNumbers,
          includeLowercase,
          includeSymbols,
        ),
      }),
    );
  }, [
    length,
    includeUppercase,
    includeNumbers,
    includeLowercase,
    includeSymbols,
  ]);

  useEffect(() => {
    handleGeneratePassword();
  }, [handleGeneratePassword]);

  return (
    <section className="mt-8 space-y-6">
      <div className="flex items-center gap-2">
        <TextField className="w-full">
          <TextField.Input
            value={password}
            readOnly
            placeholder={t("placeholder")}
          />
        </TextField>
        <CopyButton className="h-10 w-12" valueToCopy={password} />
      </div>
      <div className="space-y-3">
        <p>{t("length", { length })}</p>
        <Slider
          value={[length]}
          onValueChange={([value]) => setLength(value)}
          min={4}
          max={128}
        />
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={includeUppercase}
            onCheckedChange={setIncludeUppercase}
            id={uppercaseId}
          />
          <Label htmlFor={uppercaseId}>A-Z</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={includeNumbers}
            onCheckedChange={setIncludeNumbers}
            id={numberId}
          />
          <Label htmlFor={numberId}>0-9</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={includeLowercase}
            onCheckedChange={setIncludeLowercase}
            id={lowercaseId}
          />
          <Label htmlFor={lowercaseId}>a-z</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={includeSymbols}
            onCheckedChange={setIncludeSymbols}
            id={symbolId}
          />
          <Label htmlFor={symbolId}>!@#$%^&*</Label>
        </div>
      </div>
      <Button onClick={handleGeneratePassword}>
        <Icons.RefreshCw className="size-4 mr-2" />
        <span>{t("actions.generate")}</span>
      </Button>
    </section>
  );
}
