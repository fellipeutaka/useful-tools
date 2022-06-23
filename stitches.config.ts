import { createStitches, PropertyValue, ScaleValue } from "@stitches/react";

export const { styled, getCssText, globalCss, keyframes } = createStitches({
  theme: {},
  utils: {
    pt: (value: ScaleValue<"space">) => ({
      paddingTop: value,
    }),
    pr: (value: ScaleValue<"space">) => ({
      paddingRight: value,
    }),
    pb: (value: ScaleValue<"space">) => ({
      paddingBottom: value,
    }),
    pl: (value: ScaleValue<"space">) => ({
      paddingLeft: value,
    }),
    px: (value: ScaleValue<"space">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<"space">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    mt: (value: ScaleValue<"space">) => ({
      marginTop: value,
    }),
    mr: (value: ScaleValue<"space">) => ({
      marginRight: value,
    }),
    mb: (value: ScaleValue<"space">) => ({
      marginBottom: value,
    }),
    ml: (value: ScaleValue<"space">) => ({
      marginLeft: value,
    }),
    mx: (value: ScaleValue<"space">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<"space">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    bgColor: (value: PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),
  },
});

globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif",
  },
  body: {
    backgroundColor: "Black",
    color: "White",
  },
})();
