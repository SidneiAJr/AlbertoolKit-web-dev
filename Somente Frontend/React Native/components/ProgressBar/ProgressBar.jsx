import { View, Text, StyleSheet } from 'react-native';

export default function ProgressBar({ value, max = 100, color = '#4CAF50' }) {
  const percent = (value / max) * 100;
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <View style={[styles.fill, { width: `${percent}%`, backgroundColor: color }]} />
      </View>
      <Text style={styles.label}>{Math.round(percent)}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '100%', alignItems: 'center' },
  bg: { width: '100%', height: 8, backgroundColor: '#e0e0e0', borderRadius: 4, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 4 },
  label: { marginTop: 4, fontSize: 12, color: '#666' },
});