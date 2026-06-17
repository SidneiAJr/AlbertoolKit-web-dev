// Checkbox/Checkbox.jsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Checkbox = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box} />
      <Text>Opção</Text>
    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  box: { width: 20, height: 20, borderWidth: 1, borderColor: '#ddd', borderRadius: 4 },
});