import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#1f2421",
          700: "#3d433f",
          500: "#666c68",
          300: "#a8aca9",
          200: "#cdd0ce"
        },
        paper: {
          DEFAULT: "#fbf9f4",
          warm: "#f4efe6",
          deep: "#ebe4d6"
        },
        sage: {
          50: "#f4f7f3",
          100: "#e3ebe0",
          200: "#c6d5c1",
          300: "#9eb597",
          400: "#7a9572",
          500: "#5a7853",
          600: "#456142",
          700: "#374e35",
          800: "#2c3e2b",
          900: "#1f2c1e"
        },
        cta: {
          DEFAULT: "#456142",
          hover: "#374e35",
          dark: "#2c3e2b"
        },
        warm: {
          50: "#fbf6ec",
          200: "#e8d8b8",
          400: "#c8a466",
          600: "#9a7a3e"
        }
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Source Serif Pro"', '"Lora"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"]
      },
      maxWidth: {
        prose: "65ch",
        page: "76rem",
        narrow: "60rem"
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
        card: "0 4px 16px -4px rgb(31 36 33 / 0.08), 0 2px 4px -1px rgb(31 36 33 / 0.04)",
        cardHover: "0 12px 32px -8px rgb(31 36 33 / 0.12), 0 4px 8px -2px rgb(31 36 33 / 0.06)"
      },
      backgroundImage: {
        "scrim-down": "linear-gradient(180deg, rgba(31,36,33,0.05) 0%, rgba(31,36,33,0.55) 100%)",
        "scrim-side":
          "linear-gradient(90deg, rgba(251,249,244,0.94) 0%, rgba(251,249,244,0.74) 50%, rgba(251,249,244,0.20) 100%)"
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
