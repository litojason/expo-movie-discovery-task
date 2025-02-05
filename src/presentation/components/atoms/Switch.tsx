import { Switch as RNSwitch, SwitchProps as RNSwitchProps } from "react-native";
import { useTheme } from "@react-navigation/native";

interface SwitchProps extends RNSwitchProps {}

const Switch = (props: SwitchProps) => {
  const { colors } = useTheme();

  return (
    <RNSwitch
      {...props}
      thumbColor="white"
      trackColor={{
        true: colors.primary,
        false: colors.card,
      }}
    />
  );
};

export default Switch;
