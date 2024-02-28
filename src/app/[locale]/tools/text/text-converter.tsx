"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import { toast } from "sonner";
import { CopyButton } from "~/components/copy-button";

import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { Textarea } from "~/components/ui/textarea";

export function TextConverter() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textareaResultRef = useRef<HTMLTextAreaElement>(null);
  const switchRef = useRef<HTMLButtonElement>(null);
  const t = useTranslations();

  function checkIfInputIsEmpty() {
    const isEmpty = textareaRef.current?.value.trim() === "";
    if (isEmpty) {
      textareaRef.current?.focus();
      throw toast.warning(t("components.toast.warning"), {
        description: t("pages.tools.text-converter.toast.required"),
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
      toast.success(t("components.toast.success"), {
        description: t("pages.tools.text-converter.toast.success-uppercase"),
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
      toast.success(t("components.toast.success"), {
        description: t("pages.tools.text-converter.toast.success-lowercase"),
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
      toast.success(t("components.toast.success"), {
        description: t("pages.tools.text-converter.toast.success-capitalize"),
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
      toast.success(t("components.toast.success"), {
        description: t("pages.tools.text-converter.toast.success-pascal-case"),
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
      toast.success(t("components.toast.success"), {
        description: t("pages.tools.text-converter.toast.success-camel-case"),
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
      toast.success(t("components.toast.success"), {
        description: t("pages.tools.text-converter.toast.success-snake-case"),
      });
    }
  }

  function handleRemoveAccents() {
    checkIfInputIsEmpty();
    if (textareaRef.current && textareaResultRef.current) {
      const text = textareaRef.current.value;
      textareaResultRef.current.value = text
        .normalize("NFD")
        .replace(/[\p{M}]/gu, "");
      if (getIfShouldClearInput()) {
        textareaRef.current.value = "";
      }
      toast.success(t("components.toast.success"), {
        description: t(
          "pages.tools.text-converter.toast.success-remove-accents",
        ),
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
      toast.success(t("components.toast.success"), {
        description: t(
          "pages.tools.text-converter.toast.success-remove-duplicates",
        ),
      });
    }
  }

  return (
    <section className="mt-8">
      <div className="flex items-center gap-2">
        <Switch id="switch" ref={switchRef} />
        <Label htmlFor="switch">
          {t("pages.tools.text-converter.clear-input")}
        </Label>
      </div>

      <div className="mt-2 grid gap-4 sm:grid-cols-2">
        <Textarea
          ref={textareaRef}
          placeholder={t("pages.tools.text-converter.placeholder.input")}
        />
        <div className="relative">
          <Textarea
            ref={textareaResultRef}
            readOnly
            placeholder={t("pages.tools.text-converter.placeholder.output")}
          />
          <CopyButton
            className="absolute right-2 top-2"
            valueToCopy={textareaResultRef.current?.value ?? ""}
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        <Button variant="outline" onClick={handleConvertToUppercase}>
          {t("pages.tools.text-converter.actions.uppercase")}
        </Button>
        <Button variant="outline" onClick={handleConvertToLowercase}>
          {t("pages.tools.text-converter.actions.lowercase")}
        </Button>
        <Button variant="outline" onClick={handleConvertToCapitalize}>
          {t("pages.tools.text-converter.actions.capitalize")}
        </Button>
        <Button variant="outline" onClick={handleCovertToPascalCase}>
          {t("pages.tools.text-converter.actions.pascal-case")}
        </Button>
        <Button variant="outline" onClick={handleConvertToCamelCase}>
          {t("pages.tools.text-converter.actions.camel-case")}
        </Button>
        <Button variant="outline" onClick={handleConvertToSnakeCase}>
          {t("pages.tools.text-converter.actions.snake-case")}
        </Button>
        <Button variant="outline" onClick={handleRemoveAccents}>
          {t("pages.tools.text-converter.actions.remove-accents")}
        </Button>
        <Button variant="outline" onClick={handleRemoveDuplicates}>
          {t("pages.tools.text-converter.actions.remove-duplicates")}
        </Button>
      </div>
    </section>
  );
}
