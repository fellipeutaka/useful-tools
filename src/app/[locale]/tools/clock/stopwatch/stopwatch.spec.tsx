import { describe, expect, it } from "vitest";
import { render, waitFor } from "~/tests/render";
import { delay } from "~/utils";
import { Stopwatch } from "./stopwatch";

describe("Stopwatch", () => {
  it("should render all components", () => {
    const { getByText } = render(<Stopwatch />);
    const time = getByText("00:00:00");
    const startButton = getByText("Start");
    const clearButton = getByText("Clear");
    expect(time).toBeVisible();
    expect(startButton).toBeVisible();
    expect(clearButton).toBeVisible();
  });

  it("should start the stopwatch", async () => {
    const { getByText } = render(<Stopwatch />);
    const startButton = getByText("Start");
    const time = getByText("00:00:00");
    startButton.click();
    await delay(100);
    expect(time).toHaveTextContent(/00:00:[1-9]0/);
  });

  it("should stop the stopwatch", async () => {
    const { getByText } = render(<Stopwatch />);
    const startButton = getByText("Start");
    const time = getByText("00:00:00");
    startButton.click();
    await delay(100);
    expect(time).toHaveTextContent(/00:00:[1-9]0/);
    expect(startButton).toHaveTextContent("Stop");
    startButton.click();
    await delay(100);
    expect(time).toHaveTextContent(/00:00:[1-9]0/);
  });

  it("should clear the stopwatch", async () => {
    const { getByText } = render(<Stopwatch />);
    const startButton = getByText("Start");
    const clearButton = getByText("Clear");
    const time = getByText("00:00:00");
    startButton.click();
    await delay(100);
    expect(time).toHaveTextContent(/00:00:[1-9]0/);
    clearButton.click();
    await waitFor(() => {
      expect(time).toHaveTextContent("00:00:00");
    });
  });
});
