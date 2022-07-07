import { calculateLength } from "@useful-tools/utils/unitConverter";

describe("Unit Converter", () => {
  it("should convert length values", () => {
    expect(1 + 1).toBe(2);
    expect(calculateLength("kilometer", "kilometer", 1)).toBe(1);
  });
});
