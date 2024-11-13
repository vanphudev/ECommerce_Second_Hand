export default {
   prefix: "tws-",
   content: ["./index.html", "./src/v1/**/*.{js,ts,jsx,tsx}"],
   theme: {
      screens: {
         sm: "480px",
         md: "768px",
         lg: "976px",
         xl: "1440px",
      },
      colors: {
         purple: "#55018D",
         yellow: "#FAC126",
         blue: "#57BCF9",
         "dark-purple": "#5F0987",
         "light-purple-01": "#6401A6",
         "forest-green": "#00613D",
         "dark-gray-01": "#6E6E6E",
         "light-purple-02": "#F0DBFF",
         red: "#FF1616",
         gray: "#ABABAB",
         "light-green": "#2DC258",
         teal: "#26AA99",
         pink: "#F6688E",
         white: "#FFFFFF",
         "light-yellow": "#FFFA5F",
         black: "#000000",
         orange: "#FF5D3E",
         "dark-orange": "#FF0000",
         "light-blue": "#1260D9",
         "dark-blue": "#005D98",
         "dark-gray-02": "#646464",
         "dark-red": "#E71313",
      },
      fontFamily: {
         sans: ["Nunito", "sans-serif"],
         serif: ["Nunito", "serif"],
         inter: ["Inter", "serif"]
      },
      extend: {
         spacing: {
            128: "32rem",
            144: "36rem",
         },
         borderRadius: {
            "4xl": "2rem",
         },
      },
   },
};
