// Spinner.tsx
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';

const Spinner = ({ size = 'large', color = '#2196F3' }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});