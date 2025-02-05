import { View } from "react-native";

import { Movie } from "@/src/domain/entities/Movie";
import MovieStatsItem from "./MovieStatsItem";

type MovieStatsProps = {
  releaseYear: Movie["releaseYear"];
  rating: Movie["rating"];
  genre: Movie["genre"];
};

const MovieStats = ({ genre, rating, releaseYear }: MovieStatsProps) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <MovieStatsItem title="Genre" value={genre} />
      <MovieStatsItem title="Rating" value={rating} />
      <MovieStatsItem title="Release Year" value={releaseYear} />
    </View>
  );
};

export default MovieStats;
