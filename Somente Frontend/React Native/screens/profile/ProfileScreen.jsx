import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = ({ user, onEdit, onLogout, title = "Meu Perfil" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      
      <View style={styles.avatarContainer}>
        {user?.avatar ? (
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>{user?.name?.charAt(0).toUpperCase() || '?'}</Text>
          </View>
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.value}>{user?.name || '—'}</Text>
        
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user?.email || '—'}</Text>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={onEdit}>
        <Text style={styles.editButtonText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
  avatarContainer: { alignItems: 'center', marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  avatarPlaceholder: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#2196F3', justifyContent: 'center', alignItems: 'center' },
  avatarText: { fontSize: 40, color: 'white', fontWeight: 'bold' },
  info: { backgroundColor: 'white', borderRadius: 12, padding: 16, marginBottom: 20 },
  label: { fontSize: 12, color: '#999', marginBottom: 4 },
  value: { fontSize: 16, color: '#333', marginBottom: 16 },
  editButton: { backgroundColor: '#2196F3', padding: 14, borderRadius: 8, alignItems: 'center', marginBottom: 12 },
  editButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  logoutButton: { backgroundColor: '#f44336', padding: 14, borderRadius: 8, alignItems: 'center' },
  logoutButtonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});