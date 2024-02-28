import userEvent from "@testing-library/user-event";

import { describe, expect, it } from "vitest";
import { render, waitFor } from "~/tests/render";
import { BinaryCode } from "./binary-code";

describe("Binary code", () => {
  it("should render all components", () => {
    const { getByText, getByPlaceholderText } = render(<BinaryCode />);
    const textFieldLabel = getByText("Text to binary");
    const textField = getByPlaceholderText(
      "Some text to encode to binary code",
    );
    const binaryFieldLabel = getByText("Binary to text");
    const binaryField = getByPlaceholderText(
      "Some binary code to decode to text",
    );
    expect(textFieldLabel).toBeVisible();
    expect(textField).toBeVisible();
    expect(binaryFieldLabel).toBeVisible();
    expect(binaryField).toBeVisible();
  });

  it("should convert some text to binary code", async () => {
    const { getByPlaceholderText } = render(<BinaryCode />);
    const textField = getByPlaceholderText(
      "Some text to encode to binary code",
    );
    const binaryField = getByPlaceholderText(
      "Some binary code to decode to text",
    );
    userEvent.type(textField, "hi lol");
    await waitFor(() => {
      expect(binaryField).toHaveTextContent(
        "01101000 01101001 00100000 01101100 01101111 01101100",
      );
    });
  });

  it("should convert some binary code to text", async () => {
    const { getByPlaceholderText } = render(<BinaryCode />);
    const textField = getByPlaceholderText(
      "Some text to encode to binary code",
    );
    const binaryField = getByPlaceholderText(
      "Some binary code to decode to text",
    );
    userEvent.type(
      binaryField,
      "01101000 01101001 00100000 01101100 01101111 01101100",
    );
    await waitFor(() => {
      expect(textField).toHaveTextContent("hi lol");
    });
  });
});
