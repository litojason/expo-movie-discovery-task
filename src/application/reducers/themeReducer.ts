import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  theme: "light" | "dark";
}

const initialState: ThemeState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState["theme"]>) => {
      state.theme = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
