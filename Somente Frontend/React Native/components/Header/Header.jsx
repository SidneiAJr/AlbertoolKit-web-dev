import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, showBack = false, onBack, rightComponent }) => {
  return (
    <View style={styles.header}>
      {showBack && (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightContainer}>{rightComponent}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#2196F3' },
  backButton: { width: 40 },
  backText: { fontSize: 24, color: 'white' },
  title: { flex: 1, fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center' },
  rightContainer: { width: 40, alignItems: 'flex-end' },
});