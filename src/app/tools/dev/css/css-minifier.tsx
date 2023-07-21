"use client";

import { useState } from "react";

import init from "lightningcss-wasm";
import { Loader } from "lucide-react";

import { CodeEditor } from "~/components/common/code-editor";
import { CopyButton } from "~/components/common/copy-button";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/toast/use-toast";

export function CssMinifier() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

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
        <CopyButton className="absolute right-2 top-2" valueToCopy={result} />
      </div>

      <Button
        className="col-span-full"
        disabled={isLoading}
        onClick={handleMinify}
        size="lg"
      >
        {isLoading ? (
          <>
            <Loader className="mr-2 h-4 w-4 animate-spin" />
            <span>Minifying</span>
          </>
        ) : (
          <span>Minify</span>
        )}
      </Button>
    </section>
  );
}
