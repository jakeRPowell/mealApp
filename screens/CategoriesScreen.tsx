import React from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

type Props = {};

type Category = {
  id: string;
  title: string;
  color: string;
};

const CategoriesScreen: React.FC<Props> = () => {
  const renderCategoryItem: ListRenderItem<Category> = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return <FlatList data={CATEGORIES} renderItem={renderCategoryItem} />;
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
