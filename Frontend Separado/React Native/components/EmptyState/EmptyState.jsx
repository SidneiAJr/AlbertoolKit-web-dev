import { View, Text, Image, StyleSheet } from 'react-native';

const EmptyState = ({ title = 'Nenhum dado', message = 'Nada encontrado por aqui', icon = '📭' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', padding: 40 },
  icon: { fontSize: 64, marginBottom: 16 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  message: { fontSize: 14, color: '#999', textAlign: 'center' },
});