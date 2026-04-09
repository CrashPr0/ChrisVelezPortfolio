/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          900: "#0a0a0a",
          800: "#141414",
          700: "#1c1c1c"
        },
        accent: {
          300: "#75f0ff",
          400: "#3ad2f2",
          500: "#1ca8d8",
          600: "#1279a4"
        }
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "Helvetica", "Arial", "system-ui", "sans-serif"],
        display: ["Inter", "Helvetica Neue", "Helvetica", "Arial", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0, 0, 0, 0.5)"
      },
      borderRadius: {
        "4xl": "0.75rem"
      }
    }
  },
  plugins: []
};
