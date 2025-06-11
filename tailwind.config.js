module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        yellowtail: "var(--font-yellowtail)",
      },
    },
  },
  plugins: [],
};
