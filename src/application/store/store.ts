import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "../reducers/movieReducer";
import themeReducer from "../reducers/themeReducer";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    theme: themeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
