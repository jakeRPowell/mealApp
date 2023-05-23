import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorites-context';
import MealsList from '../components/meals/MealsList';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const displayMeals = MEALS.filter((meal) => {
    return favoriteMealsCtx.ids.indexOf(meal.id) >= 0;
  });

  if (displayMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favourite meals yet</Text>
      </View>
    );
  }

  return <MealsList displayMeals={displayMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
