// screens/form/FormScreen.jsx
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

const FormScreen = ({ 
  fields = [], 
  onSubmit, 
  onCancel, 
  title = "Formulário", 
  submitText = "Enviar", 
  loading = false 
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field.name]: value });
    if (errors[field.name]) {
      setErrors({ ...errors, [field.name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    fields.forEach(field => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} é obrigatório`;
      }
      if (field.validate && field.validate(formData[field.name])) {
        newErrors[field.name] = field.validate(formData[field.name]);
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(formData);
    } else {
      Alert.alert('Erro', 'Preencha todos os campos corretamente');
    }
  };

  const renderField = (field) => {
    const value = formData[field.name] || '';
    const hasError = !!errors[field.name];

    return (
      <View key={field.name} style={styles.field}>
        <Text style={styles.label}>{field.label}{field.required && <Text style={styles.required}> *</Text>}</Text>
        <TextInput
          style={[styles.input, hasError && styles.inputError]}
          placeholder={field.placeholder}
          secureTextEntry={field.secureTextEntry}
          keyboardType={field.keyboardType || 'default'}
          autoCapitalize={field.autoCapitalize || 'none'}
          value={value}
          onChangeText={(text) => handleChange(field, text)}
          editable={!loading}
        />
        {hasError && <Text style={styles.errorText}>{errors[field.name]}</Text>}
        {field.helper && <Text style={styles.helper}>{field.helper}</Text>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <ScrollView style={styles.form}>
        {fields.map(renderField)}
      </ScrollView>

      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onCancel} disabled={loading}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit} disabled={loading}>
          <Text style={styles.submitText}>{loading ? 'Enviando...' : submitText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
  form: { flex: 1 },
  field: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  required: { color: '#f44336' },
  input: { backgroundColor: 'white', borderRadius: 8, padding: 12, borderWidth: 1, borderColor: '#ddd', fontSize: 16 },
  inputError: { borderColor: '#f44336' },
  errorText: { color: '#f44336', fontSize: 12, marginTop: 4 },
  helper: { color: '#999', fontSize: 12, marginTop: 4 },
  buttons: { flexDirection: 'row', gap: 12, marginTop: 20 },
  button: { flex: 1, padding: 14, borderRadius: 8, alignItems: 'center' },
  cancelButton: { backgroundColor: '#f0f0f0', borderWidth: 1, borderColor: '#ddd' },
  cancelText: { color: '#666', fontWeight: 'bold' },
  submitButton: { backgroundColor: '#2196F3' },
  submitText: { color: 'white', fontWeight: 'bold' },
});
