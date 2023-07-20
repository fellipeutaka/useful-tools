import { REPOSITORY_URL } from "./repository-info";

export const navItems = {
  mainNav: [
    {
      title: "Tools",
      href: "/tools",
    },
    {
      title: "About",
      href: "/about",
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
      ],
    },
  ],
};
