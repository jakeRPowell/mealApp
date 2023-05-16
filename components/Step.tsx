import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Step = ({ step }) => {
  return (
    <View>
      <Text>{step}</Text>
    </View>
  );
};

export default Step;

const styles = StyleSheet.create({});
