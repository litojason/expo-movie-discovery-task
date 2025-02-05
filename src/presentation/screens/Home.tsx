import { selectMovies } from "@/src/application/selectors/movieSelectors";
import { HomeHeader, MovieList, Screen } from "../components";
import { useAppSelector } from "@/src/application/hooks/storeHooks";

const HomeScreen = () => {
  const movies = useAppSelector(selectMovies);

  return (
    <Screen isBottomTabScreen>
      <HomeHeader />

      <MovieList movies={movies} />
    </Screen>
  );
};

export default HomeScreen;
