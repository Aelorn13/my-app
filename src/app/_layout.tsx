import { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Slot, router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { checkSubscription } from '../storage/subscription';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    async function bootstrap() {
      try {
        const subscription = await checkSubscription();
        if (subscription) {
          router.replace('/home');
        } else {
          router.replace('/onboarding');
        }
      } catch (error) {
        router.replace('/onboarding');
      } finally {
        setChecking(false);
        await SplashScreen.hideAsync();
      }
    }

    bootstrap();
  }, []);

  if (checking) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return <Slot />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});