// src/screens/auth/LoginScreen.jsx (melhorado)
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { useState } from 'react';

const LoginScreen = ({ 
  onLogin, 
  onRegister, 
  onForgotPassword, 
  title = "Bem-vindo", 
  subtitle = "Faça login para continuar", 
  logo = null,
  loading = false 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.inner}>
        {logo && <Image source={logo} style={styles.logo} />}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <TextInput 
          style={styles.input} 
          placeholder="Email" 
          value={email} 
          onChangeText={setEmail} 
          keyboardType="email-address" 
          autoCapitalize="none"
          editable={!loading}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Senha" 
          value={password} 
          onChangeText={setPassword} 
          secureTextEntry
          editable={!loading}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => onLogin(email, password)}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity onPress={onForgotPassword} disabled={loading}>
            <Text style={styles.link}>Esqueceu a senha?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onRegister} disabled={loading}>
            <Text style={styles.link}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  inner: { flex: 1, justifyContent: 'center', padding: 20 },
  logo: { width: 100, height: 100, alignSelf: 'center', marginBottom: 20 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 8, color: '#333' },
  subtitle: { fontSize: 14, textAlign: 'center', marginBottom: 32, color: '#666' },
  input: { backgroundColor: 'white', borderRadius: 8, padding: 12, marginBottom: 16, borderWidth: 1, borderColor: '#ddd', fontSize: 16 },
  button: { backgroundColor: '#2196F3', padding: 14, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  link: { color: '#2196F3', fontSize: 14 },
});