import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import ShadowCard from './ShadowCard';

type Props = {
  title: string;
  color: string;
  onPress: () => void;
};

const CategoryGridTile = ({ title, color, onPress }: Props) => {
  return (
    <ShadowCard stylesProp={[{ backgroundColor: color }, styles.gridItem]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: '#ffffff40' }}
        onPress={onPress}
      >
        <View style={styles.gridItemInner}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </ShadowCard>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
  },
  button: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    backgroundColor: '#ffffff40',
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
