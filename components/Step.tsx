import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ShadowCard from './ShadowCard';

const Step = ({ step }) => {
  return (
    <ShadowCard>
      <Text style={styles.text}>{step}</Text>
    </ShadowCard>
  );
};

export default Step;

const styles = StyleSheet.create({
  text: {
    padding: 16,
  },
});
