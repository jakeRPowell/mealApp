import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ShadowCard from './ShadowCard';

const renderIcons = (name, count) => {
  const icons = [];
  for (let i = 0; i < count; i++) {
    icons.push(<FontAwesome5 key={i} name={name} size={24} color="black" />);
  }
  return icons;
};

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <ShadowCard stylesProp={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [pressed ? styles.mealItemPressed : null]}
      >
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.mealItemInner}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.infoBox}>
            <View style={styles.infoDetail}>
              <FontAwesome5 name="clock" size={24} color="black" />
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
