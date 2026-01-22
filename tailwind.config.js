/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#ffffff",
        secondary: "#ff0000",
        TextPrimary: "#070211",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
      },
      maxWidth: {
        330: "1320px",
      },
      height: {
        150: "600px",
        154: "616px",
        152.25: "609px",
        112.5: "450px",
        120.5: "482px",
        88: "352px",
        90: "360px",
        106: "424px",
        140: "140px",
        18: "72px",
        14: "56px",
      },
      width: {
        106: "424px",
        88: "352px",
        140: "140px",
        16: "64px",
        41.75: "167px",
      },
      borderWidth: {
        10: "10px",
      },
      spacing: {
        30: "120px",
        20: "80px",
        18: "72px",
      },
      fontSize: {
        "20xl": "20px",
      },
      lineHeight: {
        7.5: "30px",
        14: "56px",
        22: "88px",
      },
    },
  },
  plugins: [],
};
