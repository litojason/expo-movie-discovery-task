import { Pressable, StyleSheet, View } from "react-native";

import { Movie } from "@/src/domain/entities/Movie";
// import { useMainStackNavigation } from "@/src/presentation/navigation/MainStack";
import { Text } from "../atoms";
import FavoriteIcon from "./FavoriteIcon";
import { useMovieActions } from "@/src/application/hooks/useMovieActions";
import { useTheme } from "@react-navigation/native";
import { useMainStackNavigation } from "../../navigation/hooks/useMainStack";

type MovieCardProps = {
  data: Movie;
};

const MovieCard = ({ data }: MovieCardProps) => {
  const { colors } = useTheme();
  const navigation = useMainStackNavigation();

  const { updateFavorite } = useMovieActions();

  const { id, title, genre, releaseYear, rating, isFavorite } = data;

  const handleOnPress = () => {
    navigation.navigate("MovieDetails", { id });
  };

  const handleFavoritePress = () => {
    updateFavorite(id);
  };

  return (
    <Pressable
      onPress={handleOnPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.card,
        },
        styles.container,
      ]}
    >
      <View>
        <Text>{title}</Text>
        <Text>{genre}</Text>
        <Text>{releaseYear}</Text>
        <Text>{rating}</Text>
      </View>

      <View>
        <FavoriteIcon isFavorite={isFavorite} onPress={handleFavoritePress} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 8,
  },
});

export default MovieCard;
