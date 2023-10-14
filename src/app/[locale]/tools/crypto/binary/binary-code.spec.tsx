import userEvent from "@testing-library/user-event";

import { render, waitFor } from "~/testing/test-utils";

import { BinaryCode } from "./binary-code";

describe("Binary code", () => {
  it("should render all components", () => {
    const { container, getByText } = render(<BinaryCode />);
    const title = getByText("Binary Code");
    const textFieldLabel = getByText("Text to code:");
    const textField = container.querySelector("textarea#text");
    const binaryFieldLabel = getByText("Binary to decode:");
    const binaryField = container.querySelector("textarea#binary");
    expect(title).toBeInTheDocument();
    expect(textFieldLabel).toBeInTheDocument();
    expect(textField).toBeInTheDocument();
    expect(binaryFieldLabel).toBeInTheDocument();
    expect(binaryField).toBeInTheDocument();
  });
  it("should convert some text to binary code", async () => {
    const { container, getByDisplayValue } = render(<BinaryCode />);
    const textField =
      container.querySelector<HTMLTextAreaElement>("textarea#text")!;
    userEvent.type(textField, "binary code");
    await waitFor(() => {
      expect(
        getByDisplayValue(
          "0110001001101001011011100110000101110010011110010010000001100011011011110110010001100101",
        ),
      ).toBeInTheDocument();
    });
  });
  it("should convert some binary code to text", async () => {
    const { getByDisplayValue, container } = render(<BinaryCode />);
    const binaryField =
      container.querySelector<HTMLTextAreaElement>("textarea#binary")!;
    userEvent.type(
      binaryField,
      "0110001001101001011011100110000101110010011110010010000001100011011011110110010001100101",
    );
    await waitFor(() => {
      expect(getByDisplayValue("binary code")).toBeInTheDocument();
    });
  });
});
