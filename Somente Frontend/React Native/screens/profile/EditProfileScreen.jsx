// src/screens/profile/EditProfileScreen.jsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = ({ user, onSave, onCancel, title = "Editar Perfil" }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [avatar, setAvatar] = useState(user?.avatar || null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos de acesso às suas fotos');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.avatarContainer} onPress={pickImage}>
        {avatar ? (
          <Image source={{ uri: avatar }} style={styles.avatar} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>{name?.charAt(0).toUpperCase() || '?'}</Text>
          </View>
        )}
        <Text style={styles.changePhotoText}>Alterar foto</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Text style={styles.label}>Nome completo</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Digite seu nome" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Digite seu email" keyboardType="email-address" autoCapitalize="none" />

        <Text style={styles.label}>Bio</Text>
        <TextInput style={[styles.input, styles.textArea]} value={bio} onChangeText={setBio} placeholder="Conte um pouco sobre você" multiline numberOfLines={4} />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onCancel}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={() => onSave({ name, email, bio, avatar })}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
  avatarContainer: { alignItems: 'center', marginBottom: 24 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
  avatarPlaceholder: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#2196F3', justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  avatarText: { fontSize: 40, color: 'white', fontWeight: 'bold' },
  changePhotoText: { color: '#2196F3', fontSize: 14 },
  form: { flex: 1 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  input: { backgroundColor: 'white', borderRadius: 8, padding: 12, marginBottom: 16, borderWidth: 1, borderColor: '#ddd', fontSize: 16 },
  textArea: { height: 100, textAlignVertical: 'top' },
  buttons: { flexDirection: 'row', gap: 12, marginTop: 20, marginBottom: 20 },
  button: { flex: 1, padding: 14, borderRadius: 8, alignItems: 'center' },
  cancelButton: { backgroundColor: '#f0f0f0', borderWidth: 1, borderColor: '#ddd' },
  cancelButtonText: { color: '#666', fontWeight: 'bold' },
  saveButton: { backgroundColor: '#2196F3' },
  saveButtonText: { color: 'white', fontWeight: 'bold' },
});