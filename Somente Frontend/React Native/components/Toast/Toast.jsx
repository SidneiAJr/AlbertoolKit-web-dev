import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';

export default function Toast({ message, type = 'info', duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const colors = { success: '#4CAF50', error: '#f44336', info: '#2196F3' };

  return (
    <View style={[styles.toast, { backgroundColor: colors[type] }]}>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.close}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    zIndex: 1000,
  },
  text: { color: 'white', flex: 1 },
  close: { color: 'white', fontSize: 16, marginLeft: 10 },
});