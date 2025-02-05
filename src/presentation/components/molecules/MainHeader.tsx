import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Icon, Text } from "../atoms";

type MainHeaderProps = {
  title: string;
};

const MainHeader = ({ title }: MainHeaderProps) => {
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingBottom: 16,
        gap: 8,
      }}
    >
      <Icon name="chevron-left" onPress={handleBackButtonPress} />
      <Text>{title}</Text>
    </View>
  );
};

export default MainHeader;
