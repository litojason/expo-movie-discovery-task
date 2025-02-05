import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type MainBottomTabParamList = {
  Home: undefined;
  Favorite: undefined;
  Settings: undefined;
};

export type MainStackParamList = {
  MainBottomTab: NavigatorScreenParams<MainBottomTabParamList>;
  MovieDetails: { id: number };
  Search: undefined;
};
export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;
export type MovieDetailsRouteProp = RouteProp<
  MainStackParamList,
  "MovieDetails"
>;
