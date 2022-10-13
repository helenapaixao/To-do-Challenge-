import * as SplashScreen from "expo-splash-screen"
import {useFonts,Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter'
import Home from './src/pages/Home'
import { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded) return null;

  return (
    <SafeAreaView onLayout={onLayoutRootView}>
    
      <Home/>

    </SafeAreaView>
  )
 
}

