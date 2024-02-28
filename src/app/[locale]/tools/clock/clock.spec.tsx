import { describe, expect, it } from "vitest";
import { render, waitFor } from "~/tests/render";
import { delay } from "~/utils";
import { Clock } from "./clock";

describe("Clock", () => {
  it("should render all components", () => {
    const { getByText } = render(<Clock />);
    const time = getByText(new Date().toLocaleTimeString());
    expect(time).toBeVisible();
  });

  it("should update time", async () => {
    const { getByText } = render(<Clock />);
    const currentTime = new Date().toLocaleTimeString();
    const time = getByText(currentTime);

    await delay(1000);

    await waitFor(() => {
      expect(time).not.toHaveTextContent(currentTime);
    });
  });
});
