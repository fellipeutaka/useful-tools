import type { DeepStringify } from "~/utils/type-helpers";

const dictionary = {
  general: {
    tools: "tools",
    pricing: "pricing",
    about: "about",
  },
  components: {
    navbar: {
      pricing: {
        "toast.title": "It's free! 😜",
        "toast.description": "This project is open source and free to use. 🥳",
      },
      links: {
        github: "My GitHub profile",
        twitter: "My Twitter profile",
      },
      search: "Search...",
      "search.placeholder": "Type a command or search",
      main: {
        tools: "tools",
        about: "about",
        github: "github",
        twitter: "twitter",
      },
      command: {
        tools: "Tools",
        theme: "Theme",
        light: "Light",
        dark: "Dark",
        system: "System",
      },
    },
    footer: "Developed by {author}. The source code is available on {github}.",
    toast: {
      success: "Success",
      error: "Error",
      warning: "Warning",
    },
    "copy-button": {
      copy: "Copy to clipboard",
      copied: "Copied to clipboard!",
    },
  },
  pages: {
    "not-found": {
      title: "Page not found",
      description:
        "The page you are looking for does not exist or has been moved. Please check the URL and try again.",
      "go-home": "Go to home page",
    },
    home: {
      title: "A collection of the best {tools}. Just for you",
      subtitle:
        "Useful Tools is a collection of free online tools. We have 100+ tools to help you in your daily life.",
      "get-started": "Get Started",
      features: {
        title: "Features",
        subtitle:
          "This project has a lot of features that will help you in your daily life.",
        cryptography: {
          title: "Cryptography",
          description: "Binary, Morse code, Hexadecimal, Base64 and more.",
        },
        text: {
          title: "Text",
          description:
            "Convert case, remove accents, remove duplicates and more.",
        },
        clock: {
          title: "Clock",
          description: "Alarm, Stopwatch, Timer and more.",
        },
        currency: {
          title: "Currency",
          description: "Convert between currencies. More than 100 currencies.",
        },
        files: {
          title: "Files",
          description: "Images, Videos, Audios, Documents and more.",
        },
        devtools: {
          title: "Developer Tools",
          description: "JSON formatter, CSS minifier, HTML minifier and more.",
        },
      },
      "open-source": {
        title: "Open Source",
        subtitle: {
          first:
            "Useful Tools is an open source project and it supports open source projects.",
          second: "The code is available on",
        },
        "stars#one": "1 star on GitHub",
        "stars#other": "{count} stars on GitHub",
      },
    },
    about: {
      title: "About",
      subtitle:
        "Useful Tools is a collection of free online tools. We have 100+ tools to help you in your daily life. This project is open source and you can contribute to it by {link}.",
      "subtitle.link": "clicking here",
      credits: {
        title: "Credits",
        topics: {
          tailwind: "For styling.",
          "radix-ui": "For the primitives.",
          "shadcn/ui": "For the components.",
          lucide: "For the icons.",
          vercel: "Where I host all my projects.",
        },
      },
      author: "Author",
    },
    tools: {
      clock: {
        title: "Clock",
      },
      stopwatch: {
        title: "Stopwatch",
        start: "Start",
        stop: "Stop",
        clear: "Clear",
      },
      "color-picker": {
        title: "Color Picker",
      },
      "random-color": {
        title: "Random Color",
        generate: "New color",
      },
      "binary-code": {
        title: "Binary Code",
        encode: "Text to binary",
        decode: "Binary to text",
      },
      "caesar-cipher": {
        title: "Caesar Cipher",
        encode: "Text to cipher",
        decode: "Cipher to text",
        key: "Key",
        actions: {
          code: "Code",
          decode: "Decode",
        },
      },
      "hex-code": {
        title: "Hex Code",
        encode: "Text to hex",
        decode: "Hex to text",
        actions: {
          code: "Code",
          decode: "Decode",
        },
      },
      "morse-code": {
        title: "Morse Code",
        encode: "Text to morse",
        decode: "Morse to text",
        actions: {
          code: "Code",
          decode: "Decode",
        },
      },
      "qr-code": {
        title: "QR Code",
        placeholder: "Enter your website, text or link here",
        hint: "(Your QR Code will be generated automatically)",
        actions: {
          download: "Download",
          share: {
            whatsapp: "Share on WhatsApp",
            twitter: "Share on Twitter",
          },
        },
      },
      "password-generator": {
        title: "Password Generator",
        placeholder: "Password",
        actions: {
          generate: "Generate",
        },
      },
      length: {
        title: "Length",
        kilometer: "Kilometer",
        meter: "Meter",
        centimeter: "Centimeter",
        millimeter: "Millimeter",
        micrometers: "Micrometers",
        nanometers: "Nanometers",
        mile: "Mile",
        yard: "Yard",
        foot: "Foot",
        inch: "Inch",
        "nautical mile": "Nautical Mile",
      },
      "css-minifier": {
        title: "CSS Minifier",
        actions: {
          minify: "Minify",
          minifying: "Minifying",
        },
        toast: {
          success: "CSS minified successfully",
          required: "Please enter some CSS to minify",
        },
      },
      "json-formatter": {
        title: "JSON Formatter",
        placeholder: "Number of spaces",
        actions: {
          format: "Format",
          formatting: "Formatting",
        },
        toast: {
          "invalid-json": "Invalid JSON",
          "invalid-number": "Please enter a valid number",
          success: "JSON formatted successfully",
          required: "Please enter some JSON to format",
        },
      },
      "text-converter": {
        title: "Text Converter",
        "clear-input": "Clear input",
        placeholder: {
          input: "Type something here...",
          output: "Result",
        },
        actions: {
          uppercase: "Convert to uppercase",
          lowercase: "Convert to lowercase",
          capitalize: "Capitalize",
          reverse: "Reverse",
          "remove-spaces": "Remove spaces",
          "remove-accents": "Remove accents",
          "remove-duplicates": "Remove duplicates",
          "remove-empty-lines": "Remove empty lines",
          "pascal-case": "Convert to Pascal case",
          "camel-case": "Convert to Camel case",
          "snake-case": "Convert to Snake case",
          "kebab-case": "Convert to Kebab case",
          "remove-special-characters": "Remove special characters",
        },
        toast: {
          "success-uppercase": "Converted to uppercase successfully",
          "success-lowercase": "Converted to lowercase successfully",
          "success-capitalize": "Capitalized successfully",
          "success-reverse": "Reversed successfully",
          "success-remove-spaces": "Spaces removed successfully",
          "success-remove-accents": "Accents removed successfully",
          "success-remove-duplicates": "Duplicates removed successfully",
          "success-remove-empty-lines": "Empty lines removed successfully",
          "success-pascal-case": "Converted to Pascal case successfully",
          "success-camel-case": "Converted to Camel case successfully",
          "success-snake-case": "Converted to Snake case successfully",
          "success-kebab-case": "Converted to Kebab case successfully",
          "success-remove-special-characters":
            "Special characters removed successfully",
          required: "Please enter some text to convert",
        },
      },
      currency: {
        title: "Currency",
        source: "Source",
        result: "{from} equals to {to}",
        placeholder: "Search currency...",
        "not-found": "No currency found.",
      },
      todo: {
        title: "Todo",
        placeholder: "Add new task",
        actions: {
          create: "Create new todo",
          delete: "Delete task",
        },
      },
    },
  },
} as const;

export type Dictionary = DeepStringify<typeof dictionary>;

export default dictionary;
