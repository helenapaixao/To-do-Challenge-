
import { useFonts } from 'expo-font'
import * as SplashScreen from "expo-splash-screen"
import {Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter'
import Home from './src/pages/Home'
import AppLoading from 'expo-app-loading'



export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading/>
  } else {
    return (
      <Home/>
    )
  }
 
}

