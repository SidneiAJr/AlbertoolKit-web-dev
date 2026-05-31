// screens/onboarding/OnboardingScreen.jsx
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

const slides = [
  { id: 1, title: 'Bem-vindo', description: 'Gerencie tudo em um só lugar', icon: '🚀' },
  { id: 2, title: 'Monitore em tempo real', description: 'Acompanhe dados importantes', icon: '📊' },
  { id: 3, title: 'Tudo pronto!', description: 'Vamos começar?', icon: '✅' },
];

const OnboardingScreen = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / styles.slide.width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.dots}>
        {slides.map((_, index) => (
          <View key={index} style={[styles.dot, currentIndex === index && styles.dotActive]} />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentIndex === slides.length - 1 ? 'Começar' : 'Próximo'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  slide: { width: 340, justifyContent: 'center', alignItems: 'center', padding: 20 },
  icon: { fontSize: 80, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  description: { fontSize: 16, color: '#666', textAlign: 'center' },
  dots: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#ccc', marginHorizontal: 5 },
  dotActive: { width: 20, backgroundColor: '#2196F3' },
  button: { backgroundColor: '#2196F3', margin: 20, padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});