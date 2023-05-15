import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

type Props = {
  title: string;
  color: string;
};

const CategoryGridTile = ({ title, color }: Props) => {
  return (
    <View style={[{ backgroundColor: color }, styles.gridItem]}>
      <Pressable style={styles.button} onPress={() => {}}>
        <View style={styles.gridItemInner}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gridItemInner: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
