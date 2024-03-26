"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";
import { CopyButton } from "~/components/copy-button";
import { Icons } from "~/components/icons";
import { CodeEditor } from "~/components/tools/code-editor";
import { Button } from "~/components/ui/button";
import { TextField } from "~/components/ui/textfield";

export function JSONFormatter() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [numbersOfSpaces, setNumbersOfSpaces] = useState("2");
  const t = useTranslations();

  function handleFormat() {
    if (!input.trim()) {
      return toast.warning(t("components.toast.warning"), {
        description: t("pages.tools.json-formatter.toast.required"),
      });
    }

    const space = Number(numbersOfSpaces);

    if (Number.isNaN(space)) {
      return toast.warning(t("components.toast.warning"), {
        description: t("pages.tools.json-formatter.toast.invalid-number"),
      });
    }

    setIsLoading(true);
    try {
      const code = JSON.stringify(JSON.parse(input), null, space);
      setResult(code);
      toast.success(t("components.toast.success"), {
        description: t("pages.tools.json-formatter.toast.success"),
      });
    } catch (err) {
      console.error(err);
      toast.error(t("components.toast.error"), {
        description:
          err instanceof Error
            ? err?.message
            : t("components.toast.error-unexpected"),
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="mt-8">
      <div className="my-6 grid h-full gap-x-4 sm:grid-cols-2">
        <CodeEditor
          language="json"
          height="50vh"
          value={input}
          onChange={(value) => setInput(value ?? "")}
        />
        <div className="relative">
          <CodeEditor
            language="json"
            height="50vh"
            value={result}
            options={{ readOnly: true }}
          />
          <CopyButton className="absolute top-4 right-4" valueToCopy={result} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <TextField>
          <TextField.Input
            type="number"
            placeholder={t("pages.tools.json-formatter.placeholder")}
            min={0}
            max={10}
            value={numbersOfSpaces}
            onChange={(e) =>
              setNumbersOfSpaces(
                Math.min(
                  Math.max(Number.parseInt(e.target.value), 0),
                  10,
                ).toString(),
              )
            }
          />
        </TextField>
        <Button disabled={isLoading} onClick={handleFormat}>
          {isLoading ? (
            <>
              <Icons.Loader className="mr-2 size-4 animate-spin" />
              <span>{t("pages.tools.json-formatter.actions.formatting")}</span>
            </>
          ) : (
            <span>{t("pages.tools.json-formatter.actions.format")}</span>
          )}
        </Button>
      </div>
    </section>
  );
}
