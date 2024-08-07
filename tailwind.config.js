/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: "15px",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "960px",
        xl: "1140px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "Poppins",
      secondary: "DM Sans",
    },
    extend: {
      colors: {
        primary: {
          title: "#CCCCCC",
          hover: "#eee",
        },
        lightContent: "#A7A7A7",
        cart: "#363636",
      },
      backgroundImage: {
        "text-gradient": "linear-gradient(to right, #7F00FF, #E100FF)",
      },
    },
  },
  plugins: [],
};
