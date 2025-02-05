import { Pressable, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import { Text } from "../atoms";

type GenreLabelProps = {
  isSelected?: boolean;
  name: string;
  onPress: () => void;
};

const GenreLabel = ({ isSelected = false, name, onPress }: GenreLabelProps) => {
  const { colors } = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1,
          borderColor: isSelected ? colors.primary : colors.text,
          backgroundColor: isSelected ? colors.primary : colors.card,
        },
        styles.container,
      ]}
    >
      <Text style={{ color: isSelected ? "white" : colors.text }}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default GenreLabel;
