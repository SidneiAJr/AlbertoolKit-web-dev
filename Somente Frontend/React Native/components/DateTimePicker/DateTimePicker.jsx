// DateTimePicker/DateTimePicker.jsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DateTimePicker = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Selecionar Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DateTimePicker;

const styles = StyleSheet.create({
  container: { padding: 10 },
  button: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 8, alignItems: 'center' },
});