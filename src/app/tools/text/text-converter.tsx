"use client";

import { useRef } from "react";

import { Check, Copy } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/components/ui/toast/use-toast";
import { useClipboard } from "~/hooks/useClipboard";

export function TextConverter() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textareaResultRef = useRef<HTMLTextAreaElement>(null);
  const switchRef = useRef<HTMLButtonElement>(null);
  const { toast } = useToast();
  const { copy, copied } = useClipboard();

  function isInputEmpty() {
    return textareaRef.current?.value.trim() === "";
  }

  function getIfShouldClearInput() {
    return switchRef.current?.getAttribute("data-state") === "checked";
  }

  function handleConvertToUppercase() {
    if (isInputEmpty()) {
      return toast({
        title: "Warning",
        description: "Input is empty",
        status: "warning",
      });
    }
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = text.toUpperCase();
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: "Success",
        description: "Text converted to uppercase",
        status: "success",
      });
    }
  }

  function handleConvertToLowercase() {
    if (isInputEmpty()) {
      return toast({
        title: "Warning",
        description: "Input is empty",
        status: "warning",
      });
    }
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = text.toLowerCase();
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: "Success",
        description: "Text converted to lowercase",
        status: "success",
      });
    }
  }

  function handleConvertToCapitalize() {
    if (isInputEmpty()) {
      return toast({
        title: "Warning",
        description: "Input is empty",
        status: "warning",
      });
    }
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = text
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: "Success",
        description: "Text converted to capitalize",
        status: "success",
      });
    }
  }

  function handleRemoveAccents() {
    if (isInputEmpty()) {
      return toast({
        title: "Warning",
        description: "Input is empty",
        status: "warning",
      });
    }
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: "Success",
        description: "Accents removed",
        status: "success",
      });
    }
  }

  function handleRemoveDuplicates() {
    if (isInputEmpty()) {
      return toast({
        title: "Warning",
        description: "Input is empty",
        status: "warning",
      });
    }
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = [...new Set(text.split(" "))].join(" ");
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: "Success",
        description: "Duplicates removed",
        status: "success",
      });
    }
  }

  return (
    <section className="mt-8">
      <div className="flex items-center gap-2">
        <Switch id="switch" ref={switchRef} />
        <Label htmlFor="switch">Clear input</Label>
      </div>

      <div className="mt-2 grid gap-4 sm:grid-cols-2">
        <Textarea ref={textareaRef} placeholder="Type something here…" />
        <div className="relative">
          <Textarea ref={textareaResultRef} readOnly placeholder="Result" />
          <Button
            className="absolute right-2 top-2 h-8 w-8"
            variant="outline"
            size="icon"
            onClick={() => copy(textareaResultRef.current?.value ?? "")}
          >
            {copied ? (
              <Check className="h-3 w-3 animate-in fade-in" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <Button variant="outline" onClick={handleConvertToUppercase}>
          Convert to uppercase
        </Button>
        <Button variant="outline" onClick={handleConvertToLowercase}>
          Convert to lowercase
        </Button>
        <Button variant="outline" onClick={handleConvertToCapitalize}>
          Convert to capitalize
        </Button>
        <Button variant="outline" onClick={handleRemoveAccents}>
          Remove accents
        </Button>
        <Button variant="outline" onClick={handleRemoveDuplicates}>
          Remove duplicates
        </Button>
      </div>
    </section>
  );
}
