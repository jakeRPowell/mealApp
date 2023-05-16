import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const renderIcons = (name, count) => {
  const icons = [];
  for (let i = 0; i < count; i++) {
    icons.push(<FontAwesome5 key={i} name={name} size={24} color="black" />);
  }
  return icons;
};

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.mealItemInner}>
          <Text style={styles.title}>{title}</Text>
          <Text>
            <FontAwesome5 name="clock" size={24} color="black" />
            {duration}
          </Text>
          <Text>{renderIcons('cog', complexity)}</Text>
          <Text>{renderIcons('pound-sign', affordability)}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 15,
    backgroundColor: '#fff',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    borderRadius: 8,
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  mealItemInner: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
