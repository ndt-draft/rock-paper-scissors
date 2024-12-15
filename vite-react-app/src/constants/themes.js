const defaultColors = {
  scissors1: "hsl(39, 89%, 49%)",
  scissors2: "hsl(40, 84%, 53%)",
  paper1: "hsl(40, 84%, 53%)",
  paper2: "hsl(40, 84%, 53%)",
  rock1: "hsl(40, 84%, 53%)",
  rock2: "hsl(40, 84%, 53%)",
  spock1: "hsl(40, 84%, 53%)",
  spock2: "hsl(40, 84%, 53%)",
  lizard2: "hsl(40, 84%, 53%)",
  lizard2: "hsl(40, 84%, 53%)",

  darkText: "hsl(229, 25%, 31%)",
  scoreText: "hsl(229, 64%, 46%)",
  headerOutline: "hsl(217, 16%, 45%)",
  bodyBg1: "hsl(214, 47%, 23%)",
  bodyBg2: "hsl(237, 49%, 15%)",
  contentText: "white",
};

const themes = {
  dark: {
    ...defaultColors,
  },
  white: {
    ...defaultColors,
    contentText: "hsl(229, 25%, 31%)",
    bodyBg1: "white",
    bodyBg2: "white",
  },
};

export default themes;
