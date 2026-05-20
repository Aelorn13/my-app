import AsyncStorage from '@react-native-async-storage/async-storage';

const SUBSCRIPTION_KEY = 'user_subscription';

export async function saveSubscription(plan) {
  try {
    const payload = JSON.stringify({ plan, purchasedAt: new Date().toISOString() });
    await AsyncStorage.setItem(SUBSCRIPTION_KEY, payload);
  } catch (error) {
    throw error;
  }
}

export async function checkSubscription() {
  try {
    const raw = await AsyncStorage.getItem(SUBSCRIPTION_KEY);
    if (raw === null) return null;
    return JSON.parse(raw);
  } catch (error) {
    throw error;
  }
}