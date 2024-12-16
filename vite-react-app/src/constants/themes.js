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
  headerBg: "transparent",
  bodyBg1: "hsl(214, 47%, 23%)",
  bodyBg2: "hsl(237, 49%, 15%)",
  contentText: "white",
  buttonBg: "white",
  buttonText: "hsl(229, 25%, 31%)",
  buttonOutlineText: "white",
};

const themes = {
  dark: {
    ...defaultColors,
  },
  light: {
    ...defaultColors,
    contentText: "hsl(229, 25%, 31%)",
    buttonBg: "hsl(229, 25%, 31%)",
    buttonText: "white",
    buttonOutlineText: "hsl(229, 25%, 31%)",
    headerOutline: "hsl(214, 47%, 23%)",
    headerBg: "hsl(214, 47%, 23%)",
    bodyBg1: "#eee",
    bodyBg2: "#ddd",
  },
};

export default themes;
