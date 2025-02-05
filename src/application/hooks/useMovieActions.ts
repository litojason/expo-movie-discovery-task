import { loadFavoriteIds, movieActions } from "../reducers/movieReducer";
import { useAppDispatch } from "./storeHooks";

export const useMovieActions = () => {
  const dispatch = useAppDispatch();

  const updateSearchTitle = (title: string) => {
    dispatch(movieActions.setSearchTitle(title));
  };

  const updateSearchGenre = (genre: string) => {
    dispatch(movieActions.setSearchGenre(genre));
  };

  const getMoviesWithFavorite = () => {
    dispatch(loadFavoriteIds());
  };

  const updateFavorite = (id: number) => {
    dispatch(movieActions.setFavorite(id));
  };

  return {
    updateSearchTitle,
    updateSearchGenre,
    getMoviesWithFavorite,
    updateFavorite,
  };
};
