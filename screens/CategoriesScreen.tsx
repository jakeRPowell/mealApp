import React from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

type Props = {
  navigation: any;
};

type Category = {
  id: string;
  title: string;
  color: string;
};

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  const renderCategoryItem: ListRenderItem<Category> = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', { categoryId: item.id });
    };

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

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
