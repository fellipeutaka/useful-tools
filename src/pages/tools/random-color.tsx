import { useCallback, useEffect, useRef, useState } from "react";

import Layout from "@useful-tools/components/Layout";
import { styled } from "@useful-tools/stitches";

const seo = {
  title: "Random Color | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  const containerRef = useRef<HTMLDivElement>(null);

  const Container = styled("main", {
    width: "100%",
    height: "100vh",
    display: "grid",
    placeItems: "center",
    backgroundColor: color,
    variants: {
      textColor: {
        light: {
          color: "#FFFFFF",
        },
        dark: {
          color: "#000000",
        },
      },
    },
    defaultVariants: {
      textColor: "dark",
    },
  });

  const handleGenerateNewColor = useCallback(() => {
    setColor("#" + Math.random().toString(16).slice(-6));
  }, []);

  const handleCopyColorToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(color);
      // toast.success('Copied!')
    } catch (err) {
      console.log(err);
      // toast.error("Error copying color to clipboard")
    }
  }, [color]);

  useEffect(() => {
    function keyboardListener(e: KeyboardEvent) {
      const keyPressed = e.code;
      const keys = {
        Space: handleGenerateNewColor,
        KeyC: handleCopyColorToClipboard,
      };
      if (keys[keyPressed as keyof typeof keys]) {
        keys[keyPressed as keyof typeof keys]();
      }
    }

    document.addEventListener("keydown", keyboardListener);

    return () => {
      document.removeEventListener("keydown", keyboardListener);
    };
  }, [handleGenerateNewColor, handleCopyColorToClipboard]);

  function colorIsDarkness() {
    const bytesOfColor = color.split("");
    const red = parseInt(bytesOfColor[1] + bytesOfColor[2], 16);
    const green = parseInt(bytesOfColor[3] + bytesOfColor[4], 16);
    const blue = parseInt(bytesOfColor[5] + bytesOfColor[6], 16);
    const luminosity = (red * 299 + green * 587 + blue * 114) / 1000;
    const isDark = luminosity < 128;
    return isDark;
  }

  return (
    <Layout seo={seo}>
      <Container
        textColor={colorIsDarkness() ? "light" : "dark"}
        ref={containerRef}
      >
        <h1>{color}</h1>
        <button type="button" onClick={handleGenerateNewColor}>
          New color
        </button>
        <button type="button" onClick={handleCopyColorToClipboard}>
          Copy to clipboard
        </button>
      </Container>
    </Layout>
  );
}
