import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  name: any;
  size?: number;
  color?: string;
  onPress: () => void;
  style?: ViewStyle;
}

const IconButton: React.FC<IconButtonProps> = ({
  name,
  size = 24,
  color = '#333',
  onPress,
  style,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        style,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});

export default IconButton;
