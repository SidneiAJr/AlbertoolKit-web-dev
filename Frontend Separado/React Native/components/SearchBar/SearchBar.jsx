// SearchBar/SearchBar.jsx
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Buscar..." />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: { width: '100%', padding: 10 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 10 },
});