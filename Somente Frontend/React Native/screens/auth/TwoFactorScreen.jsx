// screens/auth/TwoFactorScreen.jsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

const TwoFactorScreen = ({ onVerify, onResend, email, onBack, title = "Autenticação de Dois Fatores" }) => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!code || code.length !== 6) {
      Alert.alert('Erro', 'Digite o código de 6 dígitos');
      return;
    }
    setLoading(true);
    await onVerify(code);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Enviamos um código para {email}</Text>

      <TextInput
        style={styles.input}
        placeholder="Código de 6 dígitos"
        keyboardType="number-pad"
        value={code}
        onChangeText={setCode}
        maxLength={6}
      />

      <TouchableOpacity style={styles.button} onPress={handleVerify} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Verificando...' : 'Verificar'}</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity onPress={onResend}>
          <Text style={styles.link}>Reenviar código</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.link}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TwoFactorScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, textAlign: 'center', marginBottom: 32, color: '#666' },
  input: { backgroundColor: 'white', borderRadius: 8, padding: 12, marginBottom: 20, borderWidth: 1, borderColor: '#ddd', fontSize: 18, textAlign: 'center' },
  button: { backgroundColor: '#2196F3', padding: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  link: { color: '#2196F3', fontSize: 14 },
});