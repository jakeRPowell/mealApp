import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ListRenderItem,
  useAnimatedValue,
} from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

type Meal = {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
};

const MealsOverview = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === catId
  ).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem: ListRenderItem<Meal> = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('MealsDetail', { itemId: item.id });
    };

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      onPress: pressHandler,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View>
      <FlatList
        data={displayMeals}
        renderItem={renderMealItem}
        keyExtractor={(meal) => meal.id}
      />
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({});
