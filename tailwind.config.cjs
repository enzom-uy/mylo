/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        primary: "#681277",
        secondary: "#850d2e",
        black: "#0b020c",
        "black-75": "#484149",
        "black-50": "#858186",
        "black-25": "#c2bfc2",
        "black-10": "#e7e6e7",
        "black-5": "#f2f2f3",
        white: "#ebf0f6",
        error: "#ab0935",
      },
      fontSize: {
        paragraph: "1.313rem",
        "heading-1": "5.5rem",
        "heading-2": "4.125rem",
        "heading-3": "3.125rem",
        "heading-4": "2.313rem",
        "heading-5": "1.75rem",
        "heading-6": "1.563rem",
      },
      boxShadow: {
        "light-shadow": "0px 11px 16px rgba(0, 0, 0, 0.10%)",
        "light-shadow": "0px 0px 10px rgba(0, 0, 0, 0.25%)",
      },
    },
  },
  plugins: [],
};
