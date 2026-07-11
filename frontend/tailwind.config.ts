import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        atlas: {
          ink: "#16181d",
          muted: "#636a75",
          line: "#d7dce2",
          panel: "#f7f8f5",
          signal: "#1d766f",
          caution: "#ad6f1a",
          accent: "#305f9f"
        }
      },
      boxShadow: {
        focus: "0 0 0 3px rgba(29, 118, 111, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
