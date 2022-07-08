import { calculateLength } from "@useful-tools/utils/unitConverter";

describe("Unit Converter", () => {
  test("should convert length values", () => {
    const kilometerTests = [
      { expect: calculateLength("kilometer", "kilometer", 1), toBe: 1 },
      { expect: calculateLength("kilometer", "meter", 100), toBe: 100000 },
      { expect: calculateLength("kilometer", "centimeter", 1.5), toBe: 150000 },
      { expect: calculateLength("kilometer", "millimeter", 0.01), toBe: 10000 },
      {
        expect: calculateLength("kilometer", "micrometers", 0.00051),
        toBe: 510000,
      },
      {
        expect: calculateLength("kilometer", "nanometers", 0.00051),
        toBe: 510000000,
      },
      {
        expect: calculateLength("kilometer", "mile", 2),
        toBe: 1.243,
      },
      {
        expect: calculateLength("kilometer", "yard", 1),
        toBe: 1094,
      },
      {
        expect: calculateLength("kilometer", "foot", 1),
        toBe: 3280.84,
      },
      {
        expect: calculateLength("kilometer", "inch", 1),
        toBe: 39370,
      },
      {
        expect: calculateLength("kilometer", "nautical mile", 3.8),
        toBe: 2.052,
      },
    ];
    const meterTests = [
      { expect: calculateLength("meter", "kilometer", 15), toBe: 0.015 },
      { expect: calculateLength("meter", "meter", 100), toBe: 100 },
      { expect: calculateLength("meter", "centimeter", 23), toBe: 2300 },
      { expect: calculateLength("meter", "millimeter", 33), toBe: 33000 },
      {
        expect: calculateLength("meter", "micrometers", 2.0005),
        toBe: 2000500,
      },
      {
        expect: calculateLength("meter", "nanometers", 6.000005),
        toBe: 6000005000,
      },
      {
        expect: calculateLength("meter", "mile", 450),
        toBe: 0.28,
      },
      {
        expect: calculateLength("meter", "yard", 12),
        toBe: 13.123,
      },
      {
        expect: calculateLength("meter", "foot", 31),
        toBe: 101.706,
      },
      {
        expect: calculateLength("meter", "inch", 32),
        toBe: 1259.84,
      },
      {
        expect: calculateLength("meter", "nautical mile", 4665),
        toBe: 2.519,
      },
    ];
    const centimeterTests = [
      { expect: calculateLength("meter", "kilometer", 15), toBe: 0.015 },
      { expect: calculateLength("meter", "meter", 100), toBe: 100 },
      { expect: calculateLength("meter", "centimeter", 23), toBe: 2300 },
      { expect: calculateLength("meter", "millimeter", 33), toBe: 33000 },
      {
        expect: calculateLength("meter", "micrometers", 2.0005),
        toBe: 2000500,
      },
      {
        expect: calculateLength("meter", "nanometers", 6.000005),
        toBe: 6000005000,
      },
      {
        expect: calculateLength("meter", "mile", 450),
        toBe: 0.28,
      },
      {
        expect: calculateLength("meter", "yard", 12),
        toBe: 13.123,
      },
      {
        expect: calculateLength("meter", "foot", 31),
        toBe: 101.706,
      },
      {
        expect: calculateLength("meter", "inch", 32),
        toBe: 1259.84,
      },
      {
        expect: calculateLength("meter", "nautical mile", 4665),
        toBe: 2.519,
      },
    ];
    kilometerTests.forEach((test) => expect(test.expect).toBe(test.toBe));
    meterTests.forEach((test) => expect(test.expect).toBe(test.toBe));
  });
});
