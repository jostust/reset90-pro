/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        panel: "#0a0d10",
        line: "#1a1e22",
        text: "#ffffff",
        muted: "#b8c0cc",
        accent: {
          pink: "#FF7A9E",
          blue: "#3B82F6"
        }
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        panel: "0 10px 30px rgba(0,0,0,.35)"
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
