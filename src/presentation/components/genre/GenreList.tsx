import { View } from "react-native";

import { GENRES } from "@/src/domain/entities/Movie";
import { Text } from "../atoms";
import GenreLabel from "./GenreLabel";
import { useAppSelector } from "@/src/application/hooks/storeHooks";
import { selectSearchGenre } from "@/src/application/selectors/movieSelectors";
import { useMovieActions } from "@/src/application/hooks/useMovieActions";

const GenreList = () => {
  const searchGenre = useAppSelector(selectSearchGenre);
  const { updateSearchGenre } = useMovieActions();

  const renderGenre = (name: string) => {
    return (
      <GenreLabel
        key={name}
        isSelected={name === searchGenre}
        name={name}
        onPress={() => updateSearchGenre(name)}
      />
    );
  };

  return (
    <View style={{ gap: 8 }}>
      <Text>Genres:</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
        {GENRES.map((genre) => renderGenre(genre))}
      </View>
    </View>
  );
};

export default GenreList;
