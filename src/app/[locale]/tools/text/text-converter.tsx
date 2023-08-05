"use client";

import { useRef } from "react";

import { CopyButton } from "~/components/common/copy-button";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/components/ui/toast/use-toast";
import { useI18n, useScopedI18n } from "~/lib/next-international/client";

export function TextConverter() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textareaResultRef = useRef<HTMLTextAreaElement>(null);
  const switchRef = useRef<HTMLButtonElement>(null);
  const { toast } = useToast();
  const t = useI18n();
  const scopedT = useScopedI18n("pages.tools.text-converter");

  function checkIfInputIsEmpty(): void | never {
    const isEmpty = textareaRef.current?.value.trim() === "";
    if (isEmpty) {
      textareaRef.current?.focus();
      throw toast({
        title: t("components.toast.warning"),
        description: scopedT("toast.required"),
        status: "warning",
      });
    }
  }

  function getIfShouldClearInput() {
    return switchRef.current?.getAttribute("data-state") === "checked";
  }

  function handleConvertToUppercase() {
    checkIfInputIsEmpty();
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = text.toUpperCase();
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: t("components.toast.success"),
        description: scopedT("toast.success-uppercase"),
        status: "success",
      });
    }
  }

  function handleConvertToLowercase() {
    checkIfInputIsEmpty();
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = text.toLowerCase();
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: t("components.toast.success"),
        description: scopedT("toast.success-lowercase"),
        status: "success",
      });
    }
  }

  function handleConvertToCapitalize() {
    checkIfInputIsEmpty();
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = text
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: t("components.toast.success"),
        description: scopedT("toast.success-capitalize"),
        status: "success",
      });
    }
  }

  function handleCovertToPascalCase() {
    checkIfInputIsEmpty();
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = text
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
        .replaceAll(" ", "");
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: t("components.toast.success"),
        description: scopedT("toast.success-pascal-case"),
        status: "success",
      });
    }
  }

  function handleConvertToCamelCase() {
    checkIfInputIsEmpty();
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = text
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
        .replaceAll(" ", "")
        .replace(/^[A-Z]/, (a) => a.toLowerCase());
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: t("components.toast.success"),
        description: scopedT("toast.success-camel-case"),
        status: "success",
      });
    }
  }

  function handleConvertToSnakeCase() {
    checkIfInputIsEmpty();
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = text
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase())
        .replaceAll(" ", "_");
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: t("components.toast.success"),
        description: scopedT("toast.success-snake-case"),
        status: "success",
      });
    }
  }

  function handleRemoveAccents() {
    checkIfInputIsEmpty();
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: t("components.toast.success"),
        description: scopedT("toast.success-remove-accents"),
        status: "success",
      });
    }
  }

  function handleRemoveDuplicates() {
    checkIfInputIsEmpty();
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = [...new Set(text.split(" "))].join(" ");
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast({
        title: t("components.toast.success"),
        description: scopedT("toast.success-remove-duplicates"),
        status: "success",
      });
    }
  }

  return (
    <section className="mt-8">
      <div className="flex items-center gap-2">
        <Switch id="switch" ref={switchRef} />
        <Label htmlFor="switch">{scopedT("clear-input")}</Label>
      </div>

      <div className="mt-2 grid gap-4 sm:grid-cols-2">
        <Textarea
          ref={textareaRef}
          placeholder={scopedT("placeholder.input")}
        />
        <div className="relative">
          <Textarea
            ref={textareaResultRef}
            readOnly
            placeholder={scopedT("placeholder.output")}
          />
          <CopyButton
            className="absolute right-2 top-2"
            valueToCopy={textareaResultRef.current?.value ?? ""}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Button variant="outline" onClick={handleConvertToUppercase}>
          {scopedT("actions.uppercase")}
        </Button>
        <Button variant="outline" onClick={handleConvertToLowercase}>
          {scopedT("actions.lowercase")}
        </Button>
        <Button variant="outline" onClick={handleConvertToCapitalize}>
          {scopedT("actions.capitalize")}
        </Button>
        <Button variant="outline" onClick={handleCovertToPascalCase}>
          {scopedT("actions.pascal-case")}
        </Button>
        <Button variant="outline" onClick={handleConvertToCamelCase}>
          {scopedT("actions.camel-case")}
        </Button>
        <Button variant="outline" onClick={handleConvertToSnakeCase}>
          {scopedT("actions.snake-case")}
        </Button>
        <Button variant="outline" onClick={handleRemoveAccents}>
          {scopedT("actions.remove-accents")}
        </Button>
        <Button variant="outline" onClick={handleRemoveDuplicates}>
          {scopedT("actions.remove-duplicates")}
        </Button>
      </div>
    </section>
  );
}
