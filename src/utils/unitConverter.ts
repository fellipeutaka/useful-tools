type LengthUnits =
  | "kilometer"
  | "meter"
  | "centimeter"
  | "millimeter"
  | "micrometers"
  | "nanometers"
  | "mile"
  | "yard"
  | "foot"
  | "inch"
  | "nautical mile";

type Length = [
  {
    from: LengthUnits;
    to: { name: LengthUnits; calculate: (value: number) => number }[];
  }
];

const length: Length = [
  {
    from: "kilometer",
    to: [
      { name: "kilometer", calculate: (kilometer: number) => kilometer },
      { name: "meter", calculate: (kilometer: number) => kilometer * 1000 },
      {
        name: "centimeter",
        calculate: (kilometer: number) => kilometer * 100000,
      },
      {
        name: "millimeter",
        calculate: (kilometer: number) => Math.round(kilometer * 10 ** 6),
      },
      {
        name: "micrometers",
        calculate: (kilometer: number) => Math.round(kilometer * 10 ** 9),
      },
      {
        name: "nanometers",
        calculate: (kilometer: number) => Math.round(kilometer * 10 ** 12),
      },
      {
        name: "mile",
        calculate: (kilometer: number) =>
          Number((kilometer / 1.609).toFixed(3)),
      },
      {
        name: "yard",
        calculate: (kilometer: number) => Number((kilometer * 1094).toFixed(3)),
      },
      {
        name: "foot",
        calculate: (kilometer: number) =>
          Number((kilometer * 3280.84).toFixed(3)),
      },
      {
        name: "inch",
        calculate: (kilometer: number) =>
          Number((kilometer * 39370).toFixed(3)),
      },
      {
        name: "nautical mile",
        calculate: (kilometer: number) =>
          Number((kilometer / 1.852).toFixed(3)),
      },
    ],
  },
  {
    from: "meter",
    to: [
      { name: "kilometer", calculate: (meter: number) => meter / 1000 },
      { name: "meter", calculate: (meter: number) => meter },
      {
        name: "centimeter",
        calculate: (meter: number) => meter * 100,
      },
      {
        name: "millimeter",
        calculate: (meter: number) => meter * 1000,
      },
      {
        name: "micrometers",
        calculate: (meter: number) => Math.round(meter * 10 ** 6),
      },
      {
        name: "nanometers",
        calculate: (meter: number) => Math.round(meter * 10 ** 9),
      },
      {
        name: "mile",
        calculate: (meter: number) => Number((meter / 1609).toFixed(3)),
      },
      {
        name: "yard",
        calculate: (meter: number) => Number((meter * 1.09361).toFixed(3)),
      },
      {
        name: "foot",
        calculate: (meter: number) => Number((meter * 3.28084).toFixed(3)),
      },
      {
        name: "inch",
        calculate: (meter: number) => Number((meter * 39.37).toFixed(3)),
      },
      {
        name: "nautical mile",
        calculate: (meter: number) => Number((meter / 1852).toFixed(3)),
      },
    ],
  },
];

export function calculateLength(
  from: LengthUnits,
  to: LengthUnits,
  value: number
) {
  return length
    .find((item) => item.from === from)
    ?.to.find((item) => item.name === to)
    ?.calculate(value);
}
