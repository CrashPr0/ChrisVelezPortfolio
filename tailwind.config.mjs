/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          900: "#0f0a1e",
          800: "#1a1230",
          700: "#251a42"
        },
        accent: {
          300: "#ffb8d9",
          400: "#ff6eb4",
          500: "#e84393",
          600: "#c23070"
        },
        sky: {
          300: "#a5d8ff",
          400: "#64b5f6",
          500: "#42a5f5"
        },
        sunny: {
          300: "#ffd93d",
          400: "#ff9f43",
          500: "#ff6b6b"
        }
      },
      fontFamily: {
        sans: ["Nunito", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fredoka", "Nunito", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 12px 40px rgba(15, 10, 30, 0.5)",
        glow: "0 0 0 1px rgba(255, 110, 180, 0.3), 0 14px 40px rgba(232, 67, 147, 0.2)",
        "pop": "0 8px 30px rgba(255, 110, 180, 0.25), 0 0 60px rgba(100, 181, 246, 0.1)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};
