import { View, Text, FlatList, StyleSheet } from 'react-native';

const FEATURES = [
  {
    id: '1',
    icon: '📊',
    title: 'Daily Tracking',
    description: 'Log your activity and monitor progress every day.',
  },
  {
    id: '2',
    icon: '🎯',
    title: 'Goal Setting',
    description: 'Define targets and get notified when you hit them.',
  },
  {
    id: '3',
    icon: '💡',
    title: 'Smart Insights',
    description: 'Personalised tips based on your usage patterns.',
  },
  {
    id: '4',
    icon: '🔒',
    title: 'Private & Secure',
    description: 'Your data stays on your device, always encrypted.',
  },
  {
    id: '5',
    icon: '⚡',
    title: 'Instant Sync',
    description: 'Everything updates in real time across your devices.',
  },
];

function FeatureCard({ icon, title, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardIcon}>{icon}</Text>
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </View>
  );
}

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good morning 👋</Text>
        <Text style={styles.subtitle}>Here's what's available to you.</Text>
      </View>

      <FlatList
        data={FEATURES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FeatureCard
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: '#777777',
  },
  list: {
    padding: 24,
    gap: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 14,
    padding: 18,
    gap: 16,
  },
  cardIcon: {
    fontSize: 28,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});