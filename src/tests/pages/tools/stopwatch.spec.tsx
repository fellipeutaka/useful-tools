import { render } from "@testing-library/react";
import Stopwatch from "@useful-tools/pages/tools/stopwatch";

describe("Stopwatch", () => {
  it("should render all components", () => {
    const { getByText } = render(<Stopwatch />);
    const title = getByText("Stopwatch");
    const time = getByText("00:00:00");
    const startButton = getByText("Start");
    const clearButton = getByText("Clear");
    expect(title).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(startButton).toBeInTheDocument();
    expect(clearButton).toBeInTheDocument();
  });
});
