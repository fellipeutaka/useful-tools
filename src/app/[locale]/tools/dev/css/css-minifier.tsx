"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { CopyButton } from "~/components/copy-button";
import { Icons } from "~/components/icons";
import { CodeEditor } from "~/components/tools/code-editor";
import { Button } from "~/components/ui/button";

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

export function CssMinifier() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations();

  async function handleMinify() {
    if (!input.trim()) {
      return toast.warning(t("components.toast.warning"), {
        description: t("pages.tools.css-minifier.toast.required"),
      });
    }

    setIsLoading(true);
    try {
      const { transform, default: init } = await import("lightningcss-wasm");
      await init();

      const { code } = transform({
        filename: "",
        code: textEncoder.encode(input),
        minify: true,
      });
      setResult(textDecoder.decode(code));
      toast.success(t("components.toast.success"), {
        description: t("pages.tools.css-minifier.toast.success"),
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
    <section className="mt-8 grid h-full gap-x-4 gap-y-6 sm:grid-cols-2">
      <CodeEditor
        language="css"
        height="50vh"
        value={input}
        onChange={(value) => setInput(value ?? "")}
      />
      <div className="relative">
        <CodeEditor
          language="css"
          height="50vh"
          value={result}
          options={{ readOnly: true }}
        />
        <CopyButton className="absolute top-2 right-2" valueToCopy={result} />
      </div>

      <Button
        className="col-span-full"
        disabled={isLoading}
        onClick={handleMinify}
        size="lg"
      >
        {isLoading ? (
          <>
            <Icons.Loader className="mr-2 size-4 animate-spin" />
            <span>{t("pages.tools.css-minifier.actions.minifying")}</span>
          </>
        ) : (
          <span>{t("pages.tools.css-minifier.actions.minify")}</span>
        )}
      </Button>
    </section>
  );
}
