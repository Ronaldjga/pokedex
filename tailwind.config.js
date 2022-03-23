module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    './src/patterns/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellowPrimary: "#F2BF5E",
        darkBluePrimary: "#022026",
        grayPimary: "#022026",
        bluePrimary: "#4B9EBF",
        bluishGray: "#405F73",
        ghostType: "#260273",
        fightType: "#400101",
        fairyType: "#E75D92",
        steelType: "#9DA0C4",
        bugType: "#93A603",
        dragonType: "#9D00FF",
        iceType: "#89EFF3",
        normalType: "#D9AC84",
        flyingType: "#A291FA",
        grassType: "#C4FA66",
        darkType: "#2A3340",
        groundType: "#D97904",
        poisonType: "#6B2EA7",
        psychicType: "#FF00A6",
        waterType: "#00B8FC",
        fireType: "#FF1D23",
        rockType: "#BF8B2A",
        electricType: "#F2E85E"
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui',],
        serif: ['ui-serif', 'Georgia',],
        mono: ['ui-monospace', 'SFMono-Regular',],
        h1Title: ['Cinzel',],
        h2Title: ['"Domine"',],
        body: ['"Work Sans"',],
      }
    },
  },
  plugins: [],
}