import { useEffect } from "react";

import { HomeHeader, MovieList, Screen } from "../components";
import { useAppSelector } from "@/src/application/hooks/storeHooks";
import { selectMovies } from "@/src/application/selectors/movieSelectors";
import { useMovieActions } from "@/src/application/hooks/useMovieActions";

const HomeScreen = () => {
  const movies = useAppSelector(selectMovies);
  const { getMoviesWithFavorite } = useMovieActions();

  useEffect(() => {
    getMoviesWithFavorite();
  }, []);

  return (
    <Screen isBottomTabScreen>
      <HomeHeader />

      <MovieList movies={movies} />
    </Screen>
  );
};

export default HomeScreen;
