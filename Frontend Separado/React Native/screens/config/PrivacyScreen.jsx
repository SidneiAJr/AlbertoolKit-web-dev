// screens/config/PrivacyScreen.jsx
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const PrivacyScreen = ({ onBack, title = "Privacidade" }) => {
  const sections = [
    {
      title: 'Política de Privacidade',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
      title: 'Termos de Uso',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      title: 'Dados Coletados',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    },
  ];

  const handleLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        {sections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionContent}>{section.content}</Text>
          </View>
        ))}

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => handleLink('https://example.com/privacy')}>
            <Text style={styles.link}>Política de Privacidade Completa</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLink('https://example.com/terms')}>
            <Text style={styles.link}>Termos de Uso Completos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#eee' },
  backButton: { padding: 8, width: 40 },
  backText: { fontSize: 24, color: '#333' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  placeholder: { width: 40 },
  content: { flex: 1, padding: 16 },
  section: { backgroundColor: 'white', borderRadius: 12, padding: 16, marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  sectionContent: { fontSize: 14, color: '#666', lineHeight: 20 },
  footer: { alignItems: 'center', marginTop: 8, marginBottom: 20, gap: 12 },
  link: { color: '#2196F3', fontSize: 14, textDecorationLine: 'underline' },
});
