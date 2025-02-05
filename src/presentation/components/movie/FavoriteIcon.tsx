import { useTheme } from "@react-navigation/native";
import Icon, { IconProps } from "../atoms/Icon";

type FavoriteIconProps = {
  isFavorite: boolean;
  onPress: () => void;
};

const FavoriteIcon = ({ isFavorite, onPress }: FavoriteIconProps) => {
  const { colors } = useTheme();

  const iconName: IconProps["name"] = isFavorite ? "heart" : "heart-outline";

  return <Icon name={iconName} color={colors.primary} onPress={onPress} />;
};

export default FavoriteIcon;
