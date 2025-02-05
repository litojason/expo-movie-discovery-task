import { ScrollView } from "react-native";

import { useMovieDetailsRoute } from "../navigation/hooks/useMainStack";
import { MainHeader, MovieStats, Screen, Text } from "../components";
import { useAppSelector } from "@/src/application/hooks/storeHooks";
import { selectMovieById } from "@/src/application/selectors/movieSelectors";

const MovieDetailsScreen = () => {
  const { id } = useMovieDetailsRoute().params;
  const details = useAppSelector(selectMovieById(id));

  if (!details) {
    return (
      <Screen isSafeArea>
        <MainHeader title="Details" />
      </Screen>
    );
  }

  const { title, description, releaseYear, rating, genre } = details;

  return (
    <Screen isSafeArea>
      <MainHeader title="Details" />

      <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>
        <Text>{title}</Text>
        <Text>{description}</Text>

        <MovieStats releaseYear={releaseYear} rating={rating} genre={genre} />
      </ScrollView>
    </Screen>
  );
};

export default MovieDetailsScreen;
