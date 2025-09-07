export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#fbcfe8",   // hồng nhạt
          DEFAULT: "#f472b6", // hồng trung tính
          dark: "#d5c7d7ff",    // tím đậm
        }
      },
    },
  },
  plugins: [],
}
