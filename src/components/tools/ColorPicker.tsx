import { styled } from "@useful-tools/stitches";
import { useState } from "react";

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

export default function ColorPicker() {
  const [color, setColor] = useState("#000000");

  function handleCopyColorToClipboard() {
    navigator.clipboard.writeText(color);
    // toast.success('Copied!')
  }

  return (
    <Container>
      <h1>{color}</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="button" onClick={handleCopyColorToClipboard}>
        Copy to clipboard
      </button>
    </Container>
  );
}
