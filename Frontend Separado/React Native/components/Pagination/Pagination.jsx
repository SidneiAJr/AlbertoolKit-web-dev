// Pagination/Pagination.jsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Pagination = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Anterior</Text>
      </TouchableOpacity>
      <Text>1</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, padding: 10 },
  button: { padding: 8, backgroundColor: '#f0f0f0', borderRadius: 4 },
});