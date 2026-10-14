import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // laub = Grün aus dem Firmenlogo (500 abgedunkelt für lesbare Buttons),
        // erde = Rot aus dem Firmenlogo. bone/ink/kies bleiben unverändert.
        bone: "#F7F6F2",
        creme: "#ECEAE3",
        ink: "#14181A",
        laub: {
          50: "#ECF7EE",
          100: "#D0ECD6",
          200: "#A2D8AE",
          300: "#6CC07F",
          400: "#34A352",
          500: "#1A7F35",
          600: "#156A2C",
          700: "#115623",
          800: "#0D441C",
          900: "#093115"
        },
        erde: {
          50: "#FDEDEB",
          100: "#FAD3CF",
          200: "#F4A7A0",
          300: "#EC7B71",
          400: "#E24C40",
          500: "#D1281E",
          600: "#AF2018",
          700: "#8C1A13",
          800: "#6B140F",
          900: "#4A0E0A"
        },
        kies: {
          50: "#F4F4F2",
          100: "#E6E6E2",
          200: "#CDCEC7",
          300: "#B0B2A9",
          400: "#94968C",
          500: "#7C7F78",
          600: "#63665F",
          700: "#4C4E48",
          800: "#363832",
          900: "#23261F"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
