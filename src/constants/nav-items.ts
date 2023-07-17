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
          title: "Calculator",
          href: "/tools/calculator",
          items: [],
        },
        {
          title: "Color picker",
          href: "/tools/color/picker",
          items: [],
        },
        {
          title: "Random color",
          href: "/tools/color/random",
          items: [],
        },
        {
          title: "Alarm",
          href: "/tools/clock/alarm",
          items: [],
        },
        {
          title: "Stopwatch",
          href: "/tools/clock/stopwatch",
          items: [],
        },
        {
          title: "Time",
          href: "/tools/clock/time",
          items: [],
        },
      ],
    },
  ],
};
