import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Título do Card</Text>
      <Text style={styles.content}>Conteúdo do card aqui</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  content: {
    fontSize: 14,
    color: '#666',
  },
});