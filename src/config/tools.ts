export const tools = [
  {
    category: "Clock",
    tools: [
      {
        title: "Alarm",
        description:
          "Schedule alarms to prompt you at specific times for your important events.",
        href: "/tools/clock/alarm",
        releasedAt: null,
      },
      {
        title: "Stopwatch",
        description:
          "Utilize a straightforward stopwatch to measure elapsed time.",
        href: "/tools/clock/stopwatch",
        releasedAt: new Date("06/27/2022"),
      },
      {
        title: "Timer",
        description:
          "Set timers to manage your tasks and activities efficiently.",
        href: "/tools/clock/timer",
        releasedAt: null,
      },
      {
        title: "Local Clock",
        description:
          "Configure a personalized local clock to stay synchronized with time.",
        href: "/tools/clock",
        releasedAt: new Date("06/28/2022"),
      },
      {
        title: "Global Clock",
        description:
          "Set up a world clock to stay aware of various time zones.",
        href: "/tools/clock",
        releasedAt: null,
      },
    ],
  },
  {
    category: "Color",
    tools: [
      {
        title: "Picker",
        description:
          "Use a color picker tool to select and identify colors effortlessly.",
        href: "/tools/color/picker",
        releasedAt: new Date("06/23/2022"),
      },
      {
        title: "Random",
        description:
          "Generate random colors for creative projects or inspiration.",
        href: "/tools/color/random",
        releasedAt: new Date("06/23/2022"),
      },
      {
        title: "Gradient Generator",
        description:
          "Create gradient color combinations to enhance visual designs.",
        href: "/tools/color/gradient",
        releasedAt: null,
      },
    ],
  },
  {
    category: "Cryptography",
    tools: [
      {
        title: "Binary Code",
        description:
          "Encode and decode text using binary code for secure communication.",
        href: "/tools/crypto/binary",
        releasedAt: new Date("07/02/2022"),
      },
      {
        title: "Caesar Cipher",
        description:
          "Encrypt and decrypt text using the Caesar cipher technique.",
        href: "/tools/crypto/caesar-cipher",
        releasedAt: new Date("07/04/2022"),
      },
      {
        title: "Hex Code",
        description:
          "Convert text to and from hexadecimal format for data manipulation.",
        href: "/tools/crypto/hex",
        releasedAt: new Date("07/04/2022"),
      },
      {
        title: "Morse Code",
        description:
          "Encode and decode messages using Morse code for discreet communication.",
        href: "/tools/crypto/morse",
        releasedAt: new Date("07/04/2022"),
      },
      {
        title: "QR Code",
        description: "Generate QR codes for easy sharing of information.",
        href: "/tools/crypto/qr-code",
        releasedAt: new Date("06/26/2022"),
      },
      {
        title: "Barcode",
        description:
          "Create a barcode for efficient product identification and tracking.",
        href: "/tools/crypto/barcode",
        releasedAt: null,
      },
    ],
  },
  {
    category: "Currency",
    tools: [
      {
        title: "Currency converter",
        description:
          "Convert currencies accurately for financial calculations and transactions.",
        href: "/tools/currency",
        releasedAt: new Date("07/24/2023"),
      },
    ],
  },
  {
    category: "Developer Tools",
    tools: [
      {
        title: "CSS Minifier",
        description:
          "Minimize CSS code to enhance web page loading performance.",
        href: "/tools/dev/css",
        releasedAt: new Date("07/20/2023"),
      },
      {
        title: "JSON Formatter",
        description:
          "Organize and format JSON data for improved readability and debugging.",
        href: "/tools/dev/json",
        releasedAt: new Date("07/20/2023"),
      },
    ],
  },
  {
    category: "Security",
    tools: [
      {
        title: "Password Generator",
        description:
          "Generate strong and secure passwords to safeguard your accounts.",
        href: "/tools/security/password-generator",
        releasedAt: new Date("06/27/2022"),
      },
    ],
  },
  {
    category: "Text",
    tools: [
      {
        title: "Text converter",
        description:
          "Perform various text transformations, such as case conversion and accent removal.",
        href: "/tools/text",
        releasedAt: new Date("07/21/2023"),
      },
    ],
  },
  {
    category: "Todo",
    tools: [
      {
        title: "Todo List",
        description:
          "Manage your tasks and to-dos efficiently using a comprehensive task list.",
        href: "/tools/todo",
        releasedAt: new Date("08/01/2023"),
      },
    ],
  },
  {
    category: "Units",
    tools: [
      {
        title: "Length",
        description:
          "Convert between different length units for accurate measurements.",
        href: "/tools/units/length",
        releasedAt: new Date("07/15/2022"),
      },
      {
        title: "Area",
        description:
          "Perform conversions between various area units for spatial calculations.",
        href: "/tools/units/length",
        releasedAt: null,
      },
      {
        title: "Volume",
        description:
          "Convert volume units for accurate fluid or space measurements.",
        href: "/tools/units/length",
        releasedAt: null,
      },
      {
        title: "Temperature",
        description: "Convert temperature values between different scales.",
        href: "/tools/units/length",
        releasedAt: null,
      },
      {
        title: "Mass",
        description:
          "Perform mass unit conversions for precise weight measurements.",
        href: "/tools/units/length",
        releasedAt: null,
      },
      {
        title: "Time",
        description:
          "Convert time units to manage schedules and durations effectively.",
        href: "/tools/units/length",
        releasedAt: null,
      },
      {
        title: "Speed",
        description:
          "Calculate speed conversions for motion-related calculations.",
        href: "/tools/units/length",
        releasedAt: null,
      },
      {
        title: "Pressure",
        description:
          "Convert pressure units for engineering and scientific purposes.",
        href: "/tools/units/length",
        releasedAt: null,
      },
      {
        title: "Frequency",
        description: "Perform frequency unit conversions for signal analysis.",
        href: "/tools/units/length",
        releasedAt: null,
      },
      {
        title: "Energy",
        description:
          "Convert energy units for scientific and practical energy calculations.",
        href: "/tools/units/length",
        releasedAt: null,
      },
      {
        title: "Digital Storage",
        description:
          "Convert data storage units to manage digital content effectively.",
        href: "/tools/units/length",
        releasedAt: null,
      },
      {
        title: "Data Transfer Rate",
        description:
          "Convert data transfer rate units for networking and data transmission calculations.",
        href: "/tools/units/length",
        releasedAt: null,
      },
    ],
  },
];

export type Tool = (typeof tools)[number]["tools"][number];
