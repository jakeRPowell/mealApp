import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

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

const MealsOverview = ({ route }) => {
  const { categoryId } = route.params;
  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMealItem: ListRenderItem<Meal> = ({ item }) => {
    return <MealItem title={item.title} />;
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
