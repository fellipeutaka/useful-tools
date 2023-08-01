import { tv } from "tailwind-variants";

import { typography } from "~/styles/typography";

export const TodoListStyles = {
  Title: tv({
    base: typography.h4,
    variants: {
      isCompleted: {
        true: "line-through",
      },
    },
  }),
};
