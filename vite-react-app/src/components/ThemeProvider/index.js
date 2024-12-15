import { useState } from "react";
import { ThemeProvider } from "styled-components";
import themes from "@/constants/themes";
import { ThemeSwitch } from "./style";

const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
      <ThemeSwitch>
        <button onClick={changeTheme}>
          {theme === "dark" ? "Light" : "Dark"} Theme
        </button>
      </ThemeSwitch>
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
