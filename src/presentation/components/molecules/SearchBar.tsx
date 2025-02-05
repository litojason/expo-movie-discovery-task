import { StyleSheet, TextInputProps, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import { Icon, Input } from "../atoms";

interface SearchBarProps extends TextInputProps {}

const SearchBar = (props: SearchBarProps) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <Icon name="magnify" />
      <Input placeholder="Search by title..." style={{ flex: 1 }} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    gap: 8,
    borderRadius: 4,
    borderWidth: 1,
  },
});

export default SearchBar;
