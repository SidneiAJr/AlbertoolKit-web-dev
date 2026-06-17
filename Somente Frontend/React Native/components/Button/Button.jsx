import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const BotaoCustom = ({ title, onPress, variant = 'primary' }) => {
  const buttonStyle = [styles.botao, styles[variant]];
  
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.texto}>{title || 'Clique'}</Text>
    </TouchableOpacity>
  );
};

export default BotaoCustom;

const styles = StyleSheet.create({
  botao: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  primary: {
    backgroundColor: '#2196F3',
  },
  danger: {
    backgroundColor: '#f44336',
  },
  success: {
    backgroundColor: '#4CAF50',
  },
});