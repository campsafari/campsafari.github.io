/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: ["2.25rem"],
        h2: ["1.5rem"],
        h3: ["1.2rem"],
        h4: ["1rem"],
        "title-xl": ["5rem", "1.4"],
        "title-l": ["4.375rem", "1.4"],
        "title-m": ["3.75rem", "1.2"],
        "title-s": ["2.5rem", "1.2"],
        xlarge: "1.25rem",
        large: "1.125rem",
        medium: "1rem",
        small: "0.875rem",
        tiny: "0.75rem",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            ul: {
              "line-height": "1.2rem",
            },
            "--tw-prose-bullets": "currentColor",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
