import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { useTheme } from "@react-navigation/native";

interface TextProps extends RNTextProps {
  variant?: "h1" | "h2" | "body" | "label";
  weight?: "semibold" | "regular";
}

const Text = ({
  variant = "body",
  weight = "regular",
  ...props
}: TextProps) => {
  const { colors } = useTheme();

  return (
    <RNText {...props} style={[{ color: colors.text }, props.style]}>
      {props.children}
    </RNText>
  );
};

export default Text;
