import { useCallback } from 'react';
import { Provider } from 'react-redux'
import { store } from './Src/App/Store'
import { Theme } from './Src/Theme/ThemeContext'
import Route from './Src/Navigation/Route'
import { ThemeProvider, createTheme } from '@rneui/themed';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();
const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Jost-SemiBold': require('./assets/Fonts/Jost-SemiBold.ttf'),
    'Mulish-Bold': require('./assets/Fonts/Mulish-Bold.ttf'),
    'Aubrey-Regular': require('./assets/Fonts/Aubrey-Regular.ttf'),

    'Poppins-SemiBold': require('./assets/Fonts/Poppins-SemiBold.ttf'),

    
  });

  

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={{flex:1}} onLayout={onLayoutRootView}>   
    <Provider store={store}>
      <ThemeProvider>   
      <Theme>   

<Route/> 
      </Theme>
    </ThemeProvider>
    </Provider>
    </View>
  )
}

export default App
