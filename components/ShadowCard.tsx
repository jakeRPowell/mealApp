import { StyleSheet, View, Platform } from 'react-native';

type Props = {
  children: React.ReactNode;
  stylesProp?: object;
};

const ShadowCard = ({ children, stylesProp }: Props) => {
  return <View style={[styles.shadowStyles, stylesProp]}>{children}</View>;
};

export default ShadowCard;

const styles = StyleSheet.create({
  shadowStyles: {
    backgroundColor: '#fff',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
});
