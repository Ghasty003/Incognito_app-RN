import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-native-paper";

import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import { StackParams } from './src/utils/types';


const Stack = createNativeStackNavigator<StackParams>();


export default function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{
          headerStyle: {
            backgroundColor: "dodgerblue"
          }
        }}>
          <Stack.Screen name='SplashScreen' component={SplashScreen} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
        <StatusBar style="light" />
      </Provider>
    </NavigationContainer>
  );
}