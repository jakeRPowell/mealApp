import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface TitleProps {
  title: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const Title: React.FC<TitleProps> = ({ title, style, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, style]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Title;
