import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import ShadowCard from '../components/ShadowCard';
import renderIcons from '../utils/renderIcons';
import Ingredients from '../components/Ingredients';
import Step from '../components/Step';

type Step = {
  id: string;
  step: string;
};

const MealDetailScreen = ({ route, navigation }) => {
  const details = route.params;
  const data = MEALS.find((meal) => meal.id === details.itemId);

  const renderSteps: ListRenderItem<Step> = (step) => {
    console.log(step.item);
    return <Step step={step.item} />;
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title: details.title });
  }, []);

  return (
    <View>
      <Image source={{ uri: data.imageUrl }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>

        <ShadowCard stylesProp={styles.infoBox}>
          <View style={styles.infoDetail}>
            {renderIcons('clock')}
            <Text>{data.duration}</Text>
          </View>
          <Text style={[{ textAlign: 'center' }, styles.infoDetail]}>
            {renderIcons('cog', data.complexity)}
          </Text>
          <Text style={[{ textAlign: 'right' }, styles.infoDetail]}>
            {renderIcons('pound-sign', data.affordability)}
          </Text>
        </ShadowCard>

        <ShadowCard stylesProp={styles.main}>
          <Ingredients ingredients={data.ingredients} />
        </ShadowCard>

        <FlatList data={data.steps} renderItem={renderSteps} />
      </View>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  infoDetail: {
    flex: 1,
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  main: {
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
});
