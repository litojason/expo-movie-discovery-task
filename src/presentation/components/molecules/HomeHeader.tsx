import { View } from "react-native";

// import { useMainStackNavigation } from "@/src/presentation/navigation/MainStack";
import { Icon, Text } from "../atoms";
import { useMainStackNavigation } from "../../navigation/hooks/useMainStack";

const HomeHeader = () => {
  const navigation = useMainStackNavigation();

  const handleSearchIconPress = () => {
    navigation.navigate("Search");
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingBottom: 16,
        gap: 8,
      }}
    >
      <Text>Movie App</Text>

      <Icon name="magnify" onPress={handleSearchIconPress} />
    </View>
  );
};

export default HomeHeader;
