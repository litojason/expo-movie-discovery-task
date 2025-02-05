import { Screen, ThemeSwitch } from "../components";
import { useAppSelector } from "@/src/application/hooks/storeHooks";
import { selectTheme } from "@/src/application/selectors/themeSelectors";
import { useThemeActions } from "@/src/application/hooks/useThemeActions";

const SettingsScreen = () => {
  const theme = useAppSelector(selectTheme);
  const { updateTheme } = useThemeActions();

  const toggleSwitch = () => {
    updateTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Screen
      isBottomTabScreen
      style={{ alignItems: "center", justifyContent: "center", padding: 16 }}
    >
      <ThemeSwitch value={theme === "light"} onValueChange={toggleSwitch} />
    </Screen>
  );
};

export default SettingsScreen;
