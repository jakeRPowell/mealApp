import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Ingredients = ({ ingredients }) => {
  return (
    <View>
      {ingredients.map((ingredient, index) => (
        <Text key={index}>- {ingredient}</Text>
      ))}
    </View>
  );
};

export default Ingredients;

const styles = StyleSheet.create({});
