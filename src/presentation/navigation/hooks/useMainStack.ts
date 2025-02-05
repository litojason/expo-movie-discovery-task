import { useNavigation, useRoute } from "@react-navigation/native";

import { MainStackNavigationProp, MovieDetailsRouteProp } from "../navigation";

export const useMainStackNavigation = () =>
  useNavigation<MainStackNavigationProp>();

export const useMovieDetailsRoute = () => useRoute<MovieDetailsRouteProp>();
