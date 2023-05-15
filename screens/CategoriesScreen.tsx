import React from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

type Props = {};

type Category = {
  id: string;
  title: string;
  color: string;
};

const renderCategoryItem: ListRenderItem<Category> = ({ item }) => (
  <CategoryGridTile title={item.title} color={item.color} />
);

const CategoriesScreen: React.FC<Props> = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
