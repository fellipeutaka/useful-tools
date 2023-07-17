"use client";

import { useCallback, useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export function PasswordGenerator() {
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
    <section>
      <Input value={password} readOnly placeholder="Password" />
      <Button onClick={handleGeneratePassword}>Generate</Button>
      <Button onClick={handleCopyPasswordToClipboard}>Copy</Button>
    </section>
  );
}
