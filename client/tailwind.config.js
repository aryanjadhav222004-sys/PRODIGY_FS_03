export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#1E293B",
        accent: "#F97316",
        background: "#F8FAFC",
        success: "#22C55E",
        danger: "#EF4444",
        text: "#0F172A",
      },
      spacing: {
        "128": "32rem",
      },
      borderRadius: {
        "xl": "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
}