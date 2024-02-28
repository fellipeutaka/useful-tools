import { siteConfig } from "./site";

export const navItems = {
  mainNav: [
    {
      id: "tools",
      title: "Tools",
      href: "/tools",
      external: false,
    },
    {
      id: "about",
      title: "About",
      href: "/about",
      external: false,
    },
    {
      id: "github",
      title: "GitHub",
      href: siteConfig.links.github,
      external: true,
    },
    {
      id: "twitter",
      title: "Twitter",
      href: "https://twitter.com/fellipeutaka",
      external: true,
    },
  ],
  sidebarNav: [
    {
      id: "tools",
      title: "Tools",
      items: [
        {
          id: "clock",
          title: "Clock",
          href: "/tools/clock",
          items: [],
        },
        {
          id: "stopwatch",
          title: "Stopwatch",
          href: "/tools/clock/stopwatch",
          items: [],
        },
        {
          id: "color-picker",
          title: "Color Picker",
          href: "/tools/color/picker",
          items: [],
        },
        {
          id: "random-color",
          title: "Random Color",
          href: "/tools/color/random",
          items: [],
        },
        {
          id: "binary-code",
          title: "Binary Code",
          href: "/tools/crypto/binary",
          items: [],
        },
        {
          id: "caesar-cipher",
          title: "Caesar Cipher",
          href: "/tools/crypto/caesar-cipher",
          items: [],
        },
        {
          id: "hex-code",
          title: "Hex Code",
          href: "/tools/crypto/hex",
          items: [],
        },
        {
          id: "morse-code",
          title: "Morse Code",
          href: "/tools/crypto/morse",
          items: [],
        },
        {
          id: "qr-code",
          title: "QR Code",
          href: "/tools/crypto/qr-code",
          items: [],
        },
        {
          id: "password-generator",
          title: "Password Generator",
          href: "/tools/security/password-generator",
          items: [],
        },
        {
          id: "length",
          title: "Length",
          href: "/tools/units/length",
          items: [],
        },
        {
          id: "css-minifier",
          title: "CSS Minifier",
          href: "/tools/dev/css",
          items: [],
        },
        {
          id: "json-formatter",
          title: "JSON Formatter",
          href: "/tools/dev/json",
          items: [],
        },
        {
          id: "text-converter",
          title: "Text Converter",
          href: "/tools/text",
          items: [],
        },
        {
          id: "currency",
          title: "Currency Converter",
          href: "/tools/currency",
          items: [],
        },
        {
          id: "todo",
          title: "Todo List",
          href: "/tools/todo",
          items: [],
        },
      ],
    },
  ],
} as const;
