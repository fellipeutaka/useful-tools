import { describe, expect, it } from "vitest";
import { render, userEvent, waitFor } from "~/tests/render";
import { Hex } from "./hex";

describe("Hex", () => {
  it("should render all components", () => {
    const { getByText, getByPlaceholderText } = render(<Hex />);
    const textFieldLabel = getByText("Text to hex");
    const textField = getByPlaceholderText("Enter text to encode");
    const hexFieldLabel = getByText("Hex to text");
    const hexField = getByPlaceholderText("Enter hex to decode");

    expect(textFieldLabel).toBeVisible();
    expect(textField).toBeVisible();
    expect(hexFieldLabel).toBeVisible();
    expect(hexField).toBeVisible();
  });

  it("should convert some text to hex", async () => {
    const { getByPlaceholderText } = render(<Hex />);
    const textField = getByPlaceholderText("Enter text to encode");
    const hexField = getByPlaceholderText("Enter hex to decode");

    userEvent.type(textField, "hi lol");

    await waitFor(() => {
      expect(hexField).toHaveTextContent("6869206c6f6c");
    });
  });

  it("should convert some caesar cipher to text", async () => {
    const { getByPlaceholderText } = render(<Hex />);
    const textField = getByPlaceholderText("Enter text to encode");
    const hexField = getByPlaceholderText("Enter hex to decode");

    userEvent.type(hexField, "6869206c6f6c");

    await waitFor(() => {
      expect(textField).toHaveTextContent("hi lol");
    });
  });
});
