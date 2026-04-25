import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#1a1d24",
          700: "#3a3f4a",
          500: "#5a6072",
          300: "#9aa0b0"
        },
        paper: {
          DEFAULT: "#fafaf7",
          warm: "#f5f3ee"
        },
        accent: {
          DEFAULT: "#3a5a4a",
          dark: "#2a4438",
          light: "#e8efe9"
        },
        urgent: {
          DEFAULT: "#b34a3a",
          dark: "#8a3729"
        }
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Source Serif Pro"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"]
      },
      maxWidth: {
        prose: "65ch",
        page: "72rem"
      }
    }
  },
  plugins: []
};

export default config;
