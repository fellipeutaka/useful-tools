import { toast } from "sonner";
import { describe, expect, it, vi } from "vitest";
import { render, userEvent, waitFor } from "~/tests/render";
import { CaesarCipher } from "./caesar-cipher";

describe("Caesar cipher", () => {
  it("should render all components", () => {
    const { getByText, getByPlaceholderText } = render(<CaesarCipher />);
    const keyField = getByPlaceholderText("0-25");
    const keyFieldLabel = getByText("Key");
    const textFieldLabel = getByText("Text to cipher");
    const textField = getByPlaceholderText("Enter text to encode");
    const caesarCipherFieldLabel = getByText("Cipher to text");
    const caesarCipherField = getByPlaceholderText(
      "Enter caesar cipher to decode",
    );

    expect(keyFieldLabel).toBeVisible();
    expect(keyField).toBeVisible();
    expect(textFieldLabel).toBeVisible();
    expect(textField).toBeVisible();
    expect(caesarCipherFieldLabel).toBeVisible();
    expect(caesarCipherField).toBeVisible();
  });

  it("should convert some text to caesar cipher", async () => {
    const { getByPlaceholderText } = render(<CaesarCipher />);
    const textField = getByPlaceholderText("Enter text to encode");
    const caesarCipherField = getByPlaceholderText(
      "Enter caesar cipher to decode",
    );

    userEvent.type(textField, "hi lol");

    await waitFor(() => {
      expect(caesarCipherField).toHaveTextContent("kl#oro");
    });
  });

  it("should convert some caesar cipher to text", async () => {
    const { getByPlaceholderText } = render(<CaesarCipher />);
    const textField = getByPlaceholderText("Enter text to encode");
    const caesarCipherField = getByPlaceholderText(
      "Enter caesar cipher to decode",
    );

    userEvent.type(caesarCipherField, "kl#oro");

    await waitFor(() => {
      expect(textField).toHaveTextContent("hi lol");
    });
  });

  it("should show a warning toast when the key is invalid", async () => {
    const toastSpy = vi.spyOn(toast, "warning");
    const { getByPlaceholderText } = render(<CaesarCipher />);
    const keyField = getByPlaceholderText("0-25");

    userEvent.type(keyField, "e");

    await waitFor(() => {
      expect(toastSpy).toHaveBeenCalledOnce();
      expect(toastSpy).toHaveBeenCalledWith("Warning", {
        description: "Please type a number between 0 - 25",
      });
    });
  });

  it("should change the key", async () => {
    const { getByPlaceholderText } = render(<CaesarCipher />);
    const keyField = getByPlaceholderText("0-25");

    userEvent.type(keyField, "{backspace}6");

    await waitFor(() => {
      expect(keyField).toHaveValue("6");
    });
  });
});
