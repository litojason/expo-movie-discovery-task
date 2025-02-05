import { SwitchProps, View } from "react-native";

import { Switch, Text } from "../atoms";

interface ThemeSwitchProps extends SwitchProps {}

const ThemeSwitch = ({ ...props }: ThemeSwitchProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <Text>Dark</Text>
      <Switch {...props} />
      <Text>Light</Text>
    </View>
  );
};

export default ThemeSwitch;
