"use client";

import { useState } from "react";

import { Loader } from "lucide-react";

import { CodeEditor } from "~/components/common/code-editor";
import { CopyButton } from "~/components/common/copy-button";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/toast/use-toast";
import { useI18n, useScopedI18n } from "~/lib/next-international/client";

export function JSONFormatter() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [numbersOfSpaces, setNumbersOfSpaces] = useState("2");
  const t = useI18n();
  const scopedT = useScopedI18n("pages.tools.json-formatter");

  const { toast } = useToast();

  async function handleFormat() {
    if (!input.trim()) {
      return toast({
        title: t("components.toast.warning"),
        description: scopedT("toast.required"),
        status: "warning",
      });
    }

    const space = Number(numbersOfSpaces);

    if (isNaN(space)) {
      return toast({
        title: t("components.toast.warning"),
        description: scopedT("toast.invalid-number"),
        status: "warning",
      });
    }

    setIsLoading(true);
    try {
      const code = JSON.stringify(JSON.parse(input), null, space);
      setResult(code);
      toast({
        title: t("components.toast.success"),
        description: scopedT("toast.success"),
        status: "success",
      });
    } catch (err) {
      toast({
        title: t("components.toast.error"),
        description:
          err instanceof Error ? err.message : "Something went wrong",
        status: "error",
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
          <CopyButton className="absolute right-4 top-4" valueToCopy={result} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Input
          type="number"
          placeholder={scopedT("placeholder")}
          min={0}
          max={10}
          value={numbersOfSpaces}
          onChange={(e) =>
            setNumbersOfSpaces(
              Math.min(Math.max(parseInt(e.target.value), 0), 10).toString(),
            )
          }
        />
        <Button disabled={isLoading} onClick={handleFormat}>
          {isLoading ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              <span>{scopedT("actions.formatting")}</span>
            </>
          ) : (
            <span>{scopedT("actions.format")}</span>
          )}
        </Button>
      </div>
    </section>
  );
}
