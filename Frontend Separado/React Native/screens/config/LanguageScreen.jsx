// screens/config/LanguageScreen.jsx
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

const languages = [
  { code: 'pt', name: 'Português', native: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', native: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', native: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', native: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', native: 'Deutsch', flag: '🇩🇪' },
];

const LanguageScreen = ({ onSelectLanguage, currentLanguage = 'pt', onBack, title = "Idioma / Language" }) => {
  const [selected, setSelected] = useState(currentLanguage);

  const handleSelect = (code) => {
    setSelected(code);
    onSelectLanguage?.(code);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelect(item.code)}>
      <View style={styles.itemLeft}>
        <Text style={styles.flag}>{item.flag}</Text>
        <View>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemNative}>{item.native}</Text>
        </View>
      </View>
      <View style={[styles.radio, selected === item.code && styles.radioSelected]} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.placeholder} />
      </View>

      <FlatList
        data={languages}
        keyExtractor={(item) => item.code}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#eee' },
  backButton: { padding: 8, width: 40 },
  backText: { fontSize: 24, color: '#333' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  placeholder: { width: 40 },
  list: { padding: 16 },
  item: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', borderRadius: 12, padding: 16, marginBottom: 8 },
  itemLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  flag: { fontSize: 32 },
  itemName: { fontSize: 16, fontWeight: '500', color: '#333' },
  itemNative: { fontSize: 12, color: '#999' },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#ddd' },
  radioSelected: { borderColor: '#2196F3', backgroundColor: '#2196F3' },
});
