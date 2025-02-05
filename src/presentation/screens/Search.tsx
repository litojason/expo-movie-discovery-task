import { View } from "react-native";

import {
  GenreList,
  MainHeader,
  MovieList,
  Screen,
  SearchBar,
} from "../components";
import { useAppSelector } from "@/src/application/hooks/storeHooks";
import {
  selectFilteredMovies,
  selectSearchTitle,
} from "@/src/application/selectors/movieSelectors";
import { useMovieActions } from "@/src/application/hooks/useMovieActions";

const SearchScreen = () => {
  const searchTitle = useAppSelector(selectSearchTitle);
  const searches = useAppSelector(selectFilteredMovies);

  const { updateSearchTitle } = useMovieActions();

  return (
    <Screen isBottomTabScreen>
      <MainHeader title="Search Movies" />

      <View style={{ padding: 16, gap: 16 }}>
        <SearchBar
          defaultValue={searchTitle}
          onChangeText={updateSearchTitle}
        />

        <GenreList />
      </View>

      <MovieList movies={searches} />
    </Screen>
  );
};

export default SearchScreen;
