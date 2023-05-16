import { StyleSheet, Text, View, Image } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ route, navigation }) => {
  const details = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: details.title });
  }, []);

  const data = MEALS.find((meal) => meal.id === details.itemId);

  console.log(data);

  return (
    <View>
      <Image source={{ uri: data.imageUrl }} style={styles.image} />
      <Text>{data.duration}</Text>
      <Text>{data.complexity}</Text>
      <Text>{data.affordability}</Text>
      {data.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      {data.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
});
