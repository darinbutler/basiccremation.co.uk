import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Ink — body text (slightly warmer than pure black)
        ink: {
          900: "#1a2420",
          800: "#2a3530",
          700: "#3d4842",
          500: "#5e6962",
          400: "#7e8a82",
          300: "#a8b1ab",
          200: "#cdd2cf",
          100: "#e8ebe9"
        },
        // Paper — backgrounds (warmer cream, more saturated)
        paper: {
          DEFAULT: "#fcfaf5",
          warm: "#f5efe2",
          deep: "#ebe3cf"
        },
        // Sage — primary brand colour (brightened)
        sage: {
          50: "#eff5ed",
          100: "#dceadb",
          200: "#b8d3b5",
          300: "#8fb78b",
          400: "#669764",
          500: "#4d7d4c",
          600: "#3c653b",
          700: "#305030",
          800: "#283e28",
          900: "#1d2d1d"
        },
        // Salmon coral — warm accent (like COL's salmon highlights)
        coral: {
          50: "#fff4f0",
          100: "#ffe6dc",
          200: "#ffc8b3",
          300: "#fc9e88",
          400: "#f5755c",
          500: "#e95838",
          600: "#cc4220",
          700: "#a8341a",
          800: "#852918"
        },
        // CTA — using the brighter sage for primary buttons
        cta: {
          DEFAULT: "#4d7d4c",
          hover: "#3c653b",
          dark: "#305030"
        }
      },
      fontFamily: {
        serif: ['"Lora"', '"Source Serif 4"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"]
      },
      maxWidth: {
        prose: "65ch",
        page: "76rem",
        narrow: "60rem"
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
        card: "0 4px 20px -4px rgb(26 36 32 / 0.10), 0 2px 6px -2px rgb(26 36 32 / 0.05)",
        cardHover: "0 16px 40px -10px rgb(26 36 32 / 0.16), 0 6px 12px -3px rgb(26 36 32 / 0.08)",
        ringSage: "0 0 0 4px rgb(143 183 139 / 0.30)"
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
