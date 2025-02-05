import { FlatList, StyleSheet } from "react-native";

import { Movie } from "@/src/domain/entities/Movie";
import MovieCard from "./MovieCard";

type MovieListProps = {
  movies: Movie[];
};

const MovieList = ({ movies }: MovieListProps) => {
  const renderMovieCard = ({ item }: { item: Movie }) => {
    return <MovieCard data={item} />;
  };

  return (
    <FlatList
      data={movies}
      keyExtractor={(movie) => movie.id.toString()}
      renderItem={renderMovieCard}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 8,
    gap: 16,
  },
});

export default MovieList;
