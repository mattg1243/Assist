import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeModules } from 'react-native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// custom components
import ItemsList from './components/ItemsList';
import ItemPage from './components/ItemPage';
import Splash from './components/Splash';
import Loading from './components/Loading';
import { theme as nbTheme } from './theme';

// create a stack instance
const Stack = createNativeStackNavigator();
// custom theme
const MyTheme = {
  dark: true,
  colors: {
    primary: '#669bbc',
    background: '#003049',
    card: '#669bbc',
  }
}

// testing native modules
const { Counter } = NativeModules
console.log(Counter)
Counter.increment();


export default function App() {
  // load custom fonts before rendering
  // let [fontsLoaded] = useFonts({ OleoScriptSwashCaps_400Regular })
  // make sure rendering only occurs when fonts/assets are loaded

    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <NavigationContainer theme={MyTheme}>
            <Stack.Navigator initialRouteName="Splash">
              <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
              <Stack.Screen name="ItemsList" component={ItemsList} options={{ headerShown: false }}/>
              <Stack.Screen name="ItemPage" component={ItemPage} options={{ headerShown: false }}/>
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaProvider>
      
    );
}