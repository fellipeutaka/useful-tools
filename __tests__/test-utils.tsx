import { render, type RenderOptions } from "@testing-library/react";

import { Providers } from "~/contexts/providers";

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) =>
  render(ui, {
    wrapper: ({ children }) => <Providers locale="en">{children}</Providers>,
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
