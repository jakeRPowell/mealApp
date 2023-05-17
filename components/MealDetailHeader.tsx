import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { MEALS } from '../data/dummy-data';
import { useNavigation } from '@react-navigation/native';
import ShadowCard from './ShadowCard';
import Ingredients from './Ingredients';
import renderIcons from '../utils/renderIcons';
import Title from './ui/Title';

const MealDetailHeader = ({
  affordability,
  complexity,
  duration,
  imageUrl,
  title,
  id,
  ingredients,
}) => {
  return (
    <View>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View>
        <Text style={styles.title}>{title}</Text>

        <ShadowCard stylesProp={styles.infoBox}>
          <View style={styles.infoDetail}>
            {renderIcons('clock')}
            <Text>{duration}</Text>
          </View>
          <Text style={[{ textAlign: 'center' }, styles.infoDetail]}>
            {renderIcons('cog', complexity)}
          </Text>
          <Text style={[{ textAlign: 'right' }, styles.infoDetail]}>
            {renderIcons('pound-sign', affordability)}
          </Text>
        </ShadowCard>

        <Title title="Ingredients" />
        <ShadowCard stylesProp={styles.main}>
          <Ingredients ingredients={ingredients} />
        </ShadowCard>
      </View>
      <Title title="Steps" />
    </View>
  );
};

export default MealDetailHeader;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    padding: 16,
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
});
