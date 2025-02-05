import { DefaultTheme, DarkTheme, Theme } from "@react-navigation/native";

export const lightTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3C4DDB",
    background: "#F4F6FC",
    text: "#30323D",
    card: "white",
  },
  fonts: {
    ...DefaultTheme.fonts,
  },
};

export const darkTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: "#3C4DDB",
    background: "#000000",
    text: "#F4F6FC",
    card: "#121212",
  },
  fonts: {
    ...DarkTheme.fonts,
  },
};
