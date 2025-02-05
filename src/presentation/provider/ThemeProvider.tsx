import { ThemeProvider as RNThemeProvider } from "@react-navigation/native";

import { darkTheme, lightTheme } from "../constants/theme";
import { useAppSelector } from "@/src/application/hooks/storeHooks";
import { selectTheme } from "@/src/application/selectors/themeSelectors";

interface ThemeProviderProps extends React.PropsWithChildren {}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useAppSelector(selectTheme);

  return (
    <RNThemeProvider value={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </RNThemeProvider>
  );
};

export default ThemeProvider;
