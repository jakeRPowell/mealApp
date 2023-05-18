import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ListRenderItem,
  ScrollView,
  Button,
  SafeAreaView,
} from 'react-native';
import { useContext, useLayoutEffect, useState } from 'react';
import { MEALS } from '../data/dummy-data';
import ShadowCard from '../components/ShadowCard';
import renderIcons from '../utils/renderIcons';
import Ingredients from '../components/Ingredients';
import Step from '../components/Step';
import MealDetailHeader from '../components/MealDetailHeader';
import Title from '../components/ui/Title';
import IconButton from '../components/ui/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

type Step = {
  id: string;
  step: string;
};

const MealDetailScreen = ({ route, navigation }) => {
  const details = route.params;
  const data = MEALS.find((meal) => meal.id === details.itemId);
  const [isFavourited, setIsFavourited] = useState(false);
  const favoriteMeals = useContext(FavoritesContext);
  const mealIsFavourite = favoriteMeals.ids.includes(data.id);

  console.log(mealIsFavourite);
  const renderSteps: ListRenderItem<Step> = (step) => {
    return <Step step={step.item} />;
  };

  const favouriteHandler = () => {
    setIsFavourited((prevState) => !prevState);
    console.log(isFavourited);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: data.title,
      headerRight: () => (
        <IconButton
          name={mealIsFavourite ? 'heart' : 'md-heart-outline'}
          onPress={favouriteHandler}
          color="brown"
        />
      ),
    });
  }, []);

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
