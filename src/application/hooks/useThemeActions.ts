import { themeActions, ThemeState } from "../reducers/themeReducer";
import { useAppDispatch } from "./storeHooks";

export const useThemeActions = () => {
  const dispatch = useAppDispatch();

  const updateTheme = (theme: ThemeState["theme"]) => {
    dispatch(themeActions.setTheme(theme));
  };

  return { updateTheme };
};
