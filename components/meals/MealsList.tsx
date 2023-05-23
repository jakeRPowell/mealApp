import React from 'react';
import { FlatList, View, ListRenderItem } from 'react-native';
import MealItem from './MealItem';
import Meal from '../../interfaces/meal';
import { useNavigation } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      MealsDetail: { itemId: string };
    }
  }
}

function MealsList({ displayMeals }) {
  const navigation = useNavigation();

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
}

export default MealsList;
