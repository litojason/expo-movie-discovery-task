import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainBottomTabParamList } from "./navigation";
import { Icon } from "../components";
import { IconProps } from "../components/atoms/Icon";
import HomeScreen from "../screens/Home";
import FavoriteScreen from "../screens/Favorite";
import SettingsScreen from "../screens/Settings";

const Tab = createBottomTabNavigator<MainBottomTabParamList>();

const MainBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: {},

        tabBarIcon: ({ focused, color, size }) => {
          let iconName: IconProps["name"] = "home";

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favorite") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "cog" : "cog-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainBottomTab;
