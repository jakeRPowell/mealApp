import {
  StyleSheet,
  FlatList,
  ListRenderItem,
  SafeAreaView,
} from 'react-native';
import { useContext, useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';

import Step from '../components/Step';
import MealDetailHeader from '../components/meals/MealDetailHeader';
import IconButton from '../components/ui/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

type Step = {
  id: string;
  step: string;
};

const MealDetailScreen = ({ route, navigation }) => {
  const details = route.params;
  const data = MEALS.find((meal) => meal.id === details.itemId);
  const favoriteMealsCtx = useContext(FavoritesContext);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(data.id);

  const renderSteps: ListRenderItem<Step> = (step) => {
    return <Step step={step.item} />;
  };

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(data.id);
    } else {
      favoriteMealsCtx.addFavorite(data.id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data.title,
      headerRight: () => (
        <IconButton
          name={mealIsFavorite ? 'heart' : 'md-heart-outline'}
          onPress={changeFavoriteStatusHandler}
          color="brown"
        />
      ),
    });
  }, [mealIsFavorite]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data.steps}
        renderItem={renderSteps}
        ListHeaderComponent={MealDetailHeader(data)}
      />
    </SafeAreaView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
