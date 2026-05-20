import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to MyApp</Text>
        <Text style={styles.subtitle}>Everything you need, in one place.</Text>

        <View style={styles.features}>
          <Text style={styles.featureItem}>✦  Track your progress daily</Text>
          <Text style={styles.featureItem}>✦  Get personalised insights</Text>
          <Text style={styles.featureItem}>✦  Stay on top of your goals</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/paywall')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 60,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 40,
  },
  features: {
    gap: 16,
  },
  featureItem: {
    fontSize: 15,
    color: '#222222',
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});