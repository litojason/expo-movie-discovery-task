import { MovieList, Screen } from "../components";
import { useAppSelector } from "@/src/application/hooks/storeHooks";
import { selectFavorites } from "@/src/application/selectors/movieSelectors";

const FavoriteScreen = () => {
  const favorites = useAppSelector(selectFavorites);

  return (
    <Screen isBottomTabScreen>
      <MovieList movies={favorites} />
    </Screen>
  );
};

export default FavoriteScreen;
