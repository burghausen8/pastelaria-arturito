
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import SplashAnimation from '../components/Splash';
import {ROUTES} from '@/constants/Routes';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf')
  });

  const [showSplashAnimation, setShowSplash] = useState(true);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style= {{flex: 1}}>
      {showSplashAnimation ? <SplashAnimation onCompleted={setShowSplash} /> : 
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name={ROUTES.REGISTER} />
        <Stack.Screen name={ROUTES.TABS}/>
      </Stack>
    }
    </GestureHandlerRootView>
  );
}
