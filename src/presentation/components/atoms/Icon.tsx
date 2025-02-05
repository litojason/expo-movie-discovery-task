import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

export type IconProps = {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  size?: number;
  color?: string;
  onPress?: () => void;
};

const Icon = ({ name, size = 24, color, onPress }: IconProps) => {
  const { colors } = useTheme();

  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color || colors.text}
      onPress={onPress}
    />
  );
};

export default Icon;
