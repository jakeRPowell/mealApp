import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import ShadowCard from '../ShadowCard';
import renderIcons from '../../utils/renderIcons';

const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  return (
    <ShadowCard stylesProp={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [pressed ? styles.mealItemPressed : null]}
        onPress={onPress}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.mealItemInner}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.infoBox}>
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
          </View>
        </View>
      </Pressable>
    </ShadowCard>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  mealItemPressed: {
    opacity: 0.7,
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
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    paddingTop: 16,
  },
  infoDetail: {
    flex: 1,
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
