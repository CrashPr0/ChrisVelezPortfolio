/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          900: "#070b17",
          800: "#0d1222",
          700: "#121a30"
        },
        accent: {
          300: "#75f0ff",
          400: "#3ad2f2",
          500: "#1ca8d8",
          600: "#1279a4"
        },
        hologram: {
          400: "#8f8dff",
          500: "#6b77ff",
          600: "#4d5fd9"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 12px 40px rgba(8, 14, 34, 0.42)",
        glow: "0 0 0 1px rgba(84, 194, 255, 0.22), 0 14px 40px rgba(18, 105, 170, 0.32)"
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(122, 166, 207, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(122, 166, 207, 0.08) 1px, transparent 1px)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};
