import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0.5" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0.5" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out forwards",
        slideInRight: "slideInRight 0.3s ease-out forwards",
      },
      backgroundImage: {
        authPage: "url('../public/assets/bg-image-auth.png')",
      },
      colors: {
        textPrimaryColor: "#0C0D0D",
        textTitlesColor: "#1C2834",
        textSubTitlesColor: "#495D69",
        textColorButton: "#141C24",
        textDefaultGreen: "#C1CF16",
        bgDefaultColor: "#E3E3E3",
      },
    },
  },
  plugins: [],
};
export default config;
