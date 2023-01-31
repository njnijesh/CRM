/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cst-purple": {
          600: "#7e3afa",
          800: "#5521B5",
        },
        "cst-grey": {
          50: "#F9FAFB",
          200: "#E5E7EB",
          400: "#9CA3AF",
          500: "#6B7280",
          900: "#111928",
        },
      },
    },
  },
  plugins: [],
};
