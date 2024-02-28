import { describe, expect, it } from "vitest";
import { render, userEvent, waitFor } from "~/tests/render";
import { Morse } from "./morse";

describe("Morse", () => {
  it("should render all components", () => {
    const { getByText, getByPlaceholderText } = render(<Morse />);
    const textFieldLabel = getByText("Text to morse");
    const textField = getByPlaceholderText("Enter text to encode");
    const morseFieldLabel = getByText("Morse to text");
    const morseField = getByPlaceholderText("Enter text to decode");

    expect(textFieldLabel).toBeVisible();
    expect(textField).toBeVisible();
    expect(morseFieldLabel).toBeVisible();
    expect(morseField).toBeVisible();
  });

  it("should convert some text to morse", async () => {
    const { getByPlaceholderText } = render(<Morse />);
    const textField = getByPlaceholderText("Enter text to encode");
    const morseField = getByPlaceholderText("Enter text to decode");
    userEvent.type(textField, "hi lol");

    await waitFor(() => {
      expect(morseField).toHaveTextContent(".... .. / .-.. --- .-..");
    });
  });

  it("should convert some morse code to text", async () => {
    const { getByPlaceholderText } = render(<Morse />);
    const textField = getByPlaceholderText("Enter text to encode");
    const morseField = getByPlaceholderText("Enter text to decode");

    userEvent.type(morseField, ".... .. / .-.. --- .-..");

    await waitFor(() => {
      expect(textField).toHaveTextContent("hi lol");
    });
  });
});
