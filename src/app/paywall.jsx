import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { saveSubscription } from '../storage/subscription';

const PLANS = [
  {
    id: 'yearly',
    label: 'Yearly',
    price: '$59.99',
    sub: '$5.00 / month',
    badge: '50% OFF',
  },
  {
    id: 'monthly',
    label: 'Monthly',
    price: '$9.99',
    sub: '$9.99 / month',
    badge: null,
  },
];

export default function Paywall() {
  const [selected, setSelected] = useState('yearly');
  const [loading, setLoading] = useState(false);

  async function handleContinue() {
    setLoading(true);
    try {
      await saveSubscription(selected);
      router.replace('/home');
    } catch (error) {
      Alert.alert('Something went wrong', 'We could not save your subscription. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Choose your plan</Text>
        <Text style={styles.subtitle}>Unlock full access. Cancel anytime.</Text>

        <View style={styles.plans}>
          {PLANS.map((plan) => {
            const isSelected = selected === plan.id;
            return (
              <TouchableOpacity
                key={plan.id}
                style={[styles.planCard, isSelected && styles.planCardSelected]}
                onPress={() => setSelected(plan.id)}
                activeOpacity={0.8}
              >
                <View style={styles.planRow}>
                  <View>
                    <Text style={[styles.planLabel, isSelected && styles.planLabelSelected]}>
                      {plan.label}
                    </Text>
                    <Text style={[styles.planSub, isSelected && styles.planSubSelected]}>
                      {plan.sub}
                    </Text>
                  </View>
                  <View style={styles.planRight}>
                    {plan.badge && (
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>{plan.badge}</Text>
                      </View>
                    )}
                    <Text style={[styles.planPrice, isSelected && styles.planPriceSelected]}>
                      {plan.price}
                    </Text>
                  </View>
                </View>
                <View style={[styles.radioRow]}>
                  <View style={[styles.radioOuter, isSelected && styles.radioOuterSelected]}>
                    {isSelected && <View style={styles.radioInner} />}
                  </View>
                  <Text style={[styles.radioLabel, isSelected && styles.radioLabelSelected]}>
                    {isSelected ? 'Selected' : 'Tap to select'}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleContinue}
        disabled={loading}
        activeOpacity={0.8}
      >
        {loading ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Continue</Text>
        )}
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
    marginBottom: 32,
  },
  plans: {
    gap: 16,
  },
  planCard: {
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    borderRadius: 14,
    padding: 18,
    backgroundColor: '#fafafa',
  },
  planCardSelected: {
    borderColor: '#000000',
    backgroundColor: '#000000',
  },
  planRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  planLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  planLabelSelected: {
    color: '#ffffff',
  },
  planSub: {
    fontSize: 13,
    color: '#888888',
  },
  planSubSelected: {
    color: '#aaaaaa',
  },
  planRight: {
    alignItems: 'flex-end',
    gap: 6,
  },
  planPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  planPriceSelected: {
    color: '#ffffff',
  },
  badge: {
    backgroundColor: '#f0c000',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#000000',
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterSelected: {
    borderColor: '#ffffff',
  },
  radioInner: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  radioLabel: {
    fontSize: 12,
    color: '#aaaaaa',
  },
  radioLabelSelected: {
    color: '#cccccc',
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});