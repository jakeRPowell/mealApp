import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MealsOverview = ({ route }) => {
  const { categoryId } = route.params;
  return (
    <View>
      <Text>categoryId: {categoryId}</Text>
    </View>
  );
};

export default MealsOverview;

const styles = StyleSheet.create({});
