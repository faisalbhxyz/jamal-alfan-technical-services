import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#011640",
          900: "#022868",
          800: "#033A82",
          700: "#1A4A88",
          600: "#3D6494",
        },
        brand: {
          sky: "#079CE0",
          royal: "#022868",
          accent: "#079CE0",
          "accent-dark": "#0685BE",
          "accent-soft": "#E6F6FC",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "var(--font-arabic)",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-sans)",
          "var(--font-arabic)",
          "system-ui",
          "sans-serif",
        ],
        arabic: ["var(--font-arabic)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 50px -24px rgba(2, 40, 104, 0.35)",
        float: "0 12px 40px -12px rgba(7, 156, 224, 0.45)",
      },
      backgroundImage: {
        "hero-veil":
          "linear-gradient(105deg, rgba(0,8,24,0.78) 0%, rgba(0,10,28,0.70) 46%, rgba(0,8,20,0.62) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
