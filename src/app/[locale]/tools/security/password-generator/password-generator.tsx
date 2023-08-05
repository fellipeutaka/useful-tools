"use client";

import { useCallback, useEffect, useState } from "react";

import { RefreshCw } from "lucide-react";

import { CopyButton } from "~/components/common/copy-button";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Slider } from "~/components/ui/slider";
import { useIds } from "~/hooks/use-ids";
import { useScopedI18n } from "~/lib/next-international/client";

function getCharacters(
  includeUppercase: boolean,
  includeNumbers: boolean,
  includeLowercase: boolean,
  includeSymbols: boolean,
) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const symbols = "!@#$%^&*";

  return [
    ...(includeUppercase ? uppercase.split("") : []),
    ...(includeNumbers ? numbers.split("") : []),
    ...(includeLowercase ? lowercase.split("") : []),
    ...(includeSymbols ? symbols.split("") : []),
  ];
}

export function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(14);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [uppercaseId, numberId, lowercaseId, symbolId] = useIds(4);
  const t = useScopedI18n("pages.tools.password-generator");

  const handleGeneratePassword = useCallback(() => {
    const characters = getCharacters(
      includeUppercase,
      includeNumbers,
      includeLowercase,
      includeSymbols,
    );

    setPassword(
      Array.from(
        window.crypto.getRandomValues(new Uint32Array(length)),
        (value) => characters[value % characters.length],
      ).join(""),
    );
  }, [
    includeLowercase,
    includeNumbers,
    includeSymbols,
    includeUppercase,
    length,
  ]);

  useEffect(() => {
    handleGeneratePassword();
  }, [
    handleGeneratePassword,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    includeUppercase,
    length,
  ]);

  return (
    <section className="mt-8 space-y-6">
      <div className="flex items-center gap-2">
        <Input value={password} readOnly placeholder={t("placeholder")} />
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
        <RefreshCw size={16} />
        <span>{t("actions.generate")}</span>
      </Button>
    </section>
  );
}
