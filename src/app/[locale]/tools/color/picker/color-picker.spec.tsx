import { describe, expect, it } from "vitest";
import { render } from "~/tests/render";
import { ColorPicker } from "./color-picker";

describe("Color Picker", () => {
  it("should render all components", () => {
    const { getByDisplayValue } = render(<ColorPicker />);
    const hex = getByDisplayValue("#000000");
    const hexa = getByDisplayValue("#000000ff");
    const rgb = getByDisplayValue("rgb(0, 0, 0)");
    const rgba = getByDisplayValue("rgba(0, 0%, 0%, 1)");
    const hsl = getByDisplayValue("hsl(0, 0%, 0%)");
    const hsla = getByDisplayValue("hsla(0, 0%, 0%, 1)");
    expect(hex).toBeVisible();
    expect(hexa).toBeVisible();
    expect(rgb).toBeVisible();
    expect(rgba).toBeVisible();
    expect(hsl).toBeVisible();
    expect(hsla).toBeVisible();
  });
});
