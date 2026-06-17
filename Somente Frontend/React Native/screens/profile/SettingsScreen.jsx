// src/screens/profile/SettingsScreen.jsx
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { useState } from 'react';

const SettingsScreen = ({ onEditProfile, onChangePassword, onNotifications, onLogout, title = "Configurações" }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conta</Text>
        <TouchableOpacity style={styles.item} onPress={onEditProfile}>
          <Text style={styles.itemText}>Editar Perfil</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={onChangePassword}>
          <Text style={styles.itemText}>Alterar Senha</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferências</Text>
        <View style={styles.item}>
          <Text style={styles.itemText}>Notificações</Text>
          <Switch value={notifications} onValueChange={(value) => { setNotifications(value); onNotifications?.(value); }} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Modo Escuro</Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
  section: { backgroundColor: 'white', borderRadius: 12, marginBottom: 20, overflow: 'hidden' },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#999', paddingHorizontal: 16, paddingTop: 12, paddingBottom: 4 },
  item: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14, borderTopWidth: 1, borderTopColor: '#f0f0f0' },
  itemText: { fontSize: 16, color: '#333' },
  arrow: { fontSize: 20, color: '#ccc' },
  logoutButton: { marginTop: 20, padding: 14, borderRadius: 8, alignItems: 'center', backgroundColor: '#f44336' },
  logoutText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});