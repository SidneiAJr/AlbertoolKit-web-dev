import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AVATAR</Text>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});