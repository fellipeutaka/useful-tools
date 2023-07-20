import type { EditorProps } from "@monaco-editor/react";

export const EDITOR_OPTIONS: EditorProps["options"] = {
  cursorBlinking: "smooth",
  tabSize: 2,
  minimap: { enabled: false },
};
