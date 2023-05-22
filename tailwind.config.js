/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "cyan-blur": "#40FFF6",
        "orange-blur": "#FF9201",
        "white-blur": "#F2F2F2",
        "orange-blur-bg": "#FF7B40",
        "blue-bg": "#191826",
        "font-white": "#FCFAF9",
        "orange-bg": "#FA7453",
        "Iphone-btn": "#191826",
        "android-btn": "#FCFAF9",
        "orange-md": "#FF7B40",
      },
      height: {
        blur: "281.4px",
        btn: "61px",
        circle: "384px",
      },
      width: {
        blur: "281.4px",
        btn: "296px",
        circle: "384px",
      },
      opacity: {
        blue: "0.28",
        orange: "0.15",
      },
      blur: {
        circle: "67.957px",
      },
      inset: {
        blue: "-104px",
        orange: "94px",
        bg: "159px",
        "orange-blur-y": "-112px",
        "orange-blur-x": "-254px",
      },
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
      fontSize: {
        tagline: ["40px", "48px"],
        "tagline-md": ["64px", "64px"],
        "tagline-lg": [" 88px", " 88px"],
        description: ["16px", "26px"],
        "description-md": ["18px", "28px"],
        "description-lg": ["20px", "34px"],
        title: ["32px", "40px"],
        "title-lg": ["40px", "52px"],
        description1: ["18px", "28px"],
        price: ["65px", "52px"],
        month: ["20px", "32px"],
        btn: ["18px", "32px"],
        note: ["16px", "26px"],
      },
    },
    plugins: [],
  },
};
