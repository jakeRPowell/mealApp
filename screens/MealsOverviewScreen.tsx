import { StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealsList from '../components/meals/MealsList';

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

  return <MealsList displayMeals={displayMeals} />;
};

export default MealsOverview;

const styles = StyleSheet.create({});
