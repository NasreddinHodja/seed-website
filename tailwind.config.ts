import Colors from "tailwindcss/colors";

module.exports = {
  theme: {
    fontFamily: {
      mono: ["Azeret Mono"],
      header: ["Monument Ext"],
    },
    extend: {
      colors: {
        white: Colors.white,
        gray: Colors.zinc,
        pdf: "#8c8c8c",
        video: "#787878",
        audio: "#646464",
        img: "#505050",
        gif: "#3c3c3c",
        txt: "#333333",
        dir: "#4d4d4d",
        installation: "#666666",
        performance: "#808080",
      },
      height: {
        "screen-dynamic": "calc(var(--vh, 1vh) * 100)",
      },
    },
  },
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
};
