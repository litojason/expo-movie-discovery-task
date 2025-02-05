import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MainStackParamList } from "./navigation";
import MainBottomTab from "./MainBottomTab";
import MovieDetailsScreen from "../screens/MovieDetails";
import SearchScreen from "../screens/Search";

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainBottomTab" component={MainBottomTab} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
