// Switch/Switch.jsx
import { View, Switch as RNSwitch, StyleSheet } from 'react-native';
import { useState } from 'react';

const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <RNSwitch value={isEnabled} onValueChange={setIsEnabled} />
    </View>
  );
};

export default Switch;

const styles = StyleSheet.create({
  container: { padding: 10 },
});