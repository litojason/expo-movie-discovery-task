import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export const selectMovies = (state: RootState) => state.movie.movies;
export const selectMovieById = (id: number) => (state: RootState) =>
  state.movie.movies.find((movie) => movie.id === id);
export const selectFavorites = createSelector([selectMovies], (movies) =>
  movies.filter((movie) => movie.isFavorite)
);

export const selectSearchTitle = (state: RootState) => state.movie.searchTitle;
export const selectSearchGenre = (state: RootState) => state.movie.searchGenre;

// Memoized Selectors
export const selectFilteredMovies = createSelector(
  [selectMovies, selectSearchTitle, selectSearchGenre],
  (movies, searchTitle, searchGenre) => {
    return movies.filter((movie) => {
      const matchTitle = searchTitle
        ? movie.title.toLowerCase().includes(searchTitle.toLowerCase())
        : true;

      const matchGenre = searchGenre ? movie.genre === searchGenre : true;

      return matchTitle && matchGenre;
    });
  }
);
