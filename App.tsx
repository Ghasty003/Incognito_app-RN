import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import Login from './src/screens/Login';
import { StackParams } from './src/utils/types';


const Stack = createNativeStackNavigator<StackParams>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{
        headerStyle: {
          backgroundColor: "dodgerblue"
        }
      }}>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}