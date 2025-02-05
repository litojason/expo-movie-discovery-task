import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Movie, MOVIES } from "@/src/domain/entities/Movie";
import {
  getFavoriteIds,
  setFavoriteIds,
} from "@/src/infrastructure/storage/movieStorage";

export const loadFavoriteIds = createAsyncThunk(
  "movie/loadFavoriteIds",
  async () => {
    return await getFavoriteIds();
  }
);

export interface MovieState {
  movies: Movie[];
  favoriteIds: Movie["id"][];

  searchTitle: string;
  searchGenre: string;
}

const initialState: MovieState = {
  movies: MOVIES,
  favoriteIds: [],

  searchTitle: "",
  searchGenre: "",
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

      setFavoriteIds(action.payload);
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
  extraReducers: (builder) => {
    builder.addCase(loadFavoriteIds.fulfilled, (state, action) => {
      state.favoriteIds = action.payload;

      state.movies = state.movies.map((movie) => ({
        ...movie,
        isFavorite: action.payload.includes(movie.id),
      }));
    });
  },
});

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
