// screens/detail/DetailsScreen.jsx
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const DetailsScreen = ({ item, onEdit, onDelete, onBack, title = "Detalhes" }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity onPress={onEdit} style={styles.editButton}>
          <Text style={styles.editText}>✎</Text>
        </TouchableOpacity>
      </View>

      {item?.image && <Image source={{ uri: item.image }} style={styles.image} />}

      <View style={styles.content}>
        {Object.entries(item || {}).map(([key, value]) => {
          if (key === 'image' || key === 'id') return null;
          return (
            <View key={key} style={styles.field}>
              <Text style={styles.label}>{key.replace(/_/g, ' ').toUpperCase()}</Text>
              <Text style={styles.value}>{String(value)}</Text>
            </View>
          );
        })}
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={styles.deleteText}>Excluir</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#eee' },
  backButton: { padding: 8 },
  backText: { fontSize: 24, color: '#333' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  editButton: { padding: 8 },
  editText: { fontSize: 18, color: '#2196F3' },
  image: { width: '100%', height: 200, resizeMode: 'cover' },
  content: { padding: 16 },
  field: { backgroundColor: 'white', borderRadius: 8, padding: 12, marginBottom: 12 },
  label: { fontSize: 12, color: '#999', marginBottom: 4 },
  value: { fontSize: 16, color: '#333' },
  deleteButton: { margin: 16, backgroundColor: '#f44336', padding: 14, borderRadius: 8, alignItems: 'center' },
  deleteText: { color: 'white', fontWeight: 'bold' },
});