import { Text, StyleSheet } from 'react-native';

const icons = {
  home: '🏠',
  user: '👤',
  settings: '⚙️',
  logout: '🚪',
  add: '➕',
  edit: '✏️',
  delete: '🗑️',
  search: '🔍',
  filter: '🔽',
  back: '←',
  close: '✕',
  check: '✓',
  warning: '⚠️',
  info: 'ℹ️',
  success: '✅',
  error: '❌',
  heart: '❤️',
  star: '⭐',
  rio: '🌊',
};

const Icon = ({ name, size = 24, color = '#333' }) => {
  return (
    <Text style={[styles.icon, { fontSize: size, color }]}>
      {icons[name] || '❓'}
    </Text>
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: { textAlign: 'center' },
});