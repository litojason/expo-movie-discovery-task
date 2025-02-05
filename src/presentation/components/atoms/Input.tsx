import { useTheme } from "@react-navigation/native";
import { TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {}

const Input = (props: InputProps) => {
  const { colors } = useTheme();

  return (
    <TextInput
      {...props}
      placeholderTextColor={props.placeholderTextColor || colors.text}
      style={[{ color: colors.text }, props.style]}
    />
  );
};

export default Input;
