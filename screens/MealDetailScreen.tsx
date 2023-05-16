import { StyleSheet, Text, View, Image } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import ShadowCard from '../components/ShadowCard';
import { FontAwesome5 } from '@expo/vector-icons';

const renderIcons = (name, count) => {
  const icons = [];
  for (let i = 0; i < count; i++) {
    icons.push(<FontAwesome5 key={i} name={name} size={24} color="black" />);
  }
  return icons;
};

const MealDetailScreen = ({ route, navigation }) => {
  const details = route.params;
  const data = MEALS.find((meal) => meal.id === details.itemId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: details.title });
  }, []);

  return (
    <View>
      <Image source={{ uri: data.imageUrl }} style={styles.image} />
      <View>
        <ShadowCard stylesProp={styles.infoBox}>
          <View style={styles.infoDetail}>
            <FontAwesome5 name="clock" size={24} color="black" />
            <Text>{data.duration}</Text>
          </View>
          <Text style={[{ textAlign: 'center' }, styles.infoDetail]}>
            {renderIcons('cog', data.complexity)}
          </Text>
          <Text style={[{ textAlign: 'right' }, styles.infoDetail]}>
            {renderIcons('pound-sign', data.affordability)}
          </Text>
        </ShadowCard>

        <Text style={styles.title}>{data.title}</Text>
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
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    paddingTop: 16,
  },
  infoDetail: {
    flex: 1,
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});
