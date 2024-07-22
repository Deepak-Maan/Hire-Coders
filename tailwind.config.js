/** @type {import('tailwindcss').Config} */
tailwind.config = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "#14a800",
        "rich-black": "#111111",
        "dark-black": "#131313",
        gray: "#f4f4f4",
        "light-grey": "#E0E0E0",
        "light-gray": "#fcfcfc",
        "dark-gray": "#f6f6f6",
      },
      fontSize: {
        "custom-sm": "10px",
        "custom-md": "12px",
        "custom-lg": "28px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
      lineHeight: {
        126: "126%",
        117: "117%",
        150: "150%",
        121: "121%",
        118: "118%",
        120: "120%",
        157: "157%",
        130: "130%",
        160: "160%",
        155: "155%",
      },
      boxShadow: {
        button: "3px 3px 0px 0px #000000",
      },
      backgroundImage: {
        chat: "url('./assets/images/webp/chat-bg.webp')",
      },
    },
  },
};
