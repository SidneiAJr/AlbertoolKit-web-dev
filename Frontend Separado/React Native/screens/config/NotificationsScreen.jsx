// screens/config/NotificationsScreen.jsx
import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';

const NotificationsScreen = ({ onBack, onSave, title = "Notificações" }) => {
  const [settings, setSettings] = useState({
    push: true,
    email: true,
    sms: false,
    marketing: false,
    updates: true,
    alerts: true,
  });

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    onSave?.(settings);
  };

  const renderItem = (label, key, description = '') => (
    <View key={key} style={styles.item}>
      <View style={styles.itemText}>
        <Text style={styles.itemLabel}>{label}</Text>
        {description ? <Text style={styles.itemDescription}>{description}</Text> : null}
      </View>
      <Switch value={settings[key]} onValueChange={() => toggleSetting(key)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Canais</Text>
          {renderItem('Notificações Push', 'push', 'Receber alertas no celular')}
          {renderItem('Email', 'email', 'Receber alertas por email')}
          {renderItem('SMS', 'sms', 'Receber alertas por SMS')}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tipos de alerta</Text>
          {renderItem('Alertas gerais', 'alerts', 'Atualizações importantes')}
          {renderItem('Atualizações do app', 'updates', 'Novidades e melhorias')}
          {renderItem('Marketing', 'marketing', 'Promoções e ofertas')}
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#eee' },
  backButton: { padding: 8, width: 40 },
  backText: { fontSize: 24, color: '#333' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  saveButton: { padding: 8 },
  saveText: { color: '#2196F3', fontWeight: 'bold', fontSize: 14 },
  content: { flex: 1, padding: 16 },
  section: { backgroundColor: 'white', borderRadius: 12, marginBottom: 16, overflow: 'hidden' },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#999', paddingHorizontal: 16, paddingTop: 12, paddingBottom: 4 },
  item: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14, borderTopWidth: 1, borderTopColor: '#f0f0f0' },
  itemText: { flex: 1, marginRight: 16 },
  itemLabel: { fontSize: 16, color: '#333', marginBottom: 2 },
  itemDescription: { fontSize: 12, color: '#999' },
});
