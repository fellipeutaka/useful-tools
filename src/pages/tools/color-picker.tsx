import Layout from "@useful-tools/components/Layout";
import { styled } from "@useful-tools/stitches";
import { useState } from "react";

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const seo = {
  title: "Color Picker | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function ColorPicker() {
  const [color, setColor] = useState("#000000");

  async function handleCopyColorToClipboard() {
    try {
      await navigator.clipboard.writeText(color);
      // toast.success('Copied!')
    } catch (err) {
      console.log(err);
      // toast.error("Error copying color to clipboard")
    }
  }

  return (
    <Layout seo={seo}>
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
    </Layout>
  );
}
