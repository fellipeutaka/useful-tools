"use client";

import { useState } from "react";

import Editor from "@monaco-editor/react";
import init from "lightningcss-wasm";
import { Check, Copy, Loader } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "~/components/ui/button";
import { TextareaStyles } from "~/components/ui/textarea";
import { useToast } from "~/components/ui/toast/use-toast";
import { useClipboard } from "~/hooks/useClipboard";

import { EDITOR_OPTIONS } from "../constants/editor-config";

export function CssMinifier() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { copy, copied } = useClipboard();
  const { toast } = useToast();
  const { theme } = useTheme();

  async function handleMinify() {
    if (!input.trim()) {
      return toast({
        title: "Input is empty",
        description: "Please enter some CSS to minify",
        status: "warning",
      });
    }

    setIsLoading(true);
    try {
      const { transform } = await import("lightningcss-wasm");
      await init();

      const { code } = transform({
        filename: "",
        code: new TextEncoder().encode(input),
        minify: true,
      });
      setResult(new TextDecoder().decode(code));
      toast({
        title: "Success",
        description: "CSS minified",
        status: "success",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description:
          err instanceof Error ? err?.message : "Something went wrong",
        status: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="mt-8 grid h-full gap-x-4 gap-y-6 sm:grid-cols-2">
      <Editor
        className={TextareaStyles()}
        language="css"
        height="50vh"
        value={input}
        onChange={(value) => setInput(value ?? "")}
        loading={<Loader className="h-6 w-6 animate-spin" />}
        options={EDITOR_OPTIONS}
        theme={theme === "light" ? "vs-light" : "vs-dark"}
      />
      <Editor
        className={TextareaStyles()}
        language="css"
        height="50vh"
        value={result}
        loading={<Loader className="h-6 w-6 animate-spin" />}
        options={{ ...EDITOR_OPTIONS, readOnly: true }}
        theme={theme === "light" ? "vs-light" : "vs-dark"}
      />
      <Button disabled={isLoading} onClick={handleMinify}>
        {isLoading ? (
          <>
            <Loader className="mr-2 h-4 w-4 animate-spin" />
            <span>Minifying</span>
          </>
        ) : (
          <span>Minify</span>
        )}
      </Button>
      <Button variant="outline" onClick={() => copy(result)}>
        {copied ? (
          <>
            <Check className="h-4 w-4 animate-in fade-in" />
            <span className="animate-in fade-in">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            <span>Copy</span>
          </>
        )}
      </Button>
    </section>
  );
}
