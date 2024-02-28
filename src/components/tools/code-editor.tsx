"use client";

import { Editor, type EditorProps } from "@monaco-editor/react";
import { useTheme } from "next-themes";

import { Icons } from "../icons";
import { TextareaStyles } from "../ui/textarea";

export const EDITOR_OPTIONS: EditorProps["options"] = {
  cursorBlinking: "smooth",
  tabSize: 2,
  minimap: { enabled: false },
};

export function CodeEditor({
  options = EDITOR_OPTIONS,
  className,
  ...props
}: EditorProps) {
  const { theme } = useTheme();

  return (
    <Editor
      className={TextareaStyles({ className })}
      loading={<Icons.Loader className="size-6 animate-spin" />}
      options={{
        ...EDITOR_OPTIONS,
        ...options,
      }}
      theme={theme === "light" ? "vs-light" : "vs-dark"}
      {...props}
    />
  );
}
