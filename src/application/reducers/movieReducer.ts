import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Movie, MOVIES } from "@/src/domain/entities/Movie";

export interface MovieState {
  movies: Movie[];
  favorites: Movie[];

  searchTitle: string;
  searchGenre: string;
  searches: Movie[];
}

const initialState: MovieState = {
  movies: MOVIES,
  favorites: [],

  searchTitle: "",
  searchGenre: "",
  searches: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<Movie["id"]>) => {
      const movieIndex = state.movies.findIndex(
        (movie) => movie.id === action.payload
      );

      state.movies[movieIndex].isFavorite =
        !state.movies[movieIndex].isFavorite;
    },

    setSearchTitle: (state, action: PayloadAction<Movie["title"]>) => {
      state.searchTitle = action.payload;
    },

    setSearchGenre: (state, action: PayloadAction<Movie["genre"]>) => {
      // To remove genre selection
      if (state.searchGenre === action.payload) {
        state.searchGenre = "";
        return;
      }
      state.searchGenre = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
