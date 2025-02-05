import { View } from "react-native";

import { Text } from "../atoms";

type MovieStatsItemProps = {
  title: string;
  value: string | number;
};

const MovieStatsItem = ({ title, value }: MovieStatsItemProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default MovieStatsItem;
