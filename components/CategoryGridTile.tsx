import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

type Props = {
  title: string;
};

const CategoryGridTile = ({ title }: Props) => {
  return (
    <View>
      <Pressable onPress={() => {}}>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({});
