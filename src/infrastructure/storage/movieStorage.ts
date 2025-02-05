import AsyncStorage from "@react-native-async-storage/async-storage";

import { Movie } from "@/src/domain/entities/Movie";

export const getFavoriteIds = async (): Promise<Movie["id"][]> => {
  try {
    const favoriteIds = await AsyncStorage.getItem("favoriteIds");

    return favoriteIds !== null ? JSON.parse(favoriteIds) : [];
  } catch (error) {
    return [];
  }
};

export const setFavoriteIds = async (id: Movie["id"]) => {
  try {
    const favoriteIds = await getFavoriteIds();

    const favoriteIdIndex = favoriteIds.findIndex(
      (favoriteId) => favoriteId === id
    );

    if (favoriteIdIndex === -1) {
      favoriteIds.push(id);
    } else {
      favoriteIds.splice(favoriteIdIndex, 1);
    }

    await AsyncStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
  } catch (error) {
    return error;
  }
};
