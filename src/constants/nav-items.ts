import { REPOSITORY_URL } from "./repository-info";

export type NavItems = {
  mainNav: {
    title: string;
    href: string;
    external: boolean;
  }[];
  sidebarNav: {
    title: string;
    items: {
      title: string;
      href: string;
      items: unknown[];
    }[];
  }[];
};

export const navItems: NavItems = {
  mainNav: [
    {
      title: "Tools",
      href: "/tools",
      external: false,
    },
    {
      title: "About",
      href: "/about",
      external: false,
    },
    {
      title: "GitHub",
      href: REPOSITORY_URL,
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/fellipeutaka",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Tools",
      items: [
        {
          title: "Clock",
          href: "/tools/clock",
          items: [],
        },
        {
          title: "Stopwatch",
          href: "/tools/clock/stopwatch",
          items: [],
        },
        {
          title: "Color Picker",
          href: "/tools/color/picker",
          items: [],
        },
        {
          title: "Random Color",
          href: "/tools/color/random",
          items: [],
        },
        {
          title: "Binary Code",
          href: "/tools/crypto/binary",
          items: [],
        },
        {
          title: "Caesar Cipher",
          href: "/tools/crypto/caesar-cipher",
          items: [],
        },
        {
          title: "Hex Code",
          href: "/tools/crypto/hex",
          items: [],
        },
        {
          title: "Morse Code",
          href: "/tools/crypto/morse",
          items: [],
        },
        {
          title: "QR Code",
          href: "/tools/crypto/qr-code",
          items: [],
        },
        {
          title: "Password Generator",
          href: "/tools/security/password-generator",
          items: [],
        },
        {
          title: "Length",
          href: "/tools/units/length",
          items: [],
        },
        {
          title: "CSS Minifier",
          href: "/tools/dev/css",
          items: [],
        },
        {
          title: "JSON Formatter",
          href: "/tools/dev/json",
          items: [],
        },
        {
          title: "Text Converter",
          href: "/tools/text",
          items: [],
        },
        {
          title: "Currency Converter",
          href: "/tools/currency",
          items: [],
        },
        {
          title: "Todo List",
          href: "/tools/todo",
          items: [],
        },
      ],
    },
  ],
};
