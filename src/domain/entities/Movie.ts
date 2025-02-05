import moviesData from "../data/movies.json";

export type Movie = {
  id: number;
  title: string;
  description: string;
  releaseYear: number;
  genre: string;
  rating: number;
  isFavorite: boolean;
};

export const MOVIES: Movie[] = moviesData.movies;
export const GENRES: string[] = [
  ...new Set(moviesData.movies.map((movie) => movie.genre)),
];
