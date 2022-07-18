import Layout from "@useful-tools/components/Layout";
import { styled } from "@useful-tools/stitches";
import { useCallback, useEffect, useState } from "react";

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const seo = {
  title: "Password Generator | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");

  function handleGeneratePassword() {
    const randomPassword = window.crypto.randomUUID().split("-")[0];
    setPassword(randomPassword);
  }

  const handleCopyPasswordToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(password);
      // toast.success("Copied!")
    } catch (err) {
      console.log(err);
      // toast.error("Error copying password to clipboard")
    }
  }, [password]);

  useEffect(() => {
    function keyboardListener(e: KeyboardEvent) {
      const keyPressed = e.code;
      const keys = {
        Space: handleGeneratePassword,
        KeyC: handleCopyPasswordToClipboard,
      };
      if (keys[keyPressed as keyof typeof keys]) {
        keys[keyPressed as keyof typeof keys]();
      }
    }

    document.addEventListener("keydown", keyboardListener);

    return () => {
      document.removeEventListener("keydown", keyboardListener);
    };
  }, [handleCopyPasswordToClipboard]);

  return (
    <Layout seo={seo}>
      <Container>
        <h1>Password Generator</h1>
        <input type="text" value={password} readOnly placeholder="Password" />
        <button type="button" onClick={handleGeneratePassword}>
          Generate
        </button>
        <button type="button" onClick={handleCopyPasswordToClipboard}>
          Copy
        </button>
      </Container>
    </Layout>
  );
}
